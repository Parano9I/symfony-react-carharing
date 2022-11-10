import { ChangeEvent, Children, cloneElement, FC, ReactElement } from 'react';
import DropDown from '../dropDown/dropDown.component';
import { useMySearchParams } from '../../hooks/mySearchParamsHook';

interface FilterItemProps {
  label: string;
  children: ReactElement | ReactElement[];
  queryParamName: string;
}

const FilterItem: FC<FilterItemProps> = ({
  label,
  children,
  queryParamName
}) => {
  const [searchParams, setSearchParams] = useMySearchParams();

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const element = event.target;
    const value = element.value;
    const queryParams = searchParams[queryParamName];
    let tempGroupParams: string[];

    if (queryParams) {
      tempGroupParams = queryParams.split(',');
    } else tempGroupParams = [];

    if (tempGroupParams.includes(value)) {
      tempGroupParams = tempGroupParams.filter((item) => item !== value);
    } else {
      tempGroupParams = [...tempGroupParams, value];
    }

    if (tempGroupParams.length) {
      setSearchParams({
        ...searchParams,
        [queryParamName]: tempGroupParams.join(',')
      });
    } else {
      const tempSearchParams = { ...searchParams };
      delete tempSearchParams[queryParamName];

      setSearchParams(tempSearchParams);
    }
  };

  return (
    <DropDown className="" label={label}>
      <div>
        {Children.map(children, (item, index) => {
          return cloneElement(item, {
            onChange: handleChange,
            key: queryParamName + index
          });
        })}
      </div>
    </DropDown>
  );
};
export default FilterItem;
