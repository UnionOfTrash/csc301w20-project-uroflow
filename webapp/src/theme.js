import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#86e6ff',
      main: '#4eb4da',
      dark: '#0084a8',
      contrastText: '#000000',
    },
    secondary: {
      light: '#6295df',
      main: '#2768ad',
      dark: '#003e7d',
      contrastText: '#ffffff',
    },
  },
});

export default theme;
