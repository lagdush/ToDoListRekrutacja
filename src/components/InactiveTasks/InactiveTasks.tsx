/* eslint-disable react/jsx-pascal-case */
/** @jsxImportSource theme-ui */

import React from 'react';
import { Themed, Button, Flex } from 'theme-ui';
import { DataFromApi } from '../../models/dataFromApi';

type InactiveTasksProps = {
  getActualUserTodos: (userId: string | undefined) => Promise<void>;
  userTodos: DataFromApi[];
  currentUserId: string;
};

const InactiveTasks: React.FC<InactiveTasksProps> = ({
  getActualUserTodos,
  userTodos,
  currentUserId
}) => {
  const deleteTask = async (todo_id: number) => {
    try {
      await fetch(`https://gorest.co.in/public-api/todos/${todo_id}`, {
        method: 'DELETE',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization:
            'Bearer ' +
            'aa8db0033f95a11b46894138676127a04929eb22c0d89465684c124d1194ea6e'
        }
      });
      getActualUserTodos(currentUserId);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Flex
      mt={3}
      mb={3}
      sx={{
        flexDirection: 'column',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        alignItems: 'center',
      }}
    >
      <Themed.h2>Zakończone zadania: </Themed.h2>
      {userTodos.map((list) => {
        if (!list.completed) {
          return null;
        }
        return (
          <Flex
            sx={{
              flexDirection: 'column',
              flexWrap: 'wrap',
              justifyContent: 'center',
              alignItems: 'center'
            }}
            key={list.created_at}
          >
            <div
              sx={{
                padding: '16px',
                marginTop: '2rem'
              }}
            >
              <p> Zadanie: {list.title}</p>
            </div>

            <Button m={3} onClick={() => deleteTask(list.id)}>
              Usuń Zadanie
            </Button>
          </Flex>
        );
      })}
    </Flex>
  );
};

export default InactiveTasks;
