import React from 'react';
import PropTypes from 'prop-types';

const Filter = ({ handleFilterChange, animeType }) => (
  <div className="filter-buttons">
    <button className={animeType === 'All' ? 'active' : ''} type="button" onClick={() => { handleFilterChange('All'); }}>All</button>
    <button className={animeType === 'TV' ? 'active' : ''} type="button" onClick={() => { handleFilterChange('TV'); }}>TV</button>
    <button className={animeType === 'Movie' ? 'active' : ''} type="button" onClick={() => { handleFilterChange('Movie'); }}>Movie</button>
    <button className={animeType === 'Special' ? 'active' : ''} type="button" onClick={() => { handleFilterChange('Special'); }}>Special</button>
  </div>
);

Filter.propTypes = {
  handleFilterChange: PropTypes.func.isRequired,
  animeType: PropTypes.string.isRequired,
};

export default Filter;
