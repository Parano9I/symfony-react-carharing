import { ChangeEvent, FC, useState } from 'react';

interface InputProps {
  type?: 'email' | 'password' | 'number';
  name: string;
  className?: string;
  required?: boolean;
  label: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}

const Input: FC<InputProps> = ({
  type = 'text',
  name,
  required = false,
  label,
  className = '',
  onChange
}) => {
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
        onChange={onChange}
        required={required}
      />
    </label>
  );
};

export default Input;
