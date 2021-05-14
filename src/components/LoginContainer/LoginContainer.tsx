/** @jsxImportSource theme-ui */

import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { Button, Input, Label, Spinner } from '@theme-ui/components';
import {
  userTodosListAtom,
  currentUserIdAtom
} from '../../recoilStore/atoms';
import Wrapper from './Wrapper';

const LoginContainer: React.FC = () => {
  const [, setUserTodos] = useRecoilState(userTodosListAtom);
  const [currentUserId, setCurrentUserId] = useRecoilState(currentUserIdAtom);
  const [isLoading, setLoading] = useState(false);
  const history = useHistory();

  const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentUserId(e.target.value);
  };

  const getDataFromApi = async (inputData: string | undefined) => {
    try {
      if (!inputData) {
        return;
      }
      const rawDataFromApi = await fetch(
        `https://gorest.co.in//public-api/users/${inputData}/todos`
      );
      setLoading(true);
      const dataFromApi = await rawDataFromApi.json();
      const userTodoList = dataFromApi.data;
      setUserTodos([...userTodoList]);
      setLoading(false);
      history.push('/homepage');
    } catch (error) {
      console.log(error);
    }
  };

  return isLoading ? (
    <Spinner
      size={80}
      sx={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)'
      }}
    />
  ) : (
    <Wrapper>
      <Label
        sx={{
          display: 'flex',
          flexDirection: 'column',
          flexWrap: 'wrap',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: '16px'
        }}
      >
        Podaj swoje ID
        <Input
          m={3}
          sx={{
            textAlign: 'center',
            color: 'primary',
            backgroundColor: 'muted',
            padding: '10px 15px'
          }}
          onChange={inputHandler}
        />
      </Label>
      <Button variant="action" onClick={() => getDataFromApi(currentUserId)}>
        Zaloguj się
      </Button>
    </Wrapper>
  );
};

export default LoginContainer;
