import { FC } from 'react';
import { CarInterface } from '../../interfaces/car';

interface CarCardProps {
  carData: CarInterface;
}

const CarCard: FC<CarCardProps> = ({ carData }) => {
  const transformCamelCaseToHyphenCase = (string: string): string =>
    string.replace(/([a-zA-Z])(?=[A-Z])/g, '$1-').toLowerCase();

  const getFullPathToImage = () =>
    'https://ukr-prokat.com/wp-content/uploads/' + carData.image;

  return (
    <div className="rounded-xl border-slate-600 border p-2">
      <div className="flex border-b border-slate-600">
        <img src={getFullPathToImage()} alt="" className="w-3/5" />
        <div className="flex flex-col w-2/5">
          <h2 className="font-bold md:text-lg">{`${carData.manufacturer} ${carData.model}`}</h2>
          <ul className="text-sm">
            {Object.entries(carData.options).map((option) => {
              const bgClass: string = transformCamelCaseToHyphenCase(option[0]);
              return (
                <li
                  className={`min-h-[1rem] bg-${bgClass}-icon bg-left pl-6 bg-1 bg-no-repeat`}
                >
                  {option[1]}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <div className="flex justify-end pt-2">
        <button className="bg-orange-700 rounded-xl p-2 text-white hover:bg-orange-800">
          Arrange a lease
        </button>
      </div>
    </div>
  );
};

export default CarCard;
