import { Grid } from '@mui/material';

import { Header } from '../../components/Header';
import { MainContainer } from '../../components/MainContainer';
import { DashboardCardItem } from '../../components/DashboardCardItem';

export const DashboardPage = () => {
  return (
    <>
      <Header />

      <MainContainer>
        <Grid container spacing={3}>
          <Grid item xs={6}>
            <DashboardCardItem
              title="Check-in do evento"
              description="Realizar a confirmação do comparecimento do usuário no evento"
              routePath="/events/check-in"
            />
          </Grid>

          <Grid item xs={6}>
            <DashboardCardItem
              title="Inscrição rápida"
              description="Realizar a inscrição rápida de um novo usuário no evento"
              routePath="/events/fast-registration"
            />
          </Grid>
        </Grid>
      </MainContainer>
    </>
  );
};
