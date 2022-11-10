import { useMemo } from 'react';
import { useLocation } from 'react-router-dom';

const useCheckedChangeSearchParams = (): URLSearchParams => {
  const { search } = useLocation();
  const params = useMemo(() => {
    return new URLSearchParams(search);
  }, [search]);

  return params;
};

export default useCheckedChangeSearchParams;
