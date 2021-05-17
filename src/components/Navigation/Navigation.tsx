/** @jsxImportSource theme-ui */
import React from 'react';
import { useMediaQuery } from '@react-hook/media-query';
import { Flex } from 'theme-ui';
import { userTodosListAtom } from '../../recoilStore/atoms';
import { useRecoilState } from 'recoil';
import { todoAppNavigation } from '../../helpers/createNavigation/todoAppNavigation';
import Logo from '../Logo/Logo';
import Link from '../Link/Link';
import HamburgerMenu from '../HamburgerMenu/HamburgerMenu';
import { animated } from 'react-spring';

type NavigationTemplateProps = {
  createNavigation: { name: string; route: string }[];
  closeMenu?: () => void;
  style?: any;
};

export const NavigationTemplate: React.FC<NavigationTemplateProps> = ({
  createNavigation,
  closeMenu,
  style
}) => {
  const [, setUserTodos] = useRecoilState(userTodosListAtom);

  const logout = () => {
    setUserTodos([]);
    if (closeMenu) {
      closeMenu();
    }
  };
  return (
    <animated.nav
      sx={{
        position: 'sticky',
        top: '0',
        left: '0',
        padding: '16px',
        backgroundColor: 'primary',
        '@media screen and (max-width: 850px)': {
          position: 'absolute',
          top: 0,
          left: 0,
          minHeight: '100%',
          width: '100%',
          zIndex: 1,
          backgroundColor: 'secondary'
        }
      }}
      style={style}
    >
      <Flex
        sx={{
          width: '100%',
          justifyContent: 'space-around',
          alignItems: 'center',
          '@media screen and (max-width: 900px)': {
            height: '100vh',
            flexWrap: 'wrap',
            flexDirection: 'column',
            justifyContent: 'space-evenly',
            overflowY: 'hidden'
          }
        }}
      >
        <Logo closeMenu={closeMenu} />
        {createNavigation.map((link) => {
          return (
            <Link
              style={style}
              onClick={closeMenu}
              key={link.route}
              navTo={link.route}
            >
              {link.name}
            </Link>
          );
        })}
        <Link style={style} onClick={logout} navTo="/">
          Wyloguj się
        </Link>
      </Flex>
    </animated.nav>
  );
};

type NavigationProps = {
  children: React.ReactNode;
};

const Navigation: React.FC<NavigationProps> = ({ children }) => {
  const matches = useMediaQuery('only screen and (max-width: 900px)');
  return (
    <div>
      {matches ? (
        <HamburgerMenu />
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
