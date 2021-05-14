/** @jsxImportSource theme-ui */
import { Themed } from '@theme-ui/mdx';
import { NavLink } from 'react-router-dom';
import { ReactComponent as NavLogo } from '../../assets/logo/Saly-26Logo.svg';

type LogoProps = {};

const Logo: React.FC<LogoProps> = () => {
  return (
    <NavLink
      to="/homepage"
      exact
      sx={{
        variant: 'text.nav',
        display: 'flex',
        flexDirection: 'column'
      }}
    >
      <NavLogo sx={{ height: '10vh', width: 'auto' }} />
      <Themed.h1>CheckIt</Themed.h1>
    </NavLink>
  );
};

export default Logo;
