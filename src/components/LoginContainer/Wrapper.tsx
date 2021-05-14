/** @jsxImportSource theme-ui */
import React from 'react';

type WrapperProps = {
  children: React.ReactNode;
};
const Wrapper: React.FC<WrapperProps> = ({ children }) => {
  return (
    <div
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        height: '50vh',
        width: '30vw',
        borderRadius: '25px',
        marginTop: '2rem'
      }}
    >
      {children}
    </div>
  );
};

export default Wrapper;
