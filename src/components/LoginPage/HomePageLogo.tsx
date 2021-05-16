/** @jsxImportSource theme-ui */
import { ReactComponent as HomeLogo } from '../../assets/homePage/Saly-12HomePageLogo.svg';

const HomePageLogo: React.FC = () => {
  return (
    <HomeLogo
      sx={{
        position: 'relative',
        width: '50vw',
        height: '90vh',
        gridColumn: '3/5',
        gridRow: '1/-1',
        placeSelf: 'center '
      }}
    />
  );
};

export default HomePageLogo;
