import { FC, ReactNode } from 'react';

interface DropDownItemInterface {
  children: ReactNode;
}

const dropDownItem: FC<DropDownItemInterface> = ({ children }) => {
  return <div>{children}</div>;
};
