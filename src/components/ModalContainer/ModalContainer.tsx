import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

type ModalContainerProps = {
  children: React.ReactNode;
};

const modalRootElement = document.getElementById('modal-container');

const ModalContainer: React.FC<ModalContainerProps> = ({ children }) => {
  const modalElement = document.createElement('div');

  useEffect(() => {
    modalRootElement?.appendChild(modalElement);

    return () => {
      modalRootElement?.removeChild(modalElement);
    };
  }, [modalElement]);

  return ReactDOM.createPortal(
    <div>{children}</div>,
    modalElement
  );
};

export default ModalContainer;
