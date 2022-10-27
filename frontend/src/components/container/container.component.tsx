import { FC, ReactNode } from 'react';

interface ContainerProps {
  children: ReactNode;
}

const Container: FC<ContainerProps> = ({ children }) => {
  return <div className="container xl-auto px-4 mx-auto">{children}</div>;
};

export default Container;
