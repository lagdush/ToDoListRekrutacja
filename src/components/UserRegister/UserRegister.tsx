/* eslint-disable react/jsx-pascal-case */
/** @jsxImportSource theme-ui */
import { Flex, Input, Label } from '@theme-ui/components';
import React, { useState } from 'react';
import { Button, Radio, Themed } from 'theme-ui';
import useModal from '../../hooks/useModal';
import RegistrationModalWithMessage from '../RegistrationModalWithMessage/RegistrationModalWithMessage';

const UserRegister: React.FC = () => {
  const userDataInitialState = {
    name: '',
    email: '',
    gender: '',
    status: 'Active'
  };
  const [userData, setUserData] = useState(userDataInitialState);
  const { isOpen, handleCloseModal, handleOpenModal } = useModal();
  const [modalContent, setModalContent] = useState<string>();
  const userDataInputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value
    });
  };

  const createNewUser = async (
    payload: typeof userDataInitialState | undefined
  ) => {
    try {
      const register = await fetch(`https://gorest.co.in/public-api/users/`, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization:
            'Bearer ' +
            'aa8db0033f95a11b46894138676127a04929eb22c0d89465684c124d1194ea6e'
        },
        body: JSON.stringify(payload)
      });
      const data = await register.json();
      setModalContent(data.data.id);
      handleOpenModal();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div
      sx={{
        background: `linear-gradient(rgb(46, 143, 207), rgb(115, 155, 219), rgb(162, 166, 231), rgb(205, 177, 243), rgb(246, 187, 255))`,
        width: '100%',
        height: '100vh'
      }}
    >
      <Themed.h1 sx={{ paddingTop: '2%' }}>Rejestracja</Themed.h1>
      <Flex
        p={3}
        sx={{
          margin: '0 auto',
          justifyContent: 'space-evenly',
          alignItems: 'center',
          flexWrap: 'wrap',
          height: '80vh',
          width: '60vw',
          borderRadius: '25px'
        }}
      >
        <Label
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: '16px'
          }}
        >
          Imie
          <Input
            sx={{ width: '80%' }}
            name="name"
            value={userData.name}
            onChange={userDataInputHandler}
          />
        </Label>
        <Label
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: '16px'
          }}
        >
          Email
          <Input
            sx={{ width: '80%' }}
            value={userData.email}
            name="email"
            onChange={userDataInputHandler}
          />
        </Label>
        <Flex
          mx="auto"
          sx={{
            fontSize: '16px',
            width: '100%',
            '@media screen and (max-width: 768px)': {
              flexWrap: 'wrap'
            }
          }}
        >
          <Label sx={{ display: 'flex', justifyContent: 'center' }}>
            Mężczyzna
            <Radio value="Male" name="gender" onChange={userDataInputHandler} />
          </Label>
          <Label sx={{ display: 'flex', justifyContent: 'center' }}>
            Kobieta
            <Radio
              value="Female"
              name="gender"
              onChange={userDataInputHandler}
            />
          </Label>
        </Flex>
        <Button variant="action" onClick={() => createNewUser(userData)}>
          Zarejestruj
        </Button>
        {isOpen ? (
          <RegistrationModalWithMessage
            rawContent={modalContent!}
            handleClose={handleCloseModal}
          />
        ) : null}
      </Flex>
    </div>
  );
};

export default UserRegister;
