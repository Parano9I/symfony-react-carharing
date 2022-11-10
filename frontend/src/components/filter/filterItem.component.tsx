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

  const getSearchParams = (): string[] => {
    const params = searchParams[queryParamName];

    return params ? params.split(',') : [];
  };

  const hasValueFromParams = (
    searchParams: string[],
    value: string
  ): boolean => {
    return searchParams.includes(value);
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const element = event.target;
    const value = element.value;
    let tempGroupParams = getSearchParams();

    if (hasValueFromParams(tempGroupParams, value)) {
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

  const isChecked = (value: string): boolean => {
    const queryParams = getSearchParams();
    return hasValueFromParams(queryParams, value);
  };

  return (
    <DropDown className="" label={label}>
      <div>
        {Children.map(children, (item, index) => {
          return cloneElement(item, {
            onChange: handleChange,
            key: queryParamName + index,
            checked: isChecked(item.props.name)
          });
        })}
      </div>
    </DropDown>
  );
};
export default FilterItem;
