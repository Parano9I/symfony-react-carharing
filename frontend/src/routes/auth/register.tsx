import { FC } from 'react';
import Container from '../../components/container/container.component';
import Header from '../../components/header/header.component';
import Input from '../../components/ui/input/input.component';
import Form from '../../components/form/form.component';
import { InputType } from '../../components/ui/input/types';
import { createUser } from '../../services/axios/user/api';
import { addTokens, addUser } from '../../store/slices/user';
import { UserInterface, UserTokensInterface } from '../../interfaces/user';
import { useAppDispatch } from '../../hooks/reduxHooks';

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

  const onSubmit = async (formFields: RegisterFormFields) => {
    if (formFields) {
      const response = await createUser(formFields);
      const user: UserInterface = response.user;
      const tokens: UserTokensInterface = response.tokens;

      dispatch(addUser(user));
      dispatch(addTokens(tokens));
    }
  };

  return (
    <div className="h-screen bg-auth bg-contain bg-no-repeat">
      <Header />
      <main className="">
        <Container className="flex grow shrink flex-col pt-10">
          <div className="w-2/5 self-end bg-white p-4 rounded-xl shadow-2xl">
            <Form className="grid grid-cols-2 gap-2" onSubmit={onSubmit}>
              <Input
                name="first_name"
                title="First name"
                required={true}
                error=""
              />
              <Input
                name="last_name"
                title="Last name"
                required={true}
                error=""
              />
              <Input
                name="email"
                type={InputType.Email}
                title="Email"
                required={true}
                error=""
              />
              <Input
                type={InputType.Number}
                name="phone"
                title="Phone"
                required={true}
                error=""
              />
              <Input
                name="password"
                type={InputType.Pass}
                title="Password"
                required={true}
                error=""
                className="col-span-2"
              />
              <Input
                name="confirm_password"
                type={InputType.Pass}
                title="Confirm password"
                required={true}
                error=""
                className="col-span-2"
              />
              <button
                type="submit"
                className="bg-orange-700 rounded-sm py-2 text-white hover:bg-orange-800"
              >
                Register
              </button>
            </Form>
          </div>
        </Container>
      </main>
    </div>
  );
};

export default Register;
