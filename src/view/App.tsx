import React from 'react';
import { ThemeProvider } from 'theme-ui';
import theme from '../theme/toDoAppTheme';
import Navigation from '../components/Navigation/Navigation';


function App() {
  return (
    // @ts-ignore
    <ThemeProvider theme={theme}>
      <Navigation>
        <div>jakiś tekst</div>
      </Navigation>
    </ThemeProvider>
  );
}

export default App;
