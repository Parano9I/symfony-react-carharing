import { UserInterface } from './user';

export interface CarOptionsInterface {
  fuelType: string;
  transmissionsType: string;
  passengersNumber: number;
  engineCapacity: number;
}

export interface CarInterface {
  model: string;
  manufacturer: string;
  image: string;
  options: CarOptionsInterface;
}

export interface CarWithLessorInterface {
  car: CarInterface;
  lessor: UserInterface;
}
