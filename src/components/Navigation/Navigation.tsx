/** @jsxImportSource theme-ui */
import React from 'react';
import { NavLink } from 'react-router-dom';
import { useMediaQuery } from '@react-hook/media-query';
import { Flex } from 'theme-ui';
import { todoAppNavigation } from '../../helpers/createNavigation/todoAppNavigation';
import Logo from '../Logo/Logo';

type NavigationTemplateProps = {
  createNavigation: { name: string; route: string }[];
};

const NavigationTemplate: React.FC<NavigationTemplateProps> = ({
  createNavigation
}) => {
  return (
    <Flex
      bg="primary"
      p={4}
      sx={{
        position: 'sticky',
        top: 0,
        left: 0,
        width: '100%',
        justifyContent: 'space-evenly',
        alignItems: 'center'
      }}
    >
      <NavLink sx={{ variant: 'text.nav' }} exact to="/">
        {/* <Logo /> */}
      </NavLink>
      {createNavigation.map((link) => {
        return (
          <NavLink
            sx={{ variant: 'text.nav' }}
            key={link.route}
            to={link.route}
          >
            {link.name}
          </NavLink>
        );
      })}
      <NavLink sx={{ variant: 'text.nav' }} to="homepage">
        Wyloguj się
      </NavLink>
    </Flex>
  );
};

type NavigationProps = {
  children: React.ReactNode;
};

const Navigation: React.FC<NavigationProps> = ({ children }) => {
  const matches = useMediaQuery('only screen and (max-width: 1024px)');
  return (
    <div>
      {matches ? (
        <p>HamburgerMenu</p>
      ) : (
        <NavigationTemplate
          createNavigation={todoAppNavigation}
        ></NavigationTemplate>
      )}
      {children}
    </div>
  );
};

export default Navigation;
