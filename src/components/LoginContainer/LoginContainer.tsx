/** @jsxImportSource theme-ui */

import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { Spinner } from '@theme-ui/components';
import { userTodosListAtom, currentUserIdAtom } from '../../recoilStore/atoms';
import InputComponent from '../InputComponent/InputComponent';

const LoginContainer: React.FC = () => {
  const [, setUserTodos] = useRecoilState(userTodosListAtom);
  const [currentUserId, setCurrentUserId] = useRecoilState(currentUserIdAtom);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const history = useHistory();

  const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentUserId(e.target.value);
  };

  const getDataFromApi = async (inputData: string | undefined) => {
    try {
      if (!inputData) {
        return;
      }
      setLoading(true);
      const rawDataFromApi = await fetch(
        `https://gorest.co.in//public-api/users/${inputData}/todos`
      );

      const dataFromApi = await rawDataFromApi.json();
      const userTodoList = dataFromApi.data;
      setUserTodos([...userTodoList]);
      setLoading(false);
      history.push('/homepage');
    } catch (error) {
      setError(true);
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
  ) : !error ? (
    <InputComponent
      apiRequest={getDataFromApi}
      inputHandler={inputHandler}
      currentUserId={currentUserId}
      label="Podaj swoje ID"
    />
  ) : (
    <div>PROBLEM</div>
  );
};

export default LoginContainer;
