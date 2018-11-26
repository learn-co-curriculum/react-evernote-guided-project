import React from 'react';

const Search = (props) => {

  const onChange = (event) => {
    props.filterNotes(event.target.value)
  }

  return (
    <div className="filter">
      <input
        id="search-bar"
        type="text"
        placeholder="Search Notes"
        onChange={onChange}/>
    </div>
  );
}

export default Search;
