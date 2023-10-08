import React, { useState } from "react";
import Select from "react-select";
import app from "../../../api/firebase/firebase";
import { collection, query, where, getDocs, Query } from "firebase/firestore";
import { useNavigate, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import "firebase/compat/firestore";

import "./styles/search_bar.css";

interface OptionType {
  value: string;
  label: string;
}
interface SearchBarProps {
  onSearch: (query: string, category: string) => void;
  categories: OptionType[];
}

const db = app.firestore();

const SearchBar: React.FC<SearchBarProps> = ({ onSearch, categories }) => {
  const [queryList, setQueryList] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<OptionType | null>(
    categories[0]
  );
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleSearch = async () => {
    const productsRef = collection(db, "products");
    setSearchTerm(queryList);
    let q;

    if (selectedCategory && selectedCategory.value !== "All categories") {
      q = query(
        productsRef,
        where("title", "==", searchTerm),
        where("category", "==", selectedCategory.value)
      );
    } else {
      q = query(productsRef, where("title", "==", searchTerm));
    }

    try {
      const querySnapshot = await getDocs(q);
      const searchResults = querySnapshot.docs.map((doc) => doc.data());

      console.log("Search Term:", searchTerm);
      console.log("Constructed Query:", q);
      console.log("Fetched Results:", searchResults);

      navigate(`/search?query=${searchTerm}`, {
        state: { results: searchResults },
      });
    } catch (error) {
      console.error("Error fetching search results:", error);
    }
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        className="search-bar-input"
        placeholder="Search Products"
        value={queryList}
        onChange={(e) => setQueryList(e.target.value)}
      />
      <div className="select-search-container">
        <Select
          className="select-list"
          value={selectedCategory}
          onChange={(selectedOption) =>
            setSelectedCategory(selectedOption as OptionType)
          }
          options={categories}
          styles={{
            control: (provided, state) => ({
              ...provided,
              width: "clamp(72.5px,33.8778vw,290px)",
              border: "none",
              outline: "none",
              boxShadow: "none",
              paddingLeft: "10px",
              borderColor: "transparent",
              "&:hover": {
                borderColor: state.isFocused
                  ? "transparent"
                  : provided.borderColor,
              },
              fontSize: "clamp(7px,3.2709599999999996vw,28px)",
            }),
            dropdownIndicator: (provided) => ({
              ...provided,
              width: "auto",
              // paddingRight: "13px",
              paddingRight: "13px",
              // borderColor: "transparent",
            }),
            indicatorSeparator: () => ({
              display: "block",
            }),
            indicatorsContainer: () => ({
              padding: "0px",
              paddingLeft: "0px",
              paddingRight: "0px",
              margin: "0px",
            }),
          }}
        />
        <span className="separator"></span>
        <button className="search-button" onClick={handleSearch}>
          <FontAwesomeIcon icon={faSearch}></FontAwesomeIcon>
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
