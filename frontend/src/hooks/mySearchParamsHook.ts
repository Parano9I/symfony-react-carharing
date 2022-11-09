import { useSearchParams } from 'react-router-dom';

export type SearchParamsType = {
  [key: string]: string;
};

export const useMySearchParams = (): [
  SearchParamsType,
  (params: SearchParamsType) => void
] => {
  const [params, setParams] = useSearchParams();

  const result: SearchParamsType = {};
  [...params.entries()].forEach((param) => {
    result[param[0]] = param[1];
  });

  const searchParams: SearchParamsType = result;

  const setSearchParams = (params: SearchParamsType): void => {
    setParams(params);
  };

  return [searchParams, setSearchParams];
};
