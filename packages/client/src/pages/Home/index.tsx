import { Button, Typography } from '@mui/material';
import { Header } from '../../components/Header';

import { RouterLink } from '../../components/Link';
import { MainContainer } from '../../components/MainContainer';
import { useAuth } from '../../store/Auth';

export const HomePage = () => {
  const { user } = useAuth();

  return (
    <>
      <Header />

      <MainContainer>
        <Typography variant="h2">
          Aqui você encontra os melhores eventos
        </Typography>

        <Typography variant="subtitle1">
          Busque os eventos na sua região e encontre o evento ideal para você
        </Typography>

        <Button variant="contained">
          <RouterLink to={user ? '/events' : '/login'}>
            Descobrir eventos
          </RouterLink>
        </Button>
      </MainContainer>
    </>
  );
};
