import { CarInterface } from '../../../interfaces/car';
import httpClient from '../index';
import { GetCarsResponseInterface } from './interfaces';

const getCars = async (): Promise<GetCarsResponseInterface> => {
  const response = await httpClient.get('/lessor/cars');
  const result: GetCarsResponseInterface = response.data.data;

  return result;
};

const lessorApi = {
  getCars
};

export default lessorApi;
