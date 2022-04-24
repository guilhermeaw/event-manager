<<<<<<< HEAD
import { Button, Container, Typography, Menu, MenuItem } from '@mui/material';
=======
import { Button, Container, Stack, Typography } from '@mui/material';
>>>>>>> 35e4fb875dd9638ddbb64ebc451892d6c346df99
import { useNavigate } from 'react-router-dom';
import * as React from 'react';

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

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  let dashboard;
  if (user.role == 'admin') {
    dashboard = <><MenuItem onClick={handleClose}>Validade Certificate</MenuItem>
                  <MenuItem onClick={handleClose}>Dashboard</MenuItem></>;
  } else {
    dashboard = <><MenuItem onClick={handleClose}>Validade Certificate</MenuItem></>;
  }

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

        <Button
          id="basic-button"
          variant="contained"
          aria-controls={open ? 'basic-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClick}
        >
          Dashboard
        </Button>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            'aria-labelledby': 'basic-button',
          }}
        >
          {dashboard}
        </Menu>

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
