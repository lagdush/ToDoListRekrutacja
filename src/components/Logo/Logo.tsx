/** @jsxImportSource theme-ui */
import React from 'react';
import { Flex, Themed } from 'theme-ui';
import { ReactComponent as NavLogo } from '../../assets/logo/Saly-26Logo.svg';
type LogoProps = {};

const Logo: React.FC<LogoProps> = () => {
  return (
    <div
      sx={{
        display: 'flex',
        width: '100%',
        justifyContent: 'space-evenly',
        alignItems: 'center'
      }}
    >
      <NavLogo sx={{ height: '10vh', width: '10%' }} />
      <h1>ToDo app</h1>
    </div>
  );
};

export default Logo;
