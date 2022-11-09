import {
  ChangeEvent,
  Children,
  cloneElement,
  FC,
  ReactElement,
  useContext,
  useState
} from 'react';
import DropDown from '../dropDown/dropDown.component';
import { FilterInterface } from './types';
import { FilterContext } from './context';

interface FilterItemProps {
  label: string;
  children: ReactElement | ReactElement[];
  queryParamName: string;
  onFiltering?: (data: FilterInterface) => void;
}

const FilterItem: FC<FilterItemProps> = ({
  label,
  children,
  queryParamName,
  onFiltering
}) => {
  const [queryGroupParams, setQueryGroupParams] = useState<string[]>([]);
  const { filters, addFilter } = useContext(FilterContext);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const element = event.target;
    const value = element.value;

    if (queryGroupParams.includes(value)) {
      setQueryGroupParams(queryGroupParams.filter((param) => param !== value));
    } else {
      setQueryGroupParams([...queryGroupParams, value]);
    }
  };

  const filterState: FilterInterface = {
    name: queryParamName,
    values: queryGroupParams
  };

  if (addFilter) addFilter(filterState);

  return (
    <DropDown className="" label={label}>
      <div>
        {Children.map(children, (item, index) => {
          return cloneElement(item, {
            onChange: handleChange,
            key: new Date().toDateString()
          });
        })}
      </div>
    </DropDown>
  );
};
export default FilterItem;
