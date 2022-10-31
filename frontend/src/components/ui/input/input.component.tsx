import { FC, useState } from 'react';
import { InputType } from './types';

interface InputProps {
  type?: InputType;
  name: string;
  className?: string;
  required?: boolean;
  title: string;
  error?: string;
}

const Input: FC<InputProps> = ({
  type = InputType.Text,
  name,
  required = false,
  title,
  error = '',
  className = ''
}) => {
  const [value, setValue] = useState('');

  return (
    <label className={`flex flex-col pb-8 ${className}`}>
      <span>
        {title}
        {required ? <span className="text-red-800">*</span> : ''}
      </span>
      <input
        className="border-solid border-stone-600 border-b-2 px-1 pb-2 focus:border-orange-700 focus:outline-none"
        type={type}
        id={name}
        name={name}
        onChange={(e) => setValue(e.target.value)}
        required={required}
      />
      <span className="text-red-800">{error}</span>
    </label>
  );
};

export default Input;
