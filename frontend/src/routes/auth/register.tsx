import { ChangeEvent, FC, FormEvent, useState } from 'react';
import Container from '../../components/container/container.component';
import Header from '../../components/header/header.component';
import Input from '../../components/ui/input/input.component';
import Form from '../../components/form/form.component';
import { createUser } from '../../services/axios/user/api';
import { addTokens, addUser } from '../../store/slices/user';
import { UserInterface, UserTokensInterface } from '../../interfaces/user';
import { useAppDispatch } from '../../hooks/reduxHooks';
import { AxiosError } from 'axios';
import { ErrorDataInterface } from '../../services/axios/interfaces';
import Notification from '../../components/notification/notification.component';
import { useNavigate } from 'react-router-dom';
import Checkbox from '../../components/ui/checkbox/checkbox.component';
import { NotificationInterface } from '../../components/notification/NotificationInterface';
import useFormData from '../../hooks/formDataHook';

interface RegisterPageProps {}

interface RegisterFormData {
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  password: string;
  confirm_password: string;
  is_lessor: boolean;
}

const Register: FC<RegisterPageProps> = ({}) => {
  const { handleHookSubmit, handleInputChange, handleInputChecked } =
    useFormData<RegisterFormData>({
      first_name: '',
      last_name: '',
      email: '',
      phone: '',
      password: '',
      confirm_password: '',
      is_lessor: false
    });

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [notificationMessage, setNotificationMessage] =
    useState<NotificationInterface | null>(null);

  const handleSubmit = async (formData: FormData) => {
    try {
      const response = await createUser(formData);
      const user: UserInterface = response.user;
      const tokens: UserTokensInterface = response.tokens;

      dispatch(addUser(user));
      dispatch(addTokens(tokens));

      navigate('/');
    } catch (error) {
      const err = error as AxiosError<any>;
      const data: ErrorDataInterface = err.response?.data;
      if (data) {
        setNotificationMessage({
          status: 'error',
          message: data.message
        });
      }
    }
  };

  return (
    <div className="h-screen bg-auth bg-contain bg-no-repeat">
      <Header />
      <main className="relative">
        <Container className="flex grow shrink flex-col pt-10">
          <div className="w-2/5 self-end bg-white p-4 rounded-xl shadow-2xl">
            <form
              onSubmit={(e) => handleHookSubmit(handleSubmit, e)}
              className="grid grid-cols-2 gap-2"
            >
              <Input
                name="first_name"
                label="First name"
                onChange={handleInputChange}
                required={true}
              />
              <Input
                name="last_name"
                label="Last name"
                required={true}
                onChange={handleInputChange}
              />
              <Input
                name="email"
                type="email"
                label="Email"
                required={true}
                onChange={handleInputChange}
              />
              <Input
                type="number"
                name="phone"
                label="Phone"
                required={true}
                onChange={handleInputChange}
              />
              <Input
                name="password"
                type="password"
                label="Password"
                required={true}
                className="col-span-2"
                onChange={handleInputChange}
              />
              <Input
                name="confirm_password"
                type="password"
                label="Confirm password"
                required={true}
                className="col-span-2"
                onChange={handleInputChange}
              />
              <div className="col-span-2">
                <Checkbox
                  name="is_lessor"
                  label="I want to rent cars"
                  onChange={handleInputChecked}
                />
              </div>
              <button
                type="submit"
                className="bg-orange-700 rounded-sm py-2 text-white hover:bg-orange-800"
              >
                Register
              </button>
            </form>
          </div>
        </Container>
        {notificationMessage ? (
          <Notification
            handleCloseClick={() => setNotificationMessage(null)}
            status={notificationMessage.status}
          >
            {notificationMessage.message}
          </Notification>
        ) : (
          ''
        )}
      </main>
    </div>
  );
};

export default Register;
