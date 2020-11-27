import React, { useState } from 'react';
import Loading from '../components/Loading';
import getSearchResult from '../API/getSearchResults';

const SearchBar = () => {
  const [display, setDisplay] = useState(false);
  const [options, setOptions] = useState([]);
  const [query, setQuery] = useState('');

  const setStates = e => {
    const searchString = e.target.value;

    setQuery(searchString);

    if (searchString.length > 2) {
      setDisplay(true);
      getSearchResult(searchString)
        .then(result => console.log(result));
    } else {
      setDisplay(false);
    }
  };

  return (
    <div className="search-bar">
      <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 512 512"><path fill="#fff" d="M508.5 481.6l-129-129c-2.3-2.3-5.3-3.5-8.5-3.5h-10.3C395 312 416 262.5 416 208 416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c54.5 0 104-21 141.1-55.2V371c0 3.2 1.3 6.2 3.5 8.5l129 129c4.7 4.7 12.3 4.7 17 0l9.9-9.9c4.7-4.7 4.7-12.3 0-17zM208 384c-97.3 0-176-78.7-176-176S110.7 32 208 32s176 78.7 176 176-78.7 176-176 176z" /></svg>

      <input type="text" value={query} onChange={setStates} placeholder="Start typing..." />

      {
        display && (
          <div className="autocomplete">
            <Loading />
          </div>
        )
      }
    </div>
  );
};

export default SearchBar;
