import { Children, FC, ReactNode, useState } from 'react';

interface DropDownProps {
  children: ReactNode;
  className?: string;
}

const DropDown: FC<DropDownProps> = ({ children, className = '' }) => {
  const [isDropped, setToggleDropped] = useState(true);

  const childrenArray = Children.toArray(children);
  const mainElement: ReactNode = childrenArray[0];
  const fallingElements: ReactNode[] = childrenArray.slice(1);

  const handleToggleDropped = () => setToggleDropped(!isDropped);

  return (
    <div className={`${className} relative`}>
      <button
        className="flex justify-between border-slate-800 p-2 border-b-2 w-full"
        onClick={handleToggleDropped}
      >
        {mainElement}
        <span className="pl-1">{isDropped ? '▼' : '▲'}</span>
      </button>
      {isDropped ? (
        <div className="absolute z-10 w-full">
          {fallingElements.map((element) => {
            return <div className="bg-slate-900 p-2">{element}</div>;
          })}
        </div>
      ) : (
        <> </>
      )}
    </div>
  );
};

export default DropDown;
