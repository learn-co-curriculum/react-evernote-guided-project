import React from 'react';

const Search = (props) => {

  return (
    <div className="filter">
      <input
        id="search-bar"
        type="text"
        placeholder="Search Notes"
        value={props.searchTerm}
        onChange={props.handleSearchChange}
      />
    </div>
  );
}

export default Search;
