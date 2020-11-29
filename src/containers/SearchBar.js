import React, { useState } from 'react';
import Loading from '../components/Loading';
import getSearchResult from '../API/getSearchResults';

const SearchBar = () => {
  const [display, setDisplay] = useState(false);
  const [options, setOptions] = useState([]);
  const [query, setQuery] = useState('');

  const parseSearchResult = searchString => {
    getSearchResult(searchString)
      .then(result => {
        setOptions(result);
      });
  };

  const beginSearch = e => {
    const searchString = e.target.value;

    setQuery(searchString);

    if (searchString.length > 3) {
      setDisplay(true);

      setTimeout(() => {
        parseSearchResult(searchString);
      }, 500);
    } else {
      setDisplay(false);
      setOptions([]);
    }
  };

  const endSearch = () => {
    setQuery('');
    setDisplay(false);
    setOptions([]);
  };

  return (
    <div className="search-bar">
      <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 512 512">
        <path fill="#fff" d="M508.5 481.6l-129-129c-2.3-2.3-5.3-3.5-8.5-3.5h-10.3C395 312 416 262.5 416 208 416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c54.5 0 104-21 141.1-55.2V371c0 3.2 1.3 6.2 3.5 8.5l129 129c4.7 4.7 12.3 4.7 17 0l9.9-9.9c4.7-4.7 4.7-12.3 0-17zM208 384c-97.3 0-176-78.7-176-176S110.7 32 208 32s176 78.7 176 176-78.7 176-176 176z" />
      </svg>

      <input type="text" value={query} onChange={beginSearch} placeholder="Start typing..." />

      {
        display && (
          <>
            <svg xmlns="http://www.w3.org/2000/svg" className="dismiss" onClick={endSearch} width="15" height="15" viewBox="0 0 320 512">
              <path fill="#fff" d="M193.94 256L296.5 153.44l21.15-21.15c3.12-3.12 3.12-8.19 0-11.31l-22.63-22.63c-3.12-3.12-8.19-3.12-11.31 0L160 222.06 36.29 98.34c-3.12-3.12-8.19-3.12-11.31 0L2.34 120.97c-3.12 3.12-3.12 8.19 0 11.31L126.06 256 2.34 379.71c-3.12 3.12-3.12 8.19 0 11.31l22.63 22.63c3.12 3.12 8.19 3.12 11.31 0L160 289.94 262.56 392.5l21.15 21.15c3.12 3.12 8.19 3.12 11.31 0l22.63-22.63c3.12-3.12 3.12-8.19 0-11.31L193.94 256z" />
            </svg>

            <div className="autocomplete">
              {
                options.length === 0
                  ? <Loading />
                  : options.map(anime => (
                    <a href={`/anime/${anime.mal_id}`} key={anime.mal_id} className="option" tab-index="-1">
                      <img src={anime.image_url} alt="" />

                      <div className="info">
                        <p>{anime.title}</p>
                        <p className="date">{parseInt(anime.start_date, 10)}</p>
                      </div>
                    </a>
                  ))
              }
            </div>
          </>
        )
      }
    </div>
  );
};

export default SearchBar;
