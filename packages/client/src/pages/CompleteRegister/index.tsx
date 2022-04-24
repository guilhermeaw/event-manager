import { FormEvent, RefObject, useRef } from 'react';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { Button, CircularProgress, Typography } from '@mui/material';

import { InputCPF } from '../../components/InputCPF';
import { InputEmail } from '../../components/InputEmail';
import { InputPassword } from '../../components/InputPassword';
import { InputUserName } from '../../components/InputUserName';
import { MainContainer } from '../../components/MainContainer';
import { useFindUserByToken } from '../../services/queries/useFindUserByToken';
import { useUserUpdate } from '../../services/mutations/useUpdateUser';

const CompleteRegisterPage = () => {
  const passwordInput = useRef(null) as RefObject<HTMLInputElement>;
  const cpfInput = useRef(null) as RefObject<HTMLInputElement>;

  const { token } = useParams();
  const { data: user, isLoading } = useFindUserByToken({ token });

  const { mutateAsync: updateUser } = useUserUpdate();
  const navigate = useNavigate();

  const handleSubmitCompleteRegister = async (
    event: FormEvent<HTMLFormElement>,
  ) => {
    event.preventDefault();

    const password = passwordInput?.current?.value;
    const cpf = cpfInput?.current?.value;

    if (!password || !cpf || !user) {
      return;
    }

    await updateUser({
      ...user,
      password,
      cpf,
    });
    navigate('/login');
  };

  if (isLoading) {
    return <CircularProgress />;
  }

  return (
    <MainContainer>
      {
        /* Verificar também o state do user (pre-created) */ user ? (
          <>
            <Typography variant="h2">Finalize seu cadastro</Typography>
            <Typography variant="subtitle1">
              Olá {user.name}, seja bem-vindo ao Event Manager. Continue seu
              cadastro para ficar por dentro de todos os eventos que estão
              ocorrendo.
            </Typography>

            <form
              onSubmit={handleSubmitCompleteRegister}
              style={{ marginTop: '1rem' }}
            >
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

              <Button
                type="submit"
                variant="contained"
                sx={{ marginTop: '0.5rem' }}
              >
                Finalizar cadastro
              </Button>
            </form>
          </>
        ) : (
          <Navigate to="/login" />
        )
      }
    </MainContainer>
  );
};

export default CompleteRegisterPage;
