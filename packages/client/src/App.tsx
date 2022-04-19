import { ThemeProvider } from 'styled-components';

import { Routes } from './routes';

import GlobalStyles from './styles/global';
import theme from './styles/theme';

const App = () => (
  <ThemeProvider theme={theme}>
    <Routes />

    <GlobalStyles />
  </ThemeProvider>
);

export default App;
