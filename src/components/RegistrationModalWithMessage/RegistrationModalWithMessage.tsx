/* eslint-disable react/jsx-pascal-case */
/** @jsxImportSource theme-ui */
import React from 'react';
import { useHistory } from 'react-router-dom';
import { useSpring } from 'react-spring';
import { Themed, Button } from 'theme-ui';
import ModalContainer from '../ModalContainer/ModalContainer';

type RegistrationModalWithMessageProps = {
  rawContent: string;
  handleClose?: any;
};

const RegistrationModalWithMessage: React.FC<RegistrationModalWithMessageProps> =
  ({ rawContent, handleClose }) => {
    const history = useHistory();
    const modalStyle = useSpring({
      to: { opacity: 1 },
      from: { opacity: 0 },
      config: { duration: 300 }
    });

    const redirect = () => {
      history.push('/');
      handleClose();
    };
    return (
      <ModalContainer modalStyle={modalStyle}>
        {!rawContent ? (
          <Themed.h2 sx={{ color: 'primary' }}>Coś poszło nie tak.</Themed.h2>
        ) : (
          <>
            <Themed.h2 sx={{ color: 'primary' }}>
              Twoje dane do logowania. Zapamietaj je.
            </Themed.h2>
            <Themed.h3 sx={{ color: 'secondary' }}>{rawContent}</Themed.h3>
          </>
        )}

        <Button mx={2} onClick={redirect}>
          Zamknij
        </Button>
      </ModalContainer>
    );
  };

export default RegistrationModalWithMessage;
