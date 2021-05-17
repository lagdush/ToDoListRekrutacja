/* eslint-disable react/jsx-pascal-case */
/** @jsxImportSource theme-ui */
import React from 'react';
import { Themed, Button, Flex } from 'theme-ui';
import { DataFromApi } from '../../models/dataFromApi';

type ActiveTasksProps = {
  getActualUserTodos: (userId: string | undefined) => Promise<void>;
  userTodos: DataFromApi[];
  currentUserId: string;
};

const ActiveTasks: React.FC<ActiveTasksProps> = ({
  getActualUserTodos,
  userTodos,
  currentUserId
}) => {
  const setTaskToComplete = async (todo_id: number) => {
    try {
      await fetch(`https://gorest.co.in/public-api/todos/${todo_id}`, {
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
        justifyContent: 'center',
        alignItems: 'center',
        borderBottom: '5px solid #fc4a1a',
        minHeight: '30vh'
      }}
    >
      <Themed.h2>Aktywne zadania: </Themed.h2>
      {userTodos.map((list) => {
        if (list.completed) {
          return null;
        }
        return (
          <Flex
            my={3}
            sx={{
              display: 'flex',
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
              <p>
                <strong>Zadanie: </strong>
                {list.title}
              </p>
            </div>
            <Button m={'1em'} p={2} onClick={() => setTaskToComplete(list.id)}>
              Zakończ zadanie
            </Button>
          </Flex>
        );
      })}
    </Flex>
  );
};

export default ActiveTasks;
