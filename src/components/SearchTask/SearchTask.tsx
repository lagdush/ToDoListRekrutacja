import React, { useRef, useState } from 'react';
import { useRecoilState } from 'recoil';
import { Label, Input, Button } from 'theme-ui';
import useModal from '../../hooks/useModal';
import { DataFromApi } from '../../models/dataFromApi';
import { userTodosListAtom } from '../../recoilStore/atoms';
import TaskModal from '../TaskModal/TaskModal';

type SearchTaskProps = {};

const SearchTask: React.FC<SearchTaskProps> = () => {
  const [userTodos] = useRecoilState(userTodosListAtom);
  const taskToFind = useRef('');
  const { isOpen, handleCloseModal, handleOpenModal } = useModal();
  const [modalContent, setModalContent] = useState<DataFromApi[]>();

  const findTask = (title: string) => {
    const searchTask = userTodos.filter(
      (todo) => todo.title.toLowerCase() === title.toLowerCase()
    );
    setModalContent(searchTask);
    handleOpenModal()
  };

  
  const searchedTaskTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    taskToFind.current = e.target.value;
  };

  return (
    <>
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
        Znajdź zadanie
        <Input
          m={3}
          sx={{
            textAlign: 'center',
            color: 'primary',
            backgroundColor: 'muted',
            padding: '10px 15px',
            maxWidth: '30vw'
          }}
          onChange={searchedTaskTitle}
        />
      </Label>
      <Button variant="action" onClick={() => findTask(taskToFind.current)}>
        Szukaj
      </Button>
      {isOpen ? (
        <TaskModal
          rawContent={modalContent!}
          handleClose={handleCloseModal}
        />
      ) : null}
    </>
  );
};

export default SearchTask;
