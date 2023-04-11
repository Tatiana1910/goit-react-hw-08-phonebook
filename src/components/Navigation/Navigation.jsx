import { useAuth } from 'hooks';
import { NavLinkStyle } from './Navigation.styled';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();
  return (
    <nav>
      <NavLinkStyle to="/">Home</NavLinkStyle>

      {isLoggedIn && <NavLinkStyle to="/contacts">Contacts</NavLinkStyle>}
    </nav>
  );
};
