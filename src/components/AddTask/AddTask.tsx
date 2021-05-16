/* eslint-disable react/jsx-pascal-case */
/** @jsxImportSource theme-ui */
import React, { useRef } from 'react';
import { useRecoilState } from 'recoil';
import { Box, Button, Flex, Input, Label, Themed } from 'theme-ui';
import {
  currentUserDataAtom,
  currentUserIdAtom
} from '../../recoilStore/atoms';
import InputComponent from '../InputComponent/InputComponent';

type AddTaskProps = {
  getActualUserTodos: (userId: string | undefined) => Promise<void>;
};

const AddTask: React.FC<AddTaskProps> = ({ getActualUserTodos }) => {
  const taskTitle = useRef({ title: '', completed: false });
  const [currentUserData] = useRecoilState(currentUserDataAtom);
  const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    taskTitle.current.title = e.target.value.toUpperCase();
  };
  const [currentUserId] = useRecoilState(currentUserIdAtom);

  const sendNewTask = async (
    userId: string | undefined,
    payload: { title: string } | undefined
  ) => {
    try {
      if (!userId) {
        return;
      }
      await fetch(`https://gorest.co.in/public-api/users/${userId}/todos`, {
        method: 'POST',
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

  return (
    <Flex sx={{ justifyContent: 'center', alignItems: 'center' }}>
      <Box
        sx={{
          maxWidth: 768,
          mx: 'auto',
          px: 3,
          py: 4
        }}
      >
        <Themed.h1>{`Witaj ${currentUserData.name}`}</Themed.h1>
        <Flex
          sx={{
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems:'center',
            maxWidth: 768,
            mx: 'auto',
            px: 3,
            py: 4
          }}
        >
          <Label
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              fontSize: '16px'
            }}
          >
            Tytuł Zadania
            <Input
              m={3}
              sx={{
                textAlign: 'center',
                color: 'primary',
                backgroundColor: 'muted',
                padding: '10px 15px'
              }}
              onChange={inputHandler}
            />
          </Label>
          <Button
            variant="action"
            onClick={() => sendNewTask(currentUserId, taskTitle.current)}
          >
            Dodaj zadanie
          </Button>
        </Flex>
      </Box>
    </Flex>
  );
};

export default AddTask;
