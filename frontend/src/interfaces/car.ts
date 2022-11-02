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
