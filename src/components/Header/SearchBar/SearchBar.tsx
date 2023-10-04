import React, { useState } from "react";
import Select from "react-select";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

import "./styles/search_bar.css";

interface OptionType {
  value: string;
  label: string;
}
interface SearchBarProps {
  onSearch: (query: string, category: string) => void;
  categories: OptionType[];
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch, categories }) => {
  const [query, setQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<OptionType | null>(
    categories[0]
  );

  return (
    <div className="search-bar">
      <input
        type="text"
        className="search-bar-input"
        placeholder="Search Products"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
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
        <button className="search-button">
          <FontAwesomeIcon icon={faSearch}></FontAwesomeIcon>
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
