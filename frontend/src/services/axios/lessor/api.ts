import { CarInterface } from '../../../interfaces/car';
import httpClient from '../index';
import {
  CreateCarResponseInterface,
  GetCarsResponseInterface
} from './interfaces';

const getCars = async (): Promise<GetCarsResponseInterface> => {
  const response = await httpClient.get('/lessor/cars');
  const result: GetCarsResponseInterface = response.data.data;

  return result;
};

const createCar = async (
  car: CarInterface
): Promise<CreateCarResponseInterface> => {
  const response = await httpClient.post('/lessor/cars/', car, {
    headers: {
      'content-type': 'multipart/form-data'
    }
  });
  const result: CreateCarResponseInterface = response.data.data;

  return result;
};

const lessorApi = {
  getCars,
  createCar
};

export default lessorApi;
