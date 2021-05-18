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
        alignContent: 'center',
        background: `linear-gradient(rgb(66, 151, 242), rgb(118, 132, 245), rgb(152, 110, 249), rgb(179, 79, 252), rgb(202, 12, 255))`
      }}
    >
      {children}
    </div>
  );
};

export default Container;
