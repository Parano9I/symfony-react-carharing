import {
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
