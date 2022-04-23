import { Button, Card, Typography } from '@mui/material';

import { RouterLink } from '../Link';

type DashboardCardItemProps = {
  title: string;
  description: string;
  routePath: string;
};

export const DashboardCardItem = ({
  title,
  description,
  routePath,
}: DashboardCardItemProps) => (
  <Card sx={{ padding: '1rem' }}>
    <Typography variant="h2">{title}</Typography>
    <Typography variant="subtitle1">{description}</Typography>

    <Button sx={{ marginTop: '1rem' }} variant="contained">
      <RouterLink to={routePath}>Acessar</RouterLink>
    </Button>
  </Card>
);
