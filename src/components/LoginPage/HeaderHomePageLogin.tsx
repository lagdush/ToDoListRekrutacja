/* eslint-disable react/jsx-pascal-case */
/** @jsxImportSource theme-ui */
import React from 'react';
import { Themed } from 'theme-ui';
import LoginContainer from '../LoginContainer/LoginContainer';

const HeaderHomePageLogin: React.FC = () => {
  return (
    <div
      sx={{
        gridColumn: '1 / 3',
        gridRow: '1 / -1',
        placeSelf: 'center',
        '@media screen and (max-width: 768px)': {
          gridColumn: '1 / -1',
          gridRow: '1 / -1'
        }
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
          alignSelf: 'start',
        }}
      >
        <Themed.h1>inProgress</Themed.h1>
        <LoginContainer />
      </div>
    </div>
  );
};

export default HeaderHomePageLogin;
