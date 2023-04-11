import { RegisterForm } from 'components/RegisterForm/RegisterForm';

import { Loader } from 'components/Loader/Loader';
import { useAuth } from 'hooks';

const Register = () => {
  const { isLoading } = useAuth();
  return (
    <div>
      <title>Registration</title>

      {isLoading ? <Loader /> : <RegisterForm />}
    </div>
  );
};

export default Register;
