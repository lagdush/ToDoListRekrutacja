/* eslint-disable react/jsx-pascal-case */
import { Themed } from '@theme-ui/mdx';
import React from 'react';
import { useSpring } from 'react-spring';
import { Button } from 'theme-ui';
import { DataFromApi } from '../../models/dataFromApi';
import ModalContainer from '../ModalContainer/ModalContainer';

type TaskModalProps = {
  rawContent: DataFromApi[];
  handleClose?: any;
};

const TaskModal: React.FC<TaskModalProps> = ({ rawContent, handleClose }) => {
  const modalStyle = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    config: { duration: 300 }
  });
  return (
    <ModalContainer modalStyle={modalStyle}>
      {rawContent.length === 0 ? (
        <Themed.h1>Brak zadań pasujących do wyszukiwania</Themed.h1>
      ) : (
        <>
          <Themed.h1>Znalezione zadania pasujące do wyszukiwania</Themed.h1>
          {rawContent.map((task, id) => (
            <Themed.h2 key={task.created_at}>
              Zadanie {id + 1}: {task.title}
            </Themed.h2>
          ))}
        </>
      )}
      <Button onClick={handleClose}>Zamknij</Button>
    </ModalContainer>
  );
};

export default TaskModal;
