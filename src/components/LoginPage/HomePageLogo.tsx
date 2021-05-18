/** @jsxImportSource theme-ui */
import { ReactComponent as HomeLogo } from '../../assets/homePage/Startup, Success, technology, growth _  innovation, idea, thought, woman, statistics.svg';

const HomePageLogo: React.FC = () => {
  return (
    <HomeLogo
      sx={{
        position: 'relative',
        width: '50vw',
        height: '90vh',
        gridColumn: '3/5',
        gridRow: '1/-1',
        placeSelf: 'center ',
        '@media screen and (max-width: 768px)': {
          display: 'none'
        }
      }}
    />
  );
};

export default HomePageLogo;
