import Dashboard from '../../../../components/dashboardPageWrapper/dashboard.component';
import Form from '../../../../components/form/form.component';
import Input from '../../../../components/ui/input/input.component';
import { FC, useState } from 'react';
import Select from '../../../../components/ui/select/select.component';
import Button from '../../../../components/ui/button/button.component';
import lessorApi from '../../../../services/axios/lessor/api';
import { CarInterface } from '../../../../interfaces/car';
import Notification from '../../../../components/notification/notification.component';
import { NotificationInterface } from '../../../../components/notification/NotificationInterface';

interface CarCreateDashboardProps {}

const CarCreateDashboard: FC<CarCreateDashboardProps> = ({}) => {
  const [notificationMessage, setNotificationMessage] =
    useState<NotificationInterface | null>(null);
  const onSubmit = async (car: CarInterface) => {
    const response = await lessorApi.createCar(car);

    if (response.status === 'success') {
      setNotificationMessage({
        status: 'success',
        message: 'Car added successfully'
      });
    }
  };
  return (
    <Dashboard>
      {notificationMessage ? (
        <Notification
          status={notificationMessage.status}
          handleCloseClick={() => setNotificationMessage(null)}
        >
          {notificationMessage.message}
        </Notification>
      ) : (
        ''
      )}
      <Form onSubmit={onSubmit} className="flex flex-col h-full">
        <div className="grid grid-cols-2">
          <div className="p-2">
            <h2 className="text-xl mb-2">Main</h2>
            <Input
              className="mb-2"
              name="manufacturer"
              title="Manufacturer"
              required={true}
            />
            <Input
              className="mb-2"
              name="model"
              title="Model"
              required={true}
            />
            <h2 className="text-xl mb-2">Characteristics</h2>
            <Select
              className="mb-2"
              name="fuelType"
              label="Fuel Type"
              required={true}
            >
              <option value="gasoline">gasoline</option>
              <option value="diesel">diesel</option>
              <option value="electric">electric</option>
            </Select>
            <Select
              className="mb-2"
              name="transmissionType"
              label="Transmission Type"
              required={true}
            >
              <option value="manual">manual</option>
              <option value="automatic">automatic</option>
            </Select>
            <Select
              className="mb-2"
              name="passengersNumber"
              label="Passengers Number"
              required={true}
            >
              <option value="5">5</option>
              <option value="2">2</option>
              <option value="4">4</option>
            </Select>
            <Input
              className="mb-2"
              name="engineCapacity"
              type="number"
              title="Engine Capacity"
              required={true}
            />
          </div>
          <div className="p-2"></div>
        </div>
        <Button className="self-end mr-4">Create a car</Button>
      </Form>
    </Dashboard>
  );
};

export default CarCreateDashboard;