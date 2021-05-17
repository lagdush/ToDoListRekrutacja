/** @jsxImportSource theme-ui */
import React, { useState } from 'react';
import { useSpring } from 'react-spring';
import { Flex } from 'theme-ui';
import { ReactComponent as Menu } from '../../assets/hamburgerIco/bars-solid.svg';
import { todoAppNavigation } from '../../helpers/createNavigation/todoAppNavigation';
import { NavigationTemplate } from '../Navigation/Navigation';
type HamburgerMenuProps = {};

const HamburgerMenu: React.FC<HamburgerMenuProps> = () => {
  const [menu, showMenu] = useState(false);
  const menuStyles = useSpring({
    transform: menu ? `translateY(0)` : `translateY(-100%)`,
    opacity: menu ? 1 : 0
  });
  const handleOpen = () => {
    showMenu(!menu);
  };

  const handleClose = () => {
    showMenu(false);
  };
  return (
    <Flex bg="secondary" sx={{ justifyContent: 'flex-end' }}>
      <Menu
        sx={{
          width: '5%',
          margin: '2%',
          zIndex: 1,
          '@media screen and (max-width: 768px) and (orientation: landscape)': {
            width: '5%'
          }
        }}
        onClick={handleOpen}
      />
      {menu && (
        <NavigationTemplate
          createNavigation={todoAppNavigation}
          closeMenu={handleClose}
          style={menuStyles}
        />
      )}
    </Flex>
  );
};

export default HamburgerMenu;
