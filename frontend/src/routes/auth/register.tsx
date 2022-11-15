import { FC, useState } from 'react';
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

interface RegisterPageProps {}

interface RegisterFormFields {
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  password: string;
  confirm_password: string;
}

const Register: FC<RegisterPageProps> = ({}) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [notificationMessage, setNotificationMessage] =
    useState<NotificationInterface | null>(null);

  const onSubmit = async (formFields: RegisterFormFields) => {
    if (formFields) {
      try {
        const response = await createUser(formFields);
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
    }
  };

  return (
    <div className="h-screen bg-auth bg-contain bg-no-repeat">
      <Header />
      <main className="relative">
        <Container className="flex grow shrink flex-col pt-10">
          <div className="w-2/5 self-end bg-white p-4 rounded-xl shadow-2xl">
            <Form className="grid grid-cols-2 gap-2" onSubmit={onSubmit}>
              <Input name="first_name" title="First name" required={true} />
              <Input name="last_name" title="Last name" required={true} />
              <Input name="email" type="email" title="Email" required={true} />
              <Input type="number" name="phone" title="Phone" required={true} />
              <Input
                name="password"
                type="password"
                title="Password"
                required={true}
                className="col-span-2"
              />
              <Input
                name="confirm_password"
                type="password"
                title="Confirm password"
                required={true}
                className="col-span-2"
              />
              <div className="col-span-2">
                <Checkbox
                  name="isLessor"
                  value="true"
                  label="I want to rent cars"
                />
              </div>

              <button
                type="submit"
                className="bg-orange-700 rounded-sm py-2 text-white hover:bg-orange-800"
              >
                Register
              </button>
            </Form>
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
