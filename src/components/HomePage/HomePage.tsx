import React from 'react';
import Container from './Container';
import HeaderHomePageLogin from './HeaderHomePageLogin';
import HomePageLogo from './HomePageLogo';

type HomePageProps = {};

const HomePage: React.FC<HomePageProps> = () => {
  return (
    <Container>
      <HomePageLogo />
      <HeaderHomePageLogin />
    </Container>
  );
};

export default HomePage;
