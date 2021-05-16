import { Flex } from '@theme-ui/components';
import React from 'react';
import { useRecoilState } from 'recoil';
import { userTodosListAtom } from '../../recoilStore/atoms';

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
      <h2>Twoje Zadania</h2>
      <p>Masz łącznie {userTodos.length} zadań</p>
      <p>Do tej pory wykonałeś {completedTasks.length} zadania</p>
      <p>Masz {activeTasks.length} zadań do wykonania</p>
    </Flex>
  );
};

export default TaskSummary;
