/** @jsxImportSource theme-ui */
import React from 'react';

type ContainerProps = {
  children: React.ReactNode;
};
const Container: React.FC<ContainerProps> = ({ children }) => {
  return (
    <div
      sx={{
        height: '100vh',
        width: '100vw',
        display: 'grid',
        gridTemplateColumns: 'repeat(4, minmax(20%, 1fr))',
        gridTemplateRows: 'repeat(4, minmax(20%, 1fr))',
        justifyContent: 'center',
        alignContent: 'center'
      }}
    >
      {children}
    </div>
  );
};

export default Container;
