/** @jsxImportSource theme-ui */

import React, { useEffect, useRef, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { Button, Input, Label, Spinner } from '@theme-ui/components';
import { userTodosList } from '../../recoilStore/store';
import Wrapper from './Wrapper';

const LoginContainer: React.FC = () => {
  const [userTodos, setUserTodos] = useRecoilState(userTodosList);
  const [isLoading, setLoading] = useState(false);
  const inputRef = useRef<string>();
  const history = useHistory();

  const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    inputRef.current = e.target.value;
  };

  const getDataFromApi = async (inputData: string | undefined) => {
    if (!inputData) {
      return;
    }
    try {
      const rawDataFromApi = await fetch(
        `https://gorest.co.in//public-api/users/${inputData}/todos`
      );
      setLoading(true);
      const dataFromApi = await rawDataFromApi.json();
      const userTodoList = dataFromApi.data;
      setUserTodos([...userTodoList]);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    //  userTodos && history.push('/homepage');
    console.log(userTodos);
  }, [userTodos, history]);

  return isLoading ? (
    <Spinner
      size={80}
      sx={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'trasnlate(-50%, -50%)'
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
      <Button variant="action" onClick={() => getDataFromApi(inputRef.current)}>
        Zaloguj się
      </Button>
    </Wrapper>
  );
};

export default LoginContainer;
