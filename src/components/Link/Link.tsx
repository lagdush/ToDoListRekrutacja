/** @jsxImportSource theme-ui */
import React from 'react';
import { NavLink } from 'react-router-dom';

type LinkProps = {
  children: string;
  navTo: string;
  onClick?: () => void;
};

const Link: React.FC<LinkProps> = ({ navTo, children, onClick }) => {
  return (
    <NavLink
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
        }
      }}
    >
      {children}
    </NavLink>
  );
};

export default Link;
