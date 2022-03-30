import React, { useState } from 'react';
import { useFilter } from '../../context/filter/filterContext';
import './Filter.css';
function Filter() {
  const [hidden, setHidden] = useState(true);
  const { filterState, filterDispatch } = useFilter();
  console.log(filterState);
  return (
    <div className="filter-container">
      <button className="btn" onClick={() => setHidden(!hidden)}>
        Filter
      </button>
      <div className={hidden ? 'filter' : 'filter show'}>
        <div>Sort By</div>
        <div>
          <input
            id="latest-first"
            type="radio"
            checked={filterState.sortBy === 'LATEST_FIRST'}
            onChange={e => filterDispatch({ type: 'LATEST_FIRST' })}
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
        <div>Sort By Tags</div>
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
