import { Fragment } from 'react';
import { Outlet } from 'react-router-dom';

import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';
import { LogoContainer, NavigationContainer, NavLink, NavLinkContainer } from './navigation.style';

const Navigation = () => {
  return (
    <Fragment>
      <NavigationContainer>
        <LogoContainer to='/'>
          <CrwnLogo className='logo' />
        </LogoContainer>
        <NavLinkContainer>
          <NavLink to='/shop'>
            SHOP
          </NavLink>
          <NavLink to='/sign-in'>
            SIGN IN
          </NavLink>
        </NavLinkContainer>
      </NavigationContainer>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;