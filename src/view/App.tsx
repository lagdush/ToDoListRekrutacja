import React from 'react';
import { ThemeProvider } from 'theme-ui';
import theme from '../theme/toDoAppTheme';
import Navigation from '../components/Navigation/Navigation';
import { Route, Switch } from 'react-router-dom';
import HomePage from '../components/HomePage/HomePage';
import LogedUserHomePage from '../components/LogedUserHomePage/LogedUserHomePage';
import UserTaskManager from './UserTaskManager/UserTaskManager';

function App() {
  return (
    // @ts-ignore
    <ThemeProvider theme={theme}>
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Navigation>
          <Route path="/homepage" exact>
            <LogedUserHomePage />
          </Route>
          <Route path="/new-task" exact>
            <UserTaskManager />
          </Route>
        </Navigation>
      </Switch>
    </ThemeProvider>
  );
}

export default App;
