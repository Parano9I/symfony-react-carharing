import { FC, useState } from 'react';
import Header from '../components/header/header.component';
import Container from '../components/container/container.component';
import CarCard from '../components/carCardComponent/carCard.component';
import { CarInterface } from '../interfaces/car';
import FilterItem from '../components/filter/filterItem.component';
import Checkbox from '../components/ui/checkbox/checkbox.component';
import Filter from '../components/filter/filter.component';
import { FilterInterface } from '../components/filter/types';
import { useSearchParams } from 'react-router-dom';

interface HomePageProps {}

const Home: FC<HomePageProps> = () => {
  const [searchParams, _] = useSearchParams();

  return (
    <div className="">
      <Header />
      <Container className="flex h-full">
        <Filter className="flex flex-col w-1/4 p-2">
          <FilterItem label="Manufacturer" queryParamName="manufacturer">
            <Checkbox name="Audi" value="Audi" label="Audi" />
            <Checkbox name="Chevrolet" value="Chevrolet" label="Chevrolet" />
            <Checkbox name="VW" value="VW" label="VW" />
            <Checkbox name="Toyota" value="Toyota" label="Toyota" />
          </FilterItem>
          <FilterItem label="Fuel Type" queryParamName="fuelType">
            <Checkbox name="gasoline" value="gasoline" label="gasoline" />
            <Checkbox name="diesel" value="diesel" label="diesel" />
            <Checkbox name="electric" value="electric" label="electric" />
          </FilterItem>
          <FilterItem
            label="Transmissions Type"
            queryParamName="transmissionType"
          >
            <Checkbox name="automatic" value="automatic" label="automatic" />
            <Checkbox name="manual" value="manual" label="manual" />
          </FilterItem>
          <FilterItem
            label="Passengers Number"
            queryParamName="passengersNumber"
          >
            <Checkbox name="5" value="5" label="5" />
            <Checkbox name="2" value="2" label="2" />
            <Checkbox name="4" value="4" label="4" />
          </FilterItem>
        </Filter>
        <div className="grid grid-cols-1 lg:grid-cols-2 auto-rows-min gap-2 w-3/4 p-2">
          {/*{carsData.map((carData: CarInterface, id) => (*/}
          {/*  <CarCard key={id} carData={carData} />*/}
          {/*))}*/}
        </div>
      </Container>
    </div>
  );
};

export default Home;
