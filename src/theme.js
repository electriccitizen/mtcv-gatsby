import { createMuiTheme } from '@material-ui/core/styles';

// A custom theme for this app
const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#757575',
      main: '#616161',
      dark: '#424242',
      contrastText: '#000',
    },
    secondary: {
      light: '#fff263',
      main: '#fbc02d',
      dark: '#c49000',
      contrastText: '#000',
    },
    error: {
      main: '#B71C1C',
    }
  },
  custom: {
    color: '#fff',
  },
  headline: {
    fontWeight: 900,
    fontSize: 48,
    width: '50%',
    marginRight: 'auto',
    marginLeft: 'auto',
    marginBottom: '1.2em',
  },
  subtitle: {
    fontSize: 24,
    width: '60%',
    marginRight: 'auto',
    marginLeft: 'auto',
  },
  container: {
    marginBottom: '6em',
  }

});

export default theme;
