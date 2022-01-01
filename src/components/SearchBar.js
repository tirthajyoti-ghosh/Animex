import React, { useState, useEffect } from 'react';
import Loading from './Loading';
import { CrossIcon, SearchIcon } from './Icons';
import getSearchResult from '../API/getSearchResults';

const SearchBar = () => {
    const [options, setOptions] = useState([]);
    const [query, setQuery] = useState('');

    const parseSearchResult = searchString => {
        getSearchResult(searchString)
            .then(result => {
                setOptions(result);
            })
            .catch(err => {
                console.log(err);
            });
    };

    const isQueryLengthSufficient = query.length > 3; // to avoid unnecessary requests

    // Debounce the search query
    useEffect(() => {
        let timeout;
        if (isQueryLengthSufficient) {
            timeout = setTimeout(() => {
                parseSearchResult(query);
            }, 1000);
        } else {
            setOptions([]);
        }

        return () => clearTimeout(timeout);
    }, [query, isQueryLengthSufficient]);

    const endSearch = () => {
        setQuery('');
        setOptions([]);
    };

    return (
        <div className="search-bar">
            <SearchIcon />

            <input type="text" value={query} onChange={e => setQuery(e.target.value)} placeholder="Start typing..." />

            {
                // using derived value from `query` to determine whether to show search items
                isQueryLengthSufficient && (
                    <>
                        <CrossIcon handleClick={endSearch} />

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
