import React from "react";
import { useLocation } from "react-router-dom";

const SearchResult = (props: any) => {
  const location = useLocation();

  const results = location.state?.results;

  return (
    <div>
      {results && results.length > 0 ? (
        results.map((product: any) => (
          <div key={product.id}>
            {/* Render product details here */}
            <h2>{product.title}</h2>
            <p>{product.description}</p>
            {/* ... */}
          </div>
        ))
      ) : (
        <p>No results found.</p>
      )}
    </div>
  );
};

export default SearchResult;
