import { FC } from 'react';
import Header from '../components/header/header.component';
import Container from '../components/container/container.component';
import CarCard from '../components/carCardComponent/carCard.component';
import { CarInterface } from '../interfaces/car';

interface HomePageProps {}

const Home: FC<HomePageProps> = () => {
  const carsData: CarInterface[] = [
    {
      model: 'Chevrolet',
      manufacturer: 'Spark/Ravon2',
      image:
        'https://ukr-prokat.com/wp-content/uploads/2021/05/Ravon-R2-Shevrolet-Spark-295x168.jpg',
      options: {
        fuelType: 'Gasoline',
        transmissionsType: 'Automatic',
        passengersNumber: 5,
        engineCapacity: 1.3
      }
    },
    {
      model: 'Chevrolet',
      manufacturer: 'Spark/Ravon2',
      image:
        'https://ukr-prokat.com/wp-content/uploads/2021/05/Ravon-R2-Shevrolet-Spark-295x168.jpg',
      options: {
        fuelType: 'Gasoline',
        transmissionsType: 'Automatic',
        passengersNumber: 5,
        engineCapacity: 1.3
      }
    },
    {
      model: 'Chevrolet',
      manufacturer: 'Spark/Ravon2',
      image:
        'https://ukr-prokat.com/wp-content/uploads/2021/05/Ravon-R2-Shevrolet-Spark-295x168.jpg',
      options: {
        fuelType: 'Gasoline',
        transmissionsType: 'Automatic',
        passengersNumber: 5,
        engineCapacity: 1.3
      }
    },
    {
      model: 'Chevrolet',
      manufacturer: 'Spark/Ravon2',
      image:
        'https://ukr-prokat.com/wp-content/uploads/2021/05/Ravon-R2-Shevrolet-Spark-295x168.jpg',
      options: {
        fuelType: 'Gasoline',
        transmissionsType: 'Automatic',
        passengersNumber: 5,
        engineCapacity: 1.3
      }
    },
    {
      model: 'Chevrolet',
      manufacturer: 'Spark/Ravon2',
      image:
        'https://ukr-prokat.com/wp-content/uploads/2021/05/Ravon-R2-Shevrolet-Spark-295x168.jpg',
      options: {
        fuelType: 'Gasoline',
        transmissionsType: 'Automatic',
        passengersNumber: 5,
        engineCapacity: 1.3
      }
    },
    {
      model: 'Chevrolet',
      manufacturer: 'Spark/Ravon2',
      image:
        'https://ukr-prokat.com/wp-content/uploads/2021/05/Ravon-R2-Shevrolet-Spark-295x168.jpg',
      options: {
        fuelType: 'Gasoline',
        transmissionsType: 'Automatic',
        passengersNumber: 5,
        engineCapacity: 1.3
      }
    },
    {
      model: 'Chevrolet',
      manufacturer: 'Spark/Ravon2',
      image:
        'https://ukr-prokat.com/wp-content/uploads/2021/05/Ravon-R2-Shevrolet-Spark-295x168.jpg',
      options: {
        fuelType: 'Gasoline',
        transmissionsType: 'Automatic',
        passengersNumber: 5,
        engineCapacity: 1.3
      }
    },
    {
      model: 'Chevrolet',
      manufacturer: 'Spark/Ravon2',
      image:
        'https://ukr-prokat.com/wp-content/uploads/2021/05/Ravon-R2-Shevrolet-Spark-295x168.jpg',
      options: {
        fuelType: 'Gasoline',
        transmissionsType: 'Automatic',
        passengersNumber: 5,
        engineCapacity: 1.3
      }
    }
  ];
  return (
    <div className="">
      <Header />
      <Container className="flex h-full">
        <div className="flex w-1/4 p-2">sdsdsd</div>
        <div className="grid grid-cols-1 lg:grid-cols-2 auto-rows-min gap-2 w-3/4 p-2">
          {carsData.map((carData: CarInterface) => (
            <CarCard carData={carData} />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Home;
