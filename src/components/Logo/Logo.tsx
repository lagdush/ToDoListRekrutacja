/** @jsxImportSource theme-ui */
/* eslint-disable react/jsx-pascal-case */
import { Themed } from '@theme-ui/mdx';
import { NavLink } from 'react-router-dom';

type LogoProps = { closeMenu?: () => void };

const Logo: React.FC<LogoProps> = ({ closeMenu }) => {
  return (
    <NavLink
      onClick={closeMenu}
      to="/homepage"
      exact
      sx={{
        variant: 'text.nav',
        display: 'flex',
        flexDirection: 'column'
      }}
    >
      <Themed.h1>inProgress</Themed.h1>
    </NavLink>
  );
};

export default Logo;
