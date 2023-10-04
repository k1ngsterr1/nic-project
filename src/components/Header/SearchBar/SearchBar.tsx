import React, { useState } from "react";
import Select from "react-select/dist/declarations/src/Select";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

import "./styles/search_bar.css";

interface OptionType {
  value: string;
  option: string;
}
interface SearchBarProps {
  onSearch: (query: string, category: string) => void;
  categories: OptionType[]

}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch, categories }) => {
  const [query, setQuery] = useState("");
  const OptionType[]

  return (
    <div className="search-bar">
      <input
        type="text"
        className="search-bar-input"
        placeholder="Search Products"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <Select
        className="select-list"
        value={selectedCategory}
        onChange={(e) => setSelectedCategory(e.target.value)}
      >
        {categories.map((category) => (
          <option className="option" key={category} value={category}>
            {category}
          </option>
        ))}
      </Select>
      <button className="search-button">
        <FontAwesomeIcon icon={faSearch}></FontAwesomeIcon>
      </button>
    </div>
  );
};

export default SearchBar;
