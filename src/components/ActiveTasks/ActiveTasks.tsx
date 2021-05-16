/* eslint-disable react/jsx-pascal-case */
/** @jsxImportSource theme-ui */
import React from 'react';
import { Themed, Button } from 'theme-ui';
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
    <>
      <Themed.h2>Aktywne zadania: </Themed.h2>
      {userTodos.map((list) => {
        if (list.completed) {
          return null;
        }
        return (
          <div key={list.created_at}>
            <div
              sx={{
                minHeight: '10vh',
                width: '30vw',
                border: '1px solid black',
                padding: '16px',
                marginTop: '2rem'
              }}
            >
              <p>Zadanie: {list.title}</p>
            </div>
            <Button m={3} onClick={() => setTaskToComplete(list.id)}>
              Zakończ zadanie
            </Button>
          </div>
        );
      })}
    </>
  );
};

export default ActiveTasks;
