import { createContext, SetStateAction, Dispatch } from 'react';
import { FilterInterface } from './types';

export interface FilterContextInterface {
  filters: FilterInterface[];
  addFilter: (newFilterState: FilterInterface) => void;
}

export const FilterContext = createContext<Partial<FilterContextInterface>>({});
