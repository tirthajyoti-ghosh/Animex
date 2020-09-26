import React from 'react';

const Filter = ({ handleFilterChange }) => (
  <select onChange={e => { handleFilterChange(e.target.value); }}>
    <option value="All" key="All">All</option>
    <option value="TV" key="TV">TV</option>
    <option value="Movie" key="Movie">Movie</option>
    <option value="OVA" key="OVA">OVA</option>
  </select>
);

export default Filter;
