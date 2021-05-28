/* eslint-disable react/jsx-pascal-case */
/** @jsxImportSource theme-ui */
import React from 'react';
import { useRecoilState } from 'recoil';
import { Themed, Button, Flex } from 'theme-ui';
import useModal from '../../hooks/useModal';
import { DataFromApi } from '../../models/dataFromApi';
import { currentTODO } from '../../recoilStore/atoms';
import EditTodoModal from '../EditTodoModal/EditTodoModal';

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
  const [todo, setTodo] = useRecoilState(currentTODO);
  const { isOpen, handleCloseModal, handleOpenModal } = useModal();

  const updateTask = async (todo_id?: number, payload?: any) => {
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
        body: JSON.stringify(payload)
      });
      getActualUserTodos(currentUserId);
    } catch (error) {
      console.log(error);
    }
  };

  const getTask = async (todo_id: number) => {
    try {
      const rawData = await fetch(
        `https://gorest.co.in/public-api/todos/${todo_id}`
      );
      const { data } = await rawData.json();
      setTodo(data);
    } catch (error) {
      console.log(error);
    }
  };

  const editTask = (todo_id: number) => {
    getTask(todo_id);
    handleOpenModal();
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
            <Flex>
              <Button
                m={'1em'}
                p={2}
                onClick={() =>
                  updateTask(list.id, {
                    completed: true
                  })
                }
              >
                Zakończ zadanie
              </Button>
              <Button m={'1em'} p={2} onClick={() => editTask(list.id)}>
                Edytuj zadanie
              </Button>
            </Flex>
            {isOpen ? (
              <EditTodoModal
                updateTask={updateTask}
                rawContent={todo}
                handleClose={handleCloseModal}
              />
            ) : null}
          </Flex>
        );
      })}
    </Flex>
  );
};

export default ActiveTasks;
