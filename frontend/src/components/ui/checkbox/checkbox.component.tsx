import { ChangeEvent, FC, useState } from 'react';

interface CheckboxProps {
  name: string;
  value: string;
  label: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}

const Checkbox: FC<CheckboxProps> = ({ name, label, value, onChange }) => {
  return (
    <div className="flex items-center">
      <input
        onChange={onChange}
        className="peer"
        type="checkbox"
        name={name}
        id={name}
        value={value}
      />
      <label className="p-1" htmlFor={name}>
        {label}
      </label>
    </div>
  );
};

export default Checkbox;
