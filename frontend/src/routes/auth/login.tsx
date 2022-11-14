import { FC, useState } from 'react';
import Container from '../../components/container/container.component';
import Header from '../../components/header/header.component';
import Input from '../../components/ui/input/input.component';
import Form from '../../components/form/form.component';
import { login } from '../../services/axios/user/api';
import { UserInterface, UserTokensInterface } from '../../interfaces/user';
import { AxiosError } from 'axios';
import { ErrorDataInterface } from '../../services/axios/interfaces';
import { useNavigate } from 'react-router-dom';
import Notification from '../../components/notification/notification.component';
import { NotificationStatus } from '../../components/notification/types';
import { addTokens, addUser } from '../../store/slices/user';
import { useAppDispatch } from '../../hooks/reduxHooks';

interface LoginPageProps {}

interface LoginFormFields {
  email: string;
  password: string;
}

const Login: FC<LoginPageProps> = ({}) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [notificationMessage, setNotificationMessage] = useState<{
    status: string;
    message: string;
  }>({
    status: '',
    message: ''
  });

  const onSubmit = async (formFields: LoginFormFields) => {
    try {
      const response = await login(formFields);
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
          status: 'Error',
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
            <Form className="grid grid-cols-2 gap-2" onSubmit={onSubmit}>
              <Input
                name="email"
                type="email"
                title="Email"
                required={true}
                className="col-span-2"
              />
              <Input
                name="password"
                type="password"
                title="Password"
                required={true}
                className="col-span-2"
              />
              <button
                type="submit"
                className="bg-orange-700 rounded-sm py-2 text-white hover:bg-orange-800"
              >
                Login
              </button>
            </Form>
          </div>
        </Container>
        {notificationMessage.message ? (
          <Notification
            handleCloseClick={() =>
              setNotificationMessage({ status: '', message: '' })
            }
            status={
              NotificationStatus[
                notificationMessage.status as keyof typeof NotificationStatus
              ]
            }
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
