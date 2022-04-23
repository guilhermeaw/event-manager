import { Button, Container, Stack, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import { useAuth } from '../../store/Auth';
import { UserOptionsButton } from './fragments/UserOptionsButton';

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
          <Stack direction="row" spacing={2}>
            <UserOptionsButton userRole={user.role} />

            <Button variant="contained" onClick={handleLogout}>
              Logout
            </Button>
          </Stack>
        )}
      </Container>
    </S.Header>
  );
};
