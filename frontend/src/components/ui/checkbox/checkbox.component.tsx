import { ChangeEvent, FC, useState } from 'react';

interface CheckboxProps {
  name: string;
  value: string;
  label: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  checked?: boolean;
}

const Checkbox: FC<CheckboxProps> = ({
  name,
  label,
  value,
  onChange,
  checked = false
}) => {
  const [isChecked, setIsChecked] = useState(checked);

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setIsChecked(!isChecked);

    if (onChange) {
      onChange(event);
    }
  };

  return (
    <div className="flex items-center">
      <input
        onChange={handleChange}
        className="peer"
        type="checkbox"
        name={name}
        id={name}
        value={value}
        checked={isChecked}
      />
      <label className="p-1" htmlFor={name}>
        {label}
      </label>
    </div>
  );
};

export default Checkbox;
