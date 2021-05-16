/* eslint-disable react/jsx-pascal-case */
/** @jsxImportSource theme-ui */
import React, { useEffect } from 'react';
import {
  currentUserIdAtom,
  currentUserDataAtom,
  userTodosListAtom
} from '../../recoilStore/atoms';
import { useRecoilState } from 'recoil';
import { Flex} from '@theme-ui/components';
import { Themed } from '@theme-ui/mdx';
import TaskSummary from '../../components/TaskSummary/TaskSummary';
import SearchTask from '../../components/SearchTask/SearchTask';
import AddTask from '../../components/AddTask/AddTask';
import ActiveTasks from '../../components/ActiveTasks/ActiveTasks';
import InactiveTasks from '../../components/InactiveTasks/InactiveTasks';

type UserTaskManagerProps = {};

const UserTaskManager: React.FC<UserTaskManagerProps> = () => {
  const [userTodos, setUserTodos] = useRecoilState(userTodosListAtom);
  const [currentUserId] = useRecoilState(currentUserIdAtom);
  const [, setCurrentUserData] =
    useRecoilState(currentUserDataAtom);

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

  return (
    <>
      <Flex
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-evenly',
          alignItems: 'center'
        }}
      >
        <AddTask getActualUserTodos={getActualUserTodos} />
        <TaskSummary />
        <SearchTask />

        <Themed.h2>Twoja Lista zadań: </Themed.h2>
        <ActiveTasks
          getActualUserTodos={getActualUserTodos}
          userTodos={userTodos}
          currentUserId={currentUserId}
        />
        <InactiveTasks
          getActualUserTodos={getActualUserTodos}
          userTodos={userTodos}
          currentUserId={currentUserId}
        />
      </Flex>
    </>
  );
};

export default UserTaskManager;
