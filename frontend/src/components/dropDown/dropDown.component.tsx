import { Children, FC, ReactNode, useState } from 'react';

interface DropDownProps {
  children: ReactNode;
  className?: string;
  label: string;
}

const DropDown: FC<DropDownProps> = ({ children, className = '', label }) => {
  const [isDropped, setToggleDropped] = useState(false);
  const handleToggleDropped = () => setToggleDropped(!isDropped);

  const childrenArray = Children.toArray(children);

  return (
    <div className={`${className}`}>
      <button
        className="flex justify-between border-slate-800 p-2 border-b-2 w-full"
        onClick={handleToggleDropped}
      >
        {label}
        <span className="pl-1">{isDropped ? '▼' : '▲'}</span>
      </button>
      <div
        className={`w-full ${
          isDropped ? 'h-full' : 'h-0 hidden'
        } transition-height duration-100`}
      >
        {childrenArray.map((element, index) => {
          return (
            <div key={index} className="">
              {element}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DropDown;
