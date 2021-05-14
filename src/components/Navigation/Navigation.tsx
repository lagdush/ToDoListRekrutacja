/** @jsxImportSource theme-ui */
import React from 'react';
import { useMediaQuery } from '@react-hook/media-query';
import { Flex } from 'theme-ui';
import { todoAppNavigation } from '../../helpers/createNavigation/todoAppNavigation';
import Logo from '../Logo/Logo';
import Link from '../Link/Link';

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
        justifyContent: 'space-around',
        alignItems: 'center'
      }}
    >
      <Logo />
      {createNavigation.map((link) => {
        return (
          <Link key={link.route} navTo={link.route}>
            {link.name}
          </Link>
        );
      })}
      <Link navTo="/homepage">Wyloguj się</Link>
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
