import React, { useState } from 'react';
import { useFilter } from '../../context/filter/filterContext';
import './Filter.css';
function Filter() {
  const [hidden, setHidden] = useState(true);
  const { filterState, filterDispatch } = useFilter();
  return (
    <div className="filter-container">
      <button
        className="btn"
        onClick={() => setHidden(prevState => !prevState)}
      >
        Filter
      </button>
      <div className={hidden ? 'filter' : 'filter show'}>
        <div>Sort By</div>
        <div>
          <input
            id="latest-first"
            type="radio"
            checked={filterState.sortBy === 'LATEST_FIRST'}
            onChange={() => filterDispatch({ type: 'LATEST_FIRST' })}
          />
          <label htmlFor="latest-first">Latest First</label>
        </div>
        <div>
          <input
            id="oldest-first"
            type="radio"
            checked={filterState.sortBy === 'OLDEST_FIRST'}
            onChange={e => filterDispatch({ type: 'OLDEST_FIRST' })}
          />
          <label htmlFor="oldest-first">Oldest First</label>
        </div>
      </div>
    </div>
  );
}

export default Filter;
