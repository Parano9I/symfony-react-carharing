import { FC, useEffect, useMemo, useState } from 'react';
import Header from '../components/header/header.component';
import Container from '../components/container/container.component';
import FilterItem from '../components/filter/filterItem.component';
import Checkbox from '../components/ui/checkbox/checkbox.component';
import Filter from '../components/filter/filter.component';
import Pagination from '../components/pagination/pagination.component';
import { CarWithLessorInterface } from '../interfaces/car';
import CarCard from '../components/carCardComponent/carCard.component';
import { useMySearchParams } from '../hooks/mySearchParamsHook';
import { getAllCars, getAllCarsFilters } from '../services/axios/car/api';
import { CarsFiltersInterface } from '../services/axios/car/interfaces';
import { useLocation } from 'react-router-dom';

interface HomePageProps {}

const Home: FC<HomePageProps> = () => {
  const [carsState, setCars] = useState<CarWithLessorInterface[]>([]);
  const [filtersState, setFilters] = useState<CarsFiltersInterface>({
    manufacturer: [],
    fuelType: [],
    transmissionType: [],
    passengersNumber: []
  });
  const [paginationPageCount, setPaginationPageCount] = useState(1);
  const [searchParams] = useMySearchParams();

  const { search } = useLocation();
  const params = useMemo(() => {
    return new URLSearchParams(search);
  }, [search]);

  useEffect(() => {
    (async () => {
      const { cars, pagination } = await getAllCars(searchParams);
      const filtersData = await getAllCarsFilters();

      setCars([...cars]);
      setPaginationPageCount(pagination.pageCount);
      setFilters({ ...filtersState, ...filtersData });
    })();
  }, [params]);

  const capitalizeFirstLetter = (string: string): string => {
    return string[0].toUpperCase() + string.slice(1);
  };

  return (
    <div className="">
      <Header />
      <Container className="flex h-full">
        <Filter className="flex flex-col w-1/4 p-2">
          {Object.entries(filtersState).map(([key, values], index) => {
            const label: string = capitalizeFirstLetter(key).replace(
              /([a-z])([A-Z])/g,
              '$1 $2'
            );
            return (
              <FilterItem key={index} label={label} queryParamName={key}>
                {values.map((filter: string) => {
                  return (
                    <Checkbox
                      key={filter}
                      name={filter}
                      value={filter}
                      label={filter}
                    />
                  );
                })}
              </FilterItem>
            );
          })}
        </Filter>
        <div className="w-3/4 p-2">
          <div className="grid grid-cols-1 lg:grid-cols-2 auto-rows-min gap-2">
            {carsState.map(({ car, lessor }, id) => {
              return (
                <CarCard
                  key={id + car.model}
                  carData={car}
                  lessorData={lessor}
                />
              );
            })}
          </div>
          <div className="flex justify-center p-2">
            <Pagination count={paginationPageCount} />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Home;
