/** @jsxImportSource theme-ui */
import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { animated, SpringValue } from 'react-spring';

type ModalContainerProps = {
  children: React.ReactNode;
  modalStyle: { opacity: SpringValue<number> };
};

const modalRootElement = document.getElementById('modal-container');

const ModalContainer: React.FC<ModalContainerProps> = ({
  modalStyle,
  children
}) => {
  const modalElement = document.createElement('div');

  useEffect(() => {
    modalRootElement?.appendChild(modalElement);

    return () => {
      modalRootElement?.removeChild(modalElement);
    };
  }, [modalElement]);

  return ReactDOM.createPortal(
    <animated.div
      sx={{
        position: 'fixed',
        top: '50%',
        left: '50%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        textAlign: 'justify',
        transform: 'translate(-50%, -50%)',
        padding: '30px',
        minWidth: '300px',
        maxWidth: '70vw',
        minHeight: '300px',
        maxHeight: '80vh',
        backgroundColor: 'secondary',
        border: '10x solid black'
      }}
      style={modalStyle}
    >
      {children}
    </animated.div>,
    modalElement
  );
};

export default ModalContainer;
