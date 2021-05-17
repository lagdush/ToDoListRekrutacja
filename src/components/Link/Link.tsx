/** @jsxImportSource theme-ui */
import React from 'react';
import { NavLink } from 'react-router-dom';

type LinkProps = {
  children: string;
  navTo: string;
  onClick?: () => void;
  style?: any;
};

const Link: React.FC<LinkProps> = ({ navTo, children, onClick, style }) => {
  return (
    <NavLink
      style={style}
      onClick={onClick}
      to={navTo}
      exact
      sx={{
        variant: 'text.nav',
        padding: '10px',
        textAlign: 'center',
        transition: '.3s linear',
        '&:hover': {
          color: 'secondary'
        },
        '@media screen and (max-width: 900px)': {
          '&:hover': {
            color: 'primary'
          }
        }
      }}
    >
      {children}
    </NavLink>
  );
};

export default Link;
