import { Button, Card, Grid, Typography } from '@mui/material';

import { Header } from '../../components/Header';
import { RouterLink } from '../../components/Link';
import { MainContainer } from '../../components/MainContainer';

export const DashboardPage = () => {
  return (
    <>
      <Header />

      <MainContainer>
        <Grid container spacing={3}>
          <Grid item xs={6}>
            <Card sx={{ padding: '1rem' }}>
              <Typography variant="h2">Check-in do evento</Typography>
              <Typography variant="subtitle1">
                Realizar a confirmação do comparecimento do usuário no evento
              </Typography>

              <Button sx={{ marginTop: '1rem' }} variant="contained">
                <RouterLink to="/events/check-in">Acessar</RouterLink>
              </Button>
            </Card>
          </Grid>

          <Grid item xs={6}>
            <Card sx={{ padding: '1rem' }}>
              <Typography variant="h2">Inscrição rápida</Typography>
              <Typography variant="subtitle1">
                Realizar a inscrição rápida de um novo usuário no evento
              </Typography>

              <Button sx={{ marginTop: '1rem' }} variant="contained">
                <RouterLink to="/events/fast-registration">Acessar</RouterLink>
              </Button>
            </Card>
          </Grid>
        </Grid>
      </MainContainer>
    </>
  );
};
