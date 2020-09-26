import React from 'react';

const Filter = ({ handleFilterChange, animeType }) => (
  <select value={animeType} onChange={e => { handleFilterChange(e.target.value); }}>
    <option value="All" key="All">All</option>
    <option value="TV" key="TV">TV</option>
    <option value="Movie" key="Movie">Movie</option>
    <option value="Special" key="Special">Special</option>
  </select>
);

export default Filter;
