import { FC, useEffect, useState } from 'react';
import Dashboard from '../../../../components/dashboardPageWrapper/dashboard.component';
import CarCard from '../../../../components/carCardComponent/carCard.dashboard.component';
import { CarInterface } from '../../../../interfaces/car';
import lessorApi from '../../../../services/axios/lessor/api';

interface CarsDashboardProps {}

const CarsAllDashboard: FC<CarsDashboardProps> = () => {
  const [carsState, setCarsState] = useState<CarInterface[] | null>();

  useEffect(() => {
    (async () => {
      const { cars, pagination } = await lessorApi.getCars();
      setCarsState([...cars]);
    })();
  }, []);

  return (
    <Dashboard>
      <div className="relative flex flex-col gap-4 h-full">
        {carsState?.map((car) => {
          return <CarCard data={car} />;
        })}
      </div>
    </Dashboard>
  );
};

export default CarsAllDashboard;
