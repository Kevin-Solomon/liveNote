import { createContext, useContext, useReducer } from 'react';
import {
  filterReducer,
  initialFilterState,
} from './../../reducer/filterReducer';
const FilterContext = createContext({ sortBy: null, tags: [] });
const FilterProvider = ({ children }) => {
  const [filterState, filterDispatch] = useReducer(
    filterReducer,
    initialFilterState
  );
  return (
    <FilterContext.Provider value={{ filterDispatch, filterState }}>
      {children}
    </FilterContext.Provider>
  );
};

const useFilter = () => useContext(FilterContext);
export { FilterProvider, useFilter };
