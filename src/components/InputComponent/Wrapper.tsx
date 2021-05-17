/** @jsxImportSource theme-ui */
import { Flex } from '@theme-ui/components';
import React from 'react';

type WrapperProps = {
  children: React.ReactNode;
};
const Wrapper: React.FC<WrapperProps> = ({ children }) => {
  return (
    <Flex
      p={3}
      sx={{
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        height: '50vh',
        width: '30vw',
        borderRadius: '25px',
        boxShadow: `
  0 -2.4px 3.3px -3px rgba(0, 0, 0, 0.188),
  0 5.4px 11.2px -3px rgba(0, 0, 0, 0.216),
  0 26px 50px -3px rgba(0, 0, 0, 0.19)
`,
        marginTop: '2rem',
        '@media screen and (max-width: 768px) and (orientation: portrait)': {
          width: '80vw'
        },
        '@media screen and (max-width: 768px) and (orientation: landscape)': {
          width: '100vw',
          boxShadow: 'none',
          margin: '1rem'
        },
        '@media screen and (max-width: 812px) and (orientation: landscape)': {
          boxShadow: 'none',
          margin: '1rem'
        }
      }}
    >
      {children}
    </Flex>
  );
};

export default Wrapper;
