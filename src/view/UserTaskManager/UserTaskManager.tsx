/* eslint-disable react/jsx-pascal-case */
/** @jsxImportSource theme-ui */
import React, { useEffect } from 'react';
import {
  currentUserIdAtom,
  currentUserDataAtom,
  userTodosListAtom
} from '../../recoilStore/atoms';
import { useRecoilState } from 'recoil';
import { Flex } from '@theme-ui/components';
import SearchTask from '../../components/SearchTask/SearchTask';
import AddTask from '../../components/AddTask/AddTask';
import ActiveTasks from '../../components/ActiveTasks/ActiveTasks';
import InactiveTasks from '../../components/InactiveTasks/InactiveTasks';
import { Box } from 'theme-ui';

type UserTaskManagerProps = {};

const UserTaskManager: React.FC<UserTaskManagerProps> = () => {
  const [userTodos, setUserTodos] = useRecoilState(userTodosListAtom);
  const [currentUserId] = useRecoilState(currentUserIdAtom);
  const [, setCurrentUserData] = useRecoilState(currentUserDataAtom);

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
    <Flex
      sx={{
        flexWrap: 'wrap-reverse',
        '@media screen and (max-width: 768px) and (orientation: portrait)': {
          justifyContent: 'center',
          alignItems: 'center'
        }
      }}
    >
      <Box
        bg="secondary"
        sx={{
          flexGrow: 1,
          flexBasis: '30%',
          borderRight: '5px solid #fc4a1a',
          minHeight: '100vh',
          '@media screen and (max-width: 768px) and (orientation: portrait)': {
            flexBasis: '60%',
            borderRight: 'none'
          },
          '@media screen and (max-width: 812px) and (orientation: landscape)': {
            flexBasis: '90%',
            borderRight: 'none'
          }
        }}
      >
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
      </Box>
      <Box
        sx={{
          p: 3,
          flexGrow: 2,
          flexBasis: 0,
          minWidth: 320
        }}
      >
        <SearchTask />
        <AddTask getActualUserTodos={getActualUserTodos} />
      </Box>
    </Flex>
  );
};

export default UserTaskManager;
