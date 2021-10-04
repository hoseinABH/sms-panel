// providers
import { NavigationDrawerProvider } from 'providers/NavigationDrawerProvider';
import { makeStyles, ThemeProvider } from '@material-ui/core/styles';
import { StylesProvider } from 'providers/StylesProvider';
import { UserProvider } from 'providers/UserProvider';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import { SnackbarProvider } from 'notistack';
import { QueryClient, QueryClientProvider } from 'react-query';

import jMoment from 'moment-jalaali';
import JalaliUtils from '@date-io/jalaali';

// react-router-dom
import { BrowserRouter as Router } from 'react-router-dom';

// components
import CssBaseline from '@material-ui/core/CssBaseline';
import Routes from './Routes';

// themes
import theme from 'themes';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    height: '100%',
  },
}));

jMoment.loadPersian({ dialect: 'persian-modern', usePersianDigits: true });

function App() {
  const classes = useStyles();

  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <UserProvider>
        <ThemeProvider theme={theme}>
          <StylesProvider>
            <MuiPickersUtilsProvider utils={JalaliUtils} locale="fa">
              <SnackbarProvider
                maxSnack={3}
                style={{ fontFamily: 'IRANYekanWeb, Poppins, sans-serif', direction: 'rtl' }}
                autoHideDuration={2000}
              >
                <NavigationDrawerProvider>
                  <CssBaseline />
                  <Router>
                    <div dir="rtl" className={classes.root}>
                      <Routes />
                      {/* landing for dialog, modal and other components that need context and be out of tree */}
                      <div id="portal"></div>
                    </div>
                  </Router>
                </NavigationDrawerProvider>
              </SnackbarProvider>
            </MuiPickersUtilsProvider>
          </StylesProvider>
        </ThemeProvider>
      </UserProvider>
    </QueryClientProvider>
  );
}

export default App;
