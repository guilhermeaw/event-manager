import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#F25D27',
    },
    secondary: {
      main: '#115D8C',
    },
    error: {
      main: '#DE3838',
    },
    success: {
      main: '#51B853',
    },
    background: {
      default: '#F5F8FA',
    },
  },
  typography: {
    fontFamily: 'Barlow, sans-serif',
    h1: {
      fontWeight: 600,
      fontSize: '3rem',
    },
    h2: {
      fontWeight: 600,
      fontSize: '2rem',
    },
    button: {
      textTransform: 'none',
    },
  },
});

export default theme;
