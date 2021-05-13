import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useMediaQuery } from '@react-hook/media-query';
import { todoAppNavigation } from '../../helpers/createNavigation/todoAppNavigation';

type NavigationTemplateProps = {
  createNavigation: { name: string; route: string }[];
};

const NavigationTemplate: React.FC<NavigationTemplateProps> = ({
  createNavigation
}) => {
  return (
    <div>
      <h1>ToDo app</h1>
      <NavLink exact to="/">
        LOGO
      </NavLink>
      {createNavigation.map((link) => {
        return (
          <NavLink key={link.route} to={link.route}>
            {link.name}
          </NavLink>
        );
      })}
      <NavLink to="homepage">Wyloguj się</NavLink>
    </div>
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
