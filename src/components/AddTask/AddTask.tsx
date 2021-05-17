/* eslint-disable react/jsx-pascal-case */
/** @jsxImportSource theme-ui */
import React, { useRef, useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { Box, Button, Flex, Input, Label, Themed } from 'theme-ui';
import {
  currentUserDataAtom,
  currentUserIdAtom
} from '../../recoilStore/atoms';

type AddTaskProps = {
  getActualUserTodos: (userId: string | undefined) => Promise<void>;
};

const AddTask: React.FC<AddTaskProps> = ({ getActualUserTodos }) => {
  const taskTitle = useRef({ title: '', completed: false });
  const focus = useRef<HTMLInputElement>(null);
  const [currentUserData] = useRecoilState(currentUserDataAtom);
  const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    taskTitle.current.title = e.target.value.toUpperCase();
  };
  const [currentUserId] = useRecoilState(currentUserIdAtom);

  useEffect(() => {
    focus!.current!.focus();
  }, []);

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
    <Flex
      my={3}
      sx={{
        justifyContent: 'center',
        alignItems: 'center',
        boxShadow: `
  0 -2.4px 3.3px -3px rgba(0, 0, 0, 0.188),
  0 5.4px 11.2px -3px rgba(0, 0, 0, 0.216),
  0 26px 50px -3px rgba(0, 0, 0, 0.19)
`,
        '@media screen and (max-width: 768px) and (orientation: portrait)': {
          boxShadow: 'none'
        }
      }}
    >
      <Box
        sx={{
          maxWidth: 768,
          mx: 'auto',
          px: 3,
          py: 4,
          '@media screen and (max-width: 768px) and (orientation: portrait)': {
            padding: '20px'
          }
        }}
      >
        <Themed.h1>{`Witaj ${currentUserData.name}`}</Themed.h1>
        <Flex
          sx={{
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
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
              ref={focus}
              m={3}
              sx={{
                textAlign: 'center',
                color: 'primary',
                backgroundColor: 'muted',
                padding: '10px 15px',
                // maxWidth: '30vw',
                '@media screen and (max-width: 768px) and (orientation: portrait)':
                  {
                    width: '100%',
                    boxShadow: 'none'
                  }
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
