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
      <p>Do tej pory wykonałeś {completedTasks.length} zadania.</p>
      {activeTasks.length === 0 ? (
        <p>Możesz odpocząć, nie masz żadnych pilnych zadań do wykonania.</p>
      ) : (
        <p>Aktualnie masz {activeTasks.length} aktywnych zadań do wykonania.</p>
      )}
    </Flex>
  );
};

export default TaskSummary;
