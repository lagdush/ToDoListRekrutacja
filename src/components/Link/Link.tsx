/** @jsxImportSource theme-ui */
import React from 'react';
import { NavLink } from 'react-router-dom';

type LinkProps = {
  children: string;
  navTo: string;
};

const Link: React.FC<LinkProps> = ({ navTo, children }) => {
  return (
    <NavLink
      to={navTo}
      exact
      sx={{
        variant: 'text.nav',
        padding: '10px',
        textAlign: 'center',
        transition: '.3s linear',
        '&:hover': {
          color: 'secondary'
        }
      }}
    >
      {children}
    </NavLink>
  );
};

export default Link;
