/** @jsxImportSource theme-ui */

import React, { useEffect, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import { atom, useRecoilState } from 'recoil';
import { Button, Input, Label } from '@theme-ui/components';
import { DataFromApi } from '../../models/dataFromApi';
import Wrapper from './Wrapper';

type LoginContainerProps = {};

const LoginContainer: React.FC<LoginContainerProps> = () => {
  const userTodosList = atom({
    key: 'userTodos',
    default: [] as DataFromApi[]
  });

  const [userTodos, setUserTodos] = useRecoilState(userTodosList);

  const inputRef = useRef<string>();
  const history = useHistory();

  const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    inputRef.current = e.target.value;
  };

  const getDataFromApi = async (inputData: string | undefined) => {
    if (!inputData) {
      return;
    }
    const rawDataFromApi = await fetch(
      `https://gorest.co.in//public-api/users/${inputData}/todos`
    );
    console.log('klik');
    const dataFromApi = await rawDataFromApi.json();
    const userTodoList = dataFromApi.data;
    setUserTodos([...userTodoList]);
    console.log(userTodos);
  };



  useEffect(() => {
    console.log(userTodos);
  }, [userTodos]);

  return (
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
      <Button variant="action" onClick={() => getDataFromApi(inputRef.current)}>
        Zaloguj się
      </Button>
    </Wrapper>
  );
};

export default LoginContainer;
