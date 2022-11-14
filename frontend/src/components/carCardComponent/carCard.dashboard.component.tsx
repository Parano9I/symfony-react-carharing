import { FC } from 'react';
import { CarInterface } from '../../interfaces/car';

interface CarCardProps {
  data: CarInterface;
}

const CarCard: FC<CarCardProps> = ({ data }) => {
  const fullPathToImage =
    'https://ukr-prokat.com/wp-content/uploads' + data.image;

  return (
    <div className="flex min-h-[150px] p-2 border border-stone-500">
      <img className="w-1/5" src={fullPathToImage} alt="" />
      <div className="w-4/5 flex justify-between">
        <div className="flex flex-col">
          <span className="text-xl">Model: {data.model}</span>
          <span className="text-xl">Manufacturer: {data.manufacturer}</span>
        </div>
        <div className="flex flex-col">
          <h4 className="text-xl">Options</h4>
          <ul>
            <li>Fuel Type: {data.options.fuelType}</li>
            <li>Transmission Type: {data.options.transmissionsType}</li>
            <li>Passengers Number: {data.options.passengersNumber}</li>
          </ul>
        </div>
        <div className="flex flex-col">
          <h4 className="text-xl">Tariff</h4>
        </div>
        <div className="flex flex items-end">
          <button
            type="submit"
            className="bg-orange-700 mr-2 rounded-sm p-2 text-white hover:bg-orange-800"
          >
            Details
          </button>
          <button
            type="submit"
            className="bg-orange-700 rounded-sm p-2 text-white hover:bg-orange-800"
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};

export default CarCard;
