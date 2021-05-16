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
        alignItems: 'center'
      }}
    >
      <Themed.h2>Zakończone zadania: </Themed.h2>
      {userTodos.map((list) => {
        if (!list.completed) {
          return null;
        }
        return (
          <Flex
            my={3}
            sx={{
              flexDirection: 'column',
              flexWrap: 'wrap',
              justifyContent: 'center',
              alignItems: 'center',
              width: '90%',
              borderRadius: '10px',
              boxShadow: `
  0 -2.4px 3.3px -3px rgba(0, 0, 0, 0.188),
  0 5.4px 11.2px -3px rgba(0, 0, 0, 0.216),
  0 26px 50px -3px rgba(0, 0, 0, 0.19)
`
            }}
            key={list.created_at}
          >
            <div
              sx={{
                padding: '25px',
                margin: '1em',
                maxWidth: '100%',
                overflowWrap: 'break-word',
                wordWrap: 'break-word',
                hyphens: 'auto'
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
