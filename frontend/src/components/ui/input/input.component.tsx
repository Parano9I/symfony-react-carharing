import { FC } from 'react';

interface InputProps {
  type?: 'password' | 'number';
  name: string;
  className?: string;
  required?: boolean;
  title: string;
  error?: string;
}

const Input: FC<InputProps> = ({
  type = 'text',
  name,
  required = false,
  title,
  error = '',
  className = ''
}) => {
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
        required={required}
      />
      <span className="text-red-800">{error}</span>
    </label>
  );
};

export default Input;
