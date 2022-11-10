import { FC, memo, ReactElement } from 'react';
import { useMySearchParams } from '../../hooks/mySearchParamsHook';

interface FilterProps {
  className: string;
  children: ReactElement[] | ReactElement;
}

const Filter: FC<FilterProps> = ({ className, children }) => {
  const [searchParams, setSearchParams] = useMySearchParams();

  const handleClearFilters = () => {
    setSearchParams({});
  };

  return (
    <div className={className}>
      {children}
      <button
        className="mt-2 bg-orange-700 rounded-xl p-2 text-white hover:bg-orange-800"
        onClick={handleClearFilters}
      >
        Clear filters
      </button>
    </div>
  );
};

export default memo(Filter);
