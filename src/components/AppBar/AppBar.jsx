import { AuthNav } from 'components/AuthNav/AuthNav';
import { Navigation } from 'components/Navigation/Navigation';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { Header } from './AppBar.styled';
import { useAuth } from 'hooks/useAuth';
import { SlBookOpen } from 'react-icons/sl';

export const AppBar = () => {
  const { isLoggedIn } = useAuth();
  return (
    <Header>
      <div>
        <SlBookOpen fontSize={50} />
        <h1>PHONEBOOK</h1>
      </div>

      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </Header>
  );
};
