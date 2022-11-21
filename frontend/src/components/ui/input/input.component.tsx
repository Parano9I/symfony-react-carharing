import { ChangeEvent, FC, useState } from 'react';

interface InputProps {
  type?: 'email' | 'password' | 'number';
  name: string;
  className?: string;
  required?: boolean;
  label: string;
  onChange?: (state: string) => void;
}

const Input: FC<InputProps> = ({
  type = 'text',
  name,
  required = false,
  label,
  className = '',
  onChange
}) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const eventValue = event.target.value;

    if (onChange) {
      onChange(eventValue);
    }
  };

  return (
    <label className={`flex flex-col ${className}`}>
      <span>
        {label}
        {required ? <span className="text-red-800">*</span> : ''}
      </span>
      <input
        className="border-solid border-stone-600 border-b-2 px-1 pb-2 focus:border-orange-700 focus:outline-none"
        type={type}
        id={name}
        name={name}
        onChange={handleChange}
        required={required}
      />
    </label>
  );
};

export default Input;
