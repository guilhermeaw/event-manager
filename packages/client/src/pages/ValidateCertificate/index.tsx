import { FormEvent, RefObject, useRef } from 'react';
import { Button, TextField, Typography } from '@mui/material';

import { MainContainer } from '../../components/MainContainer';
import { useValidateCertificate } from '../../services/mutations/useValidateCertificate';

const ValidateCertificatePage = () => {
  const hashInput = useRef(null) as RefObject<HTMLInputElement>;

  const { mutateAsync: validateCertificate } = useValidateCertificate();

  const handleValidateCertificate = async (
    event: FormEvent<HTMLFormElement>,
  ) => {
    event.preventDefault();

    const hash = hashInput?.current?.value;

    if (!hash) {
      return;
    }

    await validateCertificate(hash);
  };

  return (
    <MainContainer>
      <Typography variant="h2">Validar certificado</Typography>
      <Typography variant="subtitle1">
        Insira o hash do certificado abaixo para validar se é um certificado
        válido
      </Typography>

      <form onSubmit={handleValidateCertificate} style={{ marginTop: '1rem' }}>
        <TextField
          label="Hash"
          sx={{ background: '#fff' }}
          fullWidth
          size="small"
          inputRef={hashInput}
          required
        />

        <Button type="submit" variant="contained" sx={{ marginTop: '0.5rem' }}>
          Validar certificado
        </Button>
      </form>
    </MainContainer>
  );
};

export default ValidateCertificatePage;
