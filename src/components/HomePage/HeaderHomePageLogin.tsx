/** @jsxImportSource theme-ui */
import React from 'react';
import { Themed } from 'theme-ui';

const HeaderHomePageLogin: React.FC = () => {
  return (
    <div
      sx={{
        gridColumn: '1 / 3',
        gridRow: '1 / -1',
        placeSelf: 'center'
      }}
    >
      <div
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          gridColumn: '1 / 3',
          gridRow: '1 / -1',
          justifySelf: 'stretch',
          alignSelf: 'start'
        }}
      >
        <Themed.h1>Check It</Themed.h1>
        <Themed.h2>Do It</Themed.h2>
      </div>
    </div>
  );
};

export default HeaderHomePageLogin;
