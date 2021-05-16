import React from 'react';
import Container from './Container';
import HeaderHomePageLogin from './HeaderHomePageLogin';
import HomePageLogo from './HomePageLogo';

type LoginPageProps = {};

const LoginPage: React.FC<LoginPageProps> = () => {
  return (
    <Container>
      <HomePageLogo />
      <HeaderHomePageLogin />
    </Container>
  );
};

export default LoginPage;
