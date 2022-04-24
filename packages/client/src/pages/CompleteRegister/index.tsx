import { Button, Typography } from '@mui/material';
import { RefObject, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';

import { InputCPF } from '../../components/InputCPF';
import { InputEmail } from '../../components/InputEmail';
import { InputPassword } from '../../components/InputPassword';
import { InputUserName } from '../../components/InputUserName';
import { MainContainer } from '../../components/MainContainer';

const CompleteRegisterPage = () => {
  const passwordInput = useRef(null) as RefObject<HTMLInputElement>;
  const cpfInput = useRef(null) as RefObject<HTMLInputElement>;

  const { token } = useParams();

  useEffect(() => {
    // Busca se tem um usuário com o token
    // Se tiver, preenche os campos de name e e-mail. Se não, redireciona pro login
  }, []);

  const user = {
    name: 'Guilherme',
    email: 'guilherme.w@universo.univates.br',
  };

  return (
    <MainContainer>
      <Typography variant="h2">Finalize seu cadastro</Typography>
      <Typography variant="subtitle1">
        Olá {user.name}, seja bem-vindo ao Event Manager. Continue seu cadastro
        para ficar por dentro de todos os eventos que estão ocorrendo.
      </Typography>

      <form style={{ marginTop: '1rem' }}>
        <InputUserName
          value={user.name}
          variant="filled"
          disabled
          margin="dense"
        />
        <InputEmail
          value={user.email}
          variant="filled"
          disabled
          margin="dense"
        />

        <InputPassword margin="dense" inputRef={passwordInput} required />
        <InputCPF margin="dense" inputRef={cpfInput} required />

        <Button type="submit" variant="contained" sx={{ marginTop: '0.5rem' }}>
          Finalizar cadastro
        </Button>
      </form>
    </MainContainer>
  );
};

export default CompleteRegisterPage;
