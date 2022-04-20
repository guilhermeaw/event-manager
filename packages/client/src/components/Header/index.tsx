import { Button, Container, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import { useAuth } from '../../store/Auth';

import * as S from './styles';

export const Header = () => {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    signOut();
    navigate('/login');
  };

  return (
    <S.Header>
      <Container
        maxWidth="xl"
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          height: '100%',
        }}
      >
        <Typography variant="h1" fontSize="1.5rem">
          Event Manager
        </Typography>

        {user && (
          <Button variant="contained" onClick={handleLogout}>
            Logout
          </Button>
        )}
      </Container>
    </S.Header>
  );
};
