/** @jsxImportSource theme-ui */
import React from 'react';
import { useMediaQuery } from '@react-hook/media-query';
import { Flex } from 'theme-ui';
import { userTodosListAtom } from '../../recoilStore/atoms';
import { useRecoilState } from 'recoil';
import { todoAppNavigation } from '../../helpers/createNavigation/todoAppNavigation';
import Logo from '../Logo/Logo';
import Link from '../Link/Link';

type NavigationTemplateProps = {
  createNavigation: { name: string; route: string }[];
};

const NavigationTemplate: React.FC<NavigationTemplateProps> = ({
  createNavigation
}) => {
  const [, setUserTodos] = useRecoilState(userTodosListAtom);

  const logout = () => {
    setUserTodos([]);
  };
  return (
    <nav
      sx={{
        position: 'sticky',
        top: '0',
        left: '0',
        padding: '16px',
        backgroundColor: 'primary'
      }}
    >
      <Flex
        sx={{
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
        <Link onClick={logout} navTo="/">
          Wyloguj się
        </Link>
      </Flex>
    </nav>
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
