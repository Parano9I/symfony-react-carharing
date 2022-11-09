import { FC, ReactElement, useState } from 'react';
import { FilterContext } from './context';
import { FilterInterface } from './types';
import { useMySearchParams } from '../../hooks/mySearchParamsHook';

interface FilterProps {
  className: string;
  children: ReactElement[] | ReactElement;
}

const Filter: FC<FilterProps> = ({ className, children }) => {
  const [searchParams, setSearchParams] = useMySearchParams();
  const [filters, setFilters] = useState<FilterInterface[]>([]);

  const addFilter = (newFilterState: FilterInterface): void => {
    const { name, values } = newFilterState;
    const oldFilterStateInContext = filters?.find(
      (filter) => filter.name === name
    );

    if (oldFilterStateInContext) {
      oldFilterStateInContext.values = values;
    } else {
      setFilters([...filters, newFilterState]);
    }
  };

  const handleApplyFilters = () => {
    const params = filters.reduce((acc, curr) => {
      if (curr.values.length) {
        return { ...acc, [curr.name]: curr.values.join(',') };
      } else return acc;
    }, {});

    setSearchParams({ ...searchParams, ...params });
  };

  return (
    <div className={className}>
      <FilterContext.Provider value={{ filters, addFilter }}>
        {children}
      </FilterContext.Provider>
      <button
        className="mt-2 bg-orange-700 rounded-xl p-2 text-white hover:bg-orange-800"
        onClick={handleApplyFilters}
      >
        Apply filters
      </button>
    </div>
  );
};

export default Filter;
