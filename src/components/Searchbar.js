import React from 'react';

const Searchbar = ({ searchTerm, handleSearchChange }) => {
  return(
    <div>
      <input
        type="text"
        value={searchTerm}
        onChange={handleSearchChange}
        placeholder="Search"
      />
    </div>
  )
}

export default Searchbar;