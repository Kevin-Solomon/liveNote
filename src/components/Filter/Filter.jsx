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
        <div>Sort By Time</div>
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
        <div>Sort By Priority</div>
        <div>
          <input
            id="highest-first"
            type="radio"
            checked={filterState.priority === 'HIGH_TO_LOW'}
            onChange={() => filterDispatch({ type: 'HIGH_TO_LOW' })}
          />
          <label htmlFor="highest-first">Highest Priority</label>
        </div>
        <div>
          <input
            id="lowest-first"
            type="radio"
            checked={filterState.priority === 'LOW_TO_HIGH'}
            onChange={e => filterDispatch({ type: 'LOW_TO_HIGH' })}
          />
          <label htmlFor="lowest-first">Lowest Priority</label>
        </div>
      </div>
    </div>
  );
}

export default Filter;
