import React from 'react';
import { ThemeProvider } from 'theme-ui';
import theme from '../theme/toDoAppTheme';
import Navigation from '../components/Navigation/Navigation';
import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    // @ts-ignore
    <ThemeProvider theme={theme}>
      <Navigation>
        <Switch>
          <Route path="/homepage" exact>
            <p>STRONA DOMOWA Z LOGOWANIEM</p>
          </Route>
          <Route path="/" exact>
            <p>Dom</p>
          </Route>
          <Route path="/new-task" exact>
            <p>Nowe zadanie</p>
          </Route>
          <Route path="/task-list" exact>
            <p>Lista zadań</p>
          </Route>
          <Route path="/task-summary" exact>
            <p>Statystyki</p>
          </Route>
        </Switch>
      </Navigation>
    </ThemeProvider>
  );
}

export default App;
