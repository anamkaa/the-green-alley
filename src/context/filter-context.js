import { createContext, useContext, useReducer } from "react";
import { filterReducerFunction } from "../reducer/filter-reducer";

const FilterContext = createContext();

export const FilterProvider = ({ children }) => {
  const [filterState, filterDispatch] = useReducer(filterReducerFunction, {
    bySort: "",
    byPlantCategory: false,
    byPotCategory: false,
    byToolCategory: false,
    bySearch: "",
    byStock: false,
    byRating: 0,
    byRange: 900,
  });

  return (
    <FilterContext.Provider value={{ filterState, filterDispatch }}>
      {children}
    </FilterContext.Provider>
  );
};

export const useFilter = () => useContext(FilterContext);
