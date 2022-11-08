import { FC, ReactElement, useState } from 'react';
import { FilterContext } from './context';
import { FilterInterface } from './types';
import GeneratorSearchParams from '../../helpers/GeneratorSearchParams';
import { useSearchParams } from 'react-router-dom';

interface FilterProps {
  className: string;
  children: ReactElement[] | ReactElement;
}

const Filter: FC<FilterProps> = ({ className, children }) => {
  const [searchParams, setSearchParams] = useSearchParams();
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
    const generatorParams = new GeneratorSearchParams();

    filters.forEach((filter) => {
      if (filter.values.length) {
        generatorParams.set(filter.name, filter.values);
      }
    });

    const paramsStr = generatorParams.getStringSearchParams();
    setSearchParams(paramsStr);
  };

  return (
    <div className={className}>
      <FilterContext.Provider value={{ filters, addFilter }}>
        {children}
      </FilterContext.Provider>
      <button
        className="bg-orange-700 rounded-xl p-2 text-white hover:bg-orange-800"
        onClick={handleApplyFilters}
      >
        Apply filters
      </button>
    </div>
  );
};

export default Filter;
