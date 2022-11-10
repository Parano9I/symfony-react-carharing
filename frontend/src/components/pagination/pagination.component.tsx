import { FC } from 'react';
import { useSearchParams } from 'react-router-dom';
import fillPaginationArray from './fillPaginationArray';
import {
  useMySearchParams,
  SearchParamsType
} from '../../hooks/mySearchParamsHook';

interface PaginationProps {
  count: number;
}

const Pagination: FC<PaginationProps> = ({ count }) => {
  const [searchParams, setSearchParams] = useMySearchParams();
  console.log(searchParams);
  const siblingCount = 3;
  const currentPageNumber = parseInt(searchParams['page'] ?? '1');

  const isActive = (numberPage: number) => {
    return numberPage === currentPageNumber;
  };

  const range = fillPaginationArray(count, currentPageNumber, siblingCount);

  const moveNext = () => {
    const nextNumber = currentPageNumber + 1;
    if (nextNumber <= count) {
      setSearchParams({
        ...searchParams,
        page: nextNumber.toString()
      });
    }
  };

  const movePrev = () => {
    const prevNumber = currentPageNumber - 1;
    if (prevNumber >= 1)
      setSearchParams({
        ...searchParams,
        page: prevNumber.toString()
      });
  };

  const move = (moveNumber: number) => {
    if (moveNumber !== currentPageNumber) {
      setSearchParams({
        ...searchParams,
        page: moveNumber.toString()
      });
    }
  };

  return (
    <ul className="flex text-center items-center rounded-md border border-amber-700">
      <li className="flex-1">
        <button
          className="text-center w-full p-1 border-r border-amber-700 hover:text-amber-700"
          onClick={movePrev}
        >
          Prev
        </button>
      </li>
      {range.map((number, index) => {
        return (
          <li key={index} className="flex-1">
            <button
              className={`${isActive(number) ? 'text-amber-700' : ''} 
              text-center w-full cursor-pointer p-1 min-w-[30px] border-r border-amber-700 hover:text-amber-700`}
              onClick={() => move(number)}
            >
              {number}
            </button>
          </li>
        );
      })}
      <li className="flex-1">
        <button
          className="text-center p-1 w-full border-amber-700 hover:text-amber-700"
          onClick={moveNext}
        >
          Next
        </button>
      </li>
    </ul>
  );
};

export default Pagination;
