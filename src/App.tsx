import React from 'react';
import './App.css';

import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";

/* material-ui */
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import SimpleBottomNavigation from './common/SimpleBottomNavigation';
import Home from './home/Home';
import Receiver from './receiver/Receiver';
import Sender from './sender/Sender';

function App() {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

  const theme = React.useMemo(
    () =>
      createMuiTheme({
        palette: {
          type: prefersDarkMode ? 'dark' : 'light',
        },
      }),
    [prefersDarkMode],
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      <BrowserRouter>
        <Switch>
          <Route path="/send">
            <Sender />
          </Route>
          <Route path="/receive">
            <Receiver />
          </Route>
          <Route>
            <Home />
          </Route>
        </Switch>
        <SimpleBottomNavigation />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
