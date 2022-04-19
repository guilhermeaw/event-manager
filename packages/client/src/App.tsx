import { QueryClient, QueryClientProvider } from 'react-query';
import { ThemeProvider } from 'styled-components';

import { Routes } from './routes';
import { AuthProvider } from './store/Auth';

import GlobalStyles from './styles/global';
import theme from './styles/theme';

const App = () => (
  <ThemeProvider theme={theme}>
    <QueryClientProvider client={new QueryClient()}>
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </QueryClientProvider>

    <GlobalStyles />
  </ThemeProvider>
);

export default App;
