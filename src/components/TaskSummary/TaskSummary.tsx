/* eslint-disable react/jsx-pascal-case */
/** @jsxImportSource theme-ui */
import { Flex } from '@theme-ui/components';
import React from 'react';
import { useRecoilState } from 'recoil';
import { userTodosListAtom } from '../../recoilStore/atoms';
import { ReactComponent as WorkTask } from '../../assets/summary/Saly-19Work.svg';
import { ReactComponent as Rest } from '../../assets/summary/Saly-10Work.svg';
import { Themed } from 'theme-ui';
type TaskSummaryProps = {};

const TaskSummary: React.FC<TaskSummaryProps> = () => {
  const [userTodos] = useRecoilState(userTodosListAtom);
  const completedTasks = userTodos.filter((todo) => todo.completed === true);
  const activeTasks = userTodos.filter((todo) => todo.completed === false);
  return (
    <Flex
      sx={{
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <Themed.h2>Twoje Zadania</Themed.h2>
      <p>Do tej pory wykonałeś {completedTasks.length} zadania.</p>
      {activeTasks.length === 0 ? (
        <>
          <p sx={{ textAlign: 'justify' }}>
            Możesz odpocząć, nie masz żadnych pilnych zadań do wykonania.
          </p>
          <Rest
            sx={{
              height: '50vh',
              width: 'auto'
            }}
          />
        </>
      ) : (
        <Flex
          sx={{
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <p sx={{ textAlign: 'justify' }}>
            Aktualnie masz {activeTasks.length} aktywnych zadań do wykonania.
          </p>
          <WorkTask
            sx={{
              height: '50vh',
              width: 'auto'
            }}
          />
        </Flex>
      )}
    </Flex>
  );
};

export default TaskSummary;
