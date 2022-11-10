import { CarInterface, CarWithLessorInterface } from '../../../interfaces/car';
import { PaginationInterface } from '../../../interfaces/pagination';
import { UserInterface } from '../../../interfaces/user';

export interface GetAllCarsResponseInterface {
  cars: CarWithLessorInterface[];
  pagination: PaginationInterface;
}

export interface GetAllCarsParamsInterface {
  manufacturer?: string[];
  fuelType?: string[];
  transmissionsType?: string[];
  passengersNumber?: number[];
  page?: number;
}

export interface CarsFiltersInterface {
  manufacturer: string[];
  fuelType: string[];
  transmissionType: string[];
  passengersNumber: number[];
}
