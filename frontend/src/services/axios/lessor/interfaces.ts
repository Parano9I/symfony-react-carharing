import { CarInterface } from '../../../interfaces/car';
import { PaginationInterface } from '../../../interfaces/pagination';

export interface GetCarsResponseInterface {
  cars: CarInterface[];
  pagination: PaginationInterface;
}

export interface CreateCarResponseInterface {
  status: string;
}
