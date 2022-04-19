import { FormEvent, RefObject, useRef } from 'react';
import { Grid, TextField, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import theme from '../../styles/theme';
import * as S from './styles';

import { useAuth } from '../../store/Auth';

export const LoginPage = () => {
  const emailInput = useRef(null) as RefObject<HTMLInputElement>;
  const passwordInput = useRef(null) as RefObject<HTMLInputElement>;

  const { signIn } = useAuth();
  const navigate = useNavigate();

  const handleLogin = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const email = emailInput?.current?.value;
    const password = passwordInput?.current?.value;

    if (!email || !password) {
      return;
    }

    await signIn({ email, password });
    navigate('/');
  };

  return (
    <Grid container sx={{ minHeight: '100vh' }}>
      <Grid item xs={6} />

      <Grid item xs={6} sx={{ background: theme.palette.background.default }}>
        <S.Form onSubmit={handleLogin}>
          <Typography variant="h1" sx={{ marginBottom: '2rem' }}>
            Fazer login
          </Typography>

          <TextField
            label="E-mail"
            type="email"
            sx={{ background: '#fff' }}
            margin="dense"
            inputRef={emailInput}
          />

          <TextField
            label="Senha"
            type="password"
            sx={{ background: '#fff' }}
            margin="dense"
            inputRef={passwordInput}
          />

          <Button
            type="submit"
            variant="contained"
            size="large"
            sx={{ marginTop: '1rem' }}
          >
            Entrar
          </Button>
        </S.Form>
      </Grid>
    </Grid>
  );
};
