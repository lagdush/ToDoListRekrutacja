import React from 'react';
import Container from './Container';
import HeaderHomePageLogin from './HeaderHomePageLogin';
import HomePageLogo from './HomePageLogo';


const LoginPage: React.FC = () => {
  return (
    <Container>
      <HomePageLogo />
      <HeaderHomePageLogin />
    </Container>
  );
};

export default LoginPage;
