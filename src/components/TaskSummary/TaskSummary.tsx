/* eslint-disable react/jsx-pascal-case */
/** @jsxImportSource theme-ui */
import { Flex } from '@theme-ui/components';
import React from 'react';
import { useRecoilState } from 'recoil';
import { userTodosListAtom } from '../../recoilStore/atoms';
import { ReactComponent as WorkTask } from '../../assets/summary/Business, Technology, startup _ account, preferences, user, profile, settings, woman, graph, analysistask.svg';
import { ReactComponent as Rest } from '../../assets/summary/leisure, sport _ meditation, meditate, relax, relaxation, yoga, man, happy, relaxednoTask.svg';
import { Themed } from 'theme-ui';


const TaskSummary: React.FC = () => {
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
          <p sx={{ textAlign: 'justify', marginBottom: '20px' }}>
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
          <p sx={{ textAlign: 'justify', marginBottom: '20px' }}>
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
