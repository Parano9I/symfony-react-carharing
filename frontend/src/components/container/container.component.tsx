import { FC, ReactNode } from 'react';

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

const Container: FC<ContainerProps> = ({ children, className = '' }) => {
  return (
    <div className={`container xl-auto px-4 mx-auto ${className}`}>
      {children}
    </div>
  );
};

export default Container;
