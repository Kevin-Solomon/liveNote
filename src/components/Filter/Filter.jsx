import React, { useState } from 'react';
import { useFilter } from '../../context/filter/filterContext';
import './Filter.css';
function Filter() {
  const [hidden, setHidden] = useState(true);
  const { filterState, filterDispatch } = useFilter();
  console.log(filterState);
  return (
    <div className="filter-container">
      <button onClick={() => setHidden(!hidden)}>Filter</button>
      <div className={hidden ? 'filter' : 'filter show'}>
        <span>Sort By</span>
        <div>
          <input
            type="radio"
            checked={filterState.sortBy === 'LATEST_FIRST'}
            onChange={e => filterDispatch({ type: 'LATEST_FIRST' })}
          />
          <label>Latest First</label>
        </div>
        <div>
          <input
            type="radio"
            checked={filterState.sortBy === 'OLDEST_FIRST'}
            onChange={e => filterDispatch({ type: 'OLDEST_FIRST' })}
          />
          <label>Oldest First</label>
        </div>
        <span>Sort By Tags</span>
        <div>
          <input type="checkbox" />
          <label>Productivity</label>
        </div>
        <div>
          <input type="checkbox" />
          <label>Notes</label>
        </div>
      </div>
    </div>
  );
}

export default Filter;
