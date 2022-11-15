import { FC, ReactNode } from 'react';

interface SelectProps {
  name: string;
  label: string;
  required?: boolean;
  children: ReactNode | ReactNode[];
  className?: string;
}

const Select: FC<SelectProps> = ({
  name,
  label,
  required = false,
  children,
  className = ''
}) => {
  return (
    <label htmlFor={name} className={`flex flex-col ${className}`}>
      <span>
        {label}
        {required ? <span className="text-red-800">*</span> : ''}
      </span>
      <select
        className="py-2 bg-white border-solid border-stone-600 border-b-2 focus:border-orange-700 focus:outline-none"
        name={name}
        id={name}
        required={required}
      >
        {children}
      </select>
    </label>
  );
};

export default Select;
