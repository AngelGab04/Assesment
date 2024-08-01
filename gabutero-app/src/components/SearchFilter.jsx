import React from "react";

const SearchFilter = ({ searchQuery, setSearchQuery }) => {
  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search by name or address"
        value={searchQuery}
        onChange={handleSearchChange}
      />
    </div>
  );
};

export default SearchFilter;
