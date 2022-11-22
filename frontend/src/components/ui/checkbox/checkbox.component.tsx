import { ChangeEvent, FC, useState } from 'react';

interface CheckboxProps {
  name: string;
  label: string;
  value?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}

const Checkbox: FC<CheckboxProps> = ({ name, label, onChange, value }) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
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
        value={value}
        id={name}
      />
      <label className="p-1" htmlFor={name}>
        {label}
      </label>
    </div>
  );
};

export default Checkbox;
