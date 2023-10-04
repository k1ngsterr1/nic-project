import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

interface SearchBarProps {
  onSearch: (query: string, category: string) => void;
  categories: string[];
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch, categories }) => {
  const [query, setQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);

  const handleSearch = () => {
    onSearch(query, selectedCategory);
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search Products"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <select
        className="select-list"
        value={selectedCategory}
        onChange={(e) => setSelectedCategory(e.target.value)}
      >
        {categories.map((category) => (
          <option className="option" key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
      <button className="search-button">
        <FontAwesomeIcon icon={faSearch}></FontAwesomeIcon>
      </button>
    </div>
  );
};

export default SearchBar;
