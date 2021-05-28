/* eslint-disable react/jsx-pascal-case */
/** @jsxImportSource theme-ui */
import React, { useRef } from 'react';
import moment from 'moment';
import { useSpring } from 'react-spring';
import { Themed, Button, Input, Label, Flex } from 'theme-ui';
import { CurrentTodo } from '../../models/dataFromApi';
import ModalContainer from '../ModalContainer/ModalContainer';

type EditTodoModalProps = {
  rawContent: CurrentTodo;
  updateTask: (todo_id: number, payload?: any) => Promise<void>;
  handleClose?: any;
};

type Payload = {
  title: string;
};

const EditTodoModal: React.FC<EditTodoModalProps> = ({
  handleClose,
  updateTask,
  rawContent
}) => {
  const data = moment(rawContent.created_at).format('DD/MM/YYYY, H:mm');
  const taskTitle = useRef('');
  const modalStyle = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    config: { duration: 300 }
  });

  const update = (payload: Payload) => {
    updateTask(rawContent.id, payload);
    handleClose();
  };

  const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    taskTitle.current = e.target.value;
  };

  return (
    <ModalContainer modalStyle={modalStyle}>
      <>
        <Themed.h2 sx={{ color: 'primary' }}>
          Aktualne Zadanie: {rawContent.title}
        </Themed.h2>
        <Label
          sx={{
            color: 'secondary',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: '14px',
            marginTop: '10px'
          }}
        >
          Uaktualnione zadanie
          <Input
            m={1}
            sx={{
              textAlign: 'center',
              color: 'primary',
              backgroundColor: 'muted',
              padding: '10px 15px'
            }}
            onChange={inputHandler}
          />
        </Label>
        <Themed.h3 sx={{ color: 'primary', marginTop: '20px' }}>
          Utworzone
        </Themed.h3>
        <Themed.p sx={{ color: 'secondary' }}>{data}</Themed.p>
        <Flex m={3}>
          <Button mx={2} onClick={handleClose}>
            Zamknij
          </Button>
          <Button mx={2} onClick={() => update({ title: taskTitle.current })}>
            Uaktualnij
          </Button>
        </Flex>
      </>
    </ModalContainer>
  );
};

export default EditTodoModal;
