import { Button, Container, Typography } from '@mui/material';

import { RouterLink } from '../../components/Link';
import { useAuth } from '../../store/Auth';

import * as S from './styles';

export const HomePage = () => {
  const { user } = useAuth();

  return (
    <>
      <S.Header>
        <Container maxWidth="xl">
          <Typography variant="h1" fontSize="1.5rem">
            Event Manager
          </Typography>
        </Container>
      </S.Header>
      <Container
        maxWidth="xl"
        sx={({ palette }) => ({
          backgroundColor: palette.background.default,
          minHeight: 'calc(100vh - 4rem)',
        })}
      >
        <Typography variant="h2">
          Aqui você encontra os melhores eventos
        </Typography>

        <Typography variant="subtitle1">
          Busque os eventos na sua região e encontre o evento ideal para você
        </Typography>

        <Button variant="contained">
          <RouterLink to={user ? '/events' : '/login'}>
            Ir para o login
          </RouterLink>
        </Button>
      </Container>
    </>
  );
};
