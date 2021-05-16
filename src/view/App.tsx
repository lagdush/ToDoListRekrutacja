
import { ThemeProvider } from 'theme-ui';
import theme from '../theme/toDoAppTheme';
import Navigation from '../components/Navigation/Navigation';
import { Route, Switch } from 'react-router-dom';
import UserTaskManager from './UserTaskManager/UserTaskManager';
import LoginPage from '../components/LoginPage/HomePage';
import TaskSummary from '../components/TaskSummary/TaskSummary';

function App() {
  return (
    // @ts-ignore
    <ThemeProvider theme={theme}>
      <Switch>
        <Route path="/" exact>
          <LoginPage />
        </Route>
        <Navigation>
          <Route path="/homepage">
            <UserTaskManager />
          </Route>
          <Route path="/task-summary">
            <TaskSummary />
          </Route>
        </Navigation>
      </Switch>
    </ThemeProvider>
  );
}

export default App;
