/* eslint-disable react/jsx-pascal-case */
/** @jsxImportSource theme-ui */
import React, { useRef, useEffect } from 'react';
import {
  currentUserIdAtom,
  currentUserDataAtom,
  userTodosListAtom
} from '../../recoilStore/atoms';
import { useRecoilState } from 'recoil';
import { Button, Flex } from '@theme-ui/components';
import { Themed } from '@theme-ui/mdx';
import InputComponent from '../InputComponent/InputComponent';

type AddNewTaskProps = {};

const AddNewTask: React.FC<AddNewTaskProps> = () => {
  const taskTitle = useRef({ title: '', completed: false });

  const [userTodos, setUserTodos] = useRecoilState(userTodosListAtom);

  const [currentUserId] = useRecoilState(currentUserIdAtom);

  const [, setCurrentUserData] = useRecoilState(currentUserDataAtom);

  const getActualUserTodos = async (userId: string | undefined) => {
    try {
      if (!userId) {
        return;
      }
      const rawDataFromApi = await fetch(
        `https://gorest.co.in//public-api/users/${userId}/todos`
      );
      const dataFromApi = await rawDataFromApi.json();
      const userTodoList = dataFromApi.data;
      setUserTodos([...userTodoList]);
    } catch (error) {
      console.log(error);
    }
  };

  const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    taskTitle.current.title = e.target.value;
  };

  const sendNewTask = async (
    userId: string | undefined,
    payload: { title: string } | undefined
  ) => {
    try {
      if (!userId) {
        return;
      }
      const rawDataFromApi = await fetch(
        `https://gorest.co.in/public-api/users/${userId}/todos`,
        {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization:
              'Bearer ' +
              'aa8db0033f95a11b46894138676127a04929eb22c0d89465684c124d1194ea6e'
          },
          body: JSON.stringify(payload)
        }
      );
      const dataFromApi = await rawDataFromApi.json();
      console.log(dataFromApi);
      getActualUserTodos(currentUserId);
    } catch (error) {
      console.log(error);
    }
  };

  const setTaskToComplete = async (todo_id: number) => {
    try {
      const rawDataFromApi = await fetch(
        `https://gorest.co.in/public-api/todos/${todo_id}`,
        {
          method: 'PATCH',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization:
              'Bearer ' +
              'aa8db0033f95a11b46894138676127a04929eb22c0d89465684c124d1194ea6e'
          },
          body: JSON.stringify({
            completed: true
          })
        }
      );
      getActualUserTodos(currentUserId);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const getUserDataFromApi = async (userId: string | undefined) => {
      try {
        if (!userId) {
          return;
        }
        const rawDataFromApi = await fetch(
          `https://gorest.co.in/public-api/users/${userId}`
        );
        const dataFromApi = await rawDataFromApi.json();
        const userData = dataFromApi.data;
        setCurrentUserData(userData);
      } catch (error) {
        console.log(error);
      }
    };
    getUserDataFromApi(currentUserId);
  }, [currentUserId, setCurrentUserData]);

  return (
    <>
      <Themed.h1 sx={{ textAlign: 'center' }}>Twoja Lista zadań: </Themed.h1>
      <Flex
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-evenly',
          alignItems: 'center'
        }}
      >
        {/* oddzielny komponent */}
        {userTodos.map((list) => {
          if (list.completed) {
            return null;
          }
          return (
            <div key={list.created_at}>
              <p
                sx={{
                  minHeight: '10vh',
                  width: '30vw',
                  border: '1px solid black',
                  padding: '16px',
                  marginTop: '2rem'
                }}
              >
                Zadanie: <b>{list.title}</b>
              </p>
              <Button onClick={() => setTaskToComplete(list.id)}>
                Usuń Zadanie
              </Button>
            </div>
          );
        })}

        <InputComponent
          apiRequest={sendNewTask}
          inputHandler={inputHandler}
          currentUserId={currentUserId}
          label="Tytuł Zadania"
          buttonText="Dodaj zadanie"
          payload={taskTitle.current}
        />
      </Flex>
    </>
  );
};

export default AddNewTask;
