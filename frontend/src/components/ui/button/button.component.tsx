import React, { FC, MouseEventHandler } from 'react';

interface ButtonInterface {
  type?: 'submit' | 'reset' | 'button';
  children: string;
  className?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button: FC<ButtonInterface> = ({
  type = 'button',
  children,
  className = '',
  onClick
}) => {
  return (
    <button
      type={type}
      className={`bg-orange-700 rounded-sm p-2 text-white hover:bg-orange-800 ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
