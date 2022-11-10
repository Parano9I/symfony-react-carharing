import {
  CarsFiltersInterface,
  GetAllCarsParamsInterface,
  GetAllCarsResponseInterface
} from './interfaces';
import httpClient from '../index';
import { CarInterface } from '../../../interfaces/car';

const baseUrl = '/cars';

export const getAllCars = async (
  params: GetAllCarsParamsInterface
): Promise<GetAllCarsResponseInterface> => {
  const response = await httpClient.get(baseUrl, {
    params: params
  });

  const data: GetAllCarsResponseInterface = response.data.data;

  return data;
};

export const getAllCarsFilters = async (): Promise<CarsFiltersInterface> => {
  const response = await httpClient.get(baseUrl + '/filters');
  const data: CarsFiltersInterface = response.data.data;

  return data;
};
