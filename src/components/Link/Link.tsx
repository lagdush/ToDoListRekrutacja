/** @jsxImportSource theme-ui */
import React from 'react';
import { NavLink } from 'react-router-dom';

type LinkProps = {
  children: React.ReactNode;
  navTo: string;
};

const Link: React.FC<LinkProps> = ({ navTo, children }) => {
  return (
    <NavLink to={navTo} exact sx={{ variant: 'text.nav' , padding: '10px', textAlign:'center'}}>
      {children}
    </NavLink>
  );
};

export default Link;
