import { useSearchParams } from 'react-router-dom';
import { useMemo } from 'react';

export type SearchParamsType = {
  [key: string]: string;
};

export const useMySearchParams = (): [
  SearchParamsType,
  (params: SearchParamsType) => void
] => {
  const [params, setParams] = useSearchParams();
  const result: SearchParamsType = {};
  const setSearchParams = (params: SearchParamsType): void => {
    setParams(params);
  };

  [...params.entries()].forEach((param) => {
    result[param[0]] = param[1];
  });

  const searchParams: SearchParamsType = result;

  return [searchParams, setSearchParams];
};
