import { ChangeEvent, FC, FormEvent, useState } from 'react';
import Container from '../../components/container/container.component';
import Header from '../../components/header/header.component';
import Input from '../../components/ui/input/input.component';
import { useNavigate } from 'react-router-dom';
import Notification from '../../components/notification/notification.component';
import { useAppDispatch } from '../../hooks/reduxHooks';
import { NotificationInterface } from '../../components/notification/NotificationInterface';
import { login } from '../../services/axios/user/api';
import { UserInterface, UserTokensInterface } from '../../interfaces/user';
import { addTokens, addUser } from '../../store/slices/user';
import { AxiosError } from 'axios';
import { ErrorDataInterface } from '../../services/axios/interfaces';
import useFormData from '../../hooks/formDataHook';

interface LoginPageProps {}

interface LoginFormData {
  email: string;
  password: string;
}

const Login: FC<LoginPageProps> = ({}) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [notificationMessage, setNotificationMessage] =
    useState<NotificationInterface | null>(null);

  const { handleHookSubmit, handleInputChange } = useFormData<LoginFormData>({
    email: '',
    password: ''
  });

  const handleSubmit = async (formData: FormData) => {
    try {
      const response = await login(formData);
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
        <Container className="flex grow shrink flex-col pt-20">
          <div className="w-2/5 self-end bg-white p-4 rounded-xl shadow-2xl">
            <form
              action=""
              onSubmit={(e) => handleHookSubmit(handleSubmit, e)}
              className="grid grid-cols-2 gap-2"
            >
              <Input
                name="email"
                type="email"
                label="Email"
                required={true}
                className="col-span-2"
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
              <button
                type="submit"
                className="bg-orange-700 rounded-sm py-2 text-white hover:bg-orange-800"
              >
                Login
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

export default Login;
