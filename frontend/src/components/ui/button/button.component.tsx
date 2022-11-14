import { FC } from 'react';

interface ButtonInterface {
  type?: 'submit' | 'reset';
  children: string;
  className?: string;
}

const Button: FC<ButtonInterface> = ({ type, children, className = '' }) => {
  return (
    <button
      type={type}
      className={`bg-orange-700 rounded-sm p-2 text-white hover:bg-orange-800 ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
