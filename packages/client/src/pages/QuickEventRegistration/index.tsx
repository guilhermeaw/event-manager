import { ChangeEvent, FormEvent, RefObject, useRef, useState } from 'react';
import {
  Button,
  FormHelperText,
  Grid,
  MenuItem,
  TextField,
  Typography,
} from '@mui/material';

import { MainContainer } from '../../components/MainContainer';
import { InputEmail } from '../../components/InputEmail';

const EventQuickRegistrationPage = () => {
  const emailInput = useRef(null) as RefObject<HTMLInputElement>;
  const [event, setEvent] = useState('');

  const handleSubmitQuickEventRegistration = (
    event: FormEvent<HTMLFormElement>,
  ) => {
    event.preventDefault();
  };

  const handleSelectEvent = (
    event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
  ) => {
    setEvent(event.target.value as string);
  };

  return (
    <MainContainer>
      <Typography variant="h2">Inscrição rápida</Typography>
      <Typography variant="subtitle1">
        A funcionalidade de inscrição rápida é destinada para a inscrição de
        usuários não cadastrados no sistema, em um evento que esteja em
        andamento.
      </Typography>

      <form onSubmit={handleSubmitQuickEventRegistration}>
        <Grid container spacing={2} sx={{ marginTop: '0.5rem' }}>
          <Grid item xs={12}>
            <InputEmail inputRef={emailInput} required />
            <FormHelperText>
              Será criado um pré-cadastro do usuário e será enviado um link para
              o e-mail informado, para concluir posteriormente o cadastro no
              sistema
            </FormHelperText>
          </Grid>

          <Grid item xs={12}>
            <TextField
              select
              label="Evento"
              fullWidth
              size="small"
              value={event}
              onChange={handleSelectEvent}
              required
              sx={{ background: '#fff' }}
            >
              <MenuItem value="TDC Floripa">TDC Floripa</MenuItem>
              <MenuItem value="Show do Gustavo Lima">
                Show do Gustavo Lima
              </MenuItem>
            </TextField>

            <FormHelperText>
              Selecione o evento que o usuário deseja se inscrever.
            </FormHelperText>
          </Grid>

          <Grid item xs={12}>
            <Button type="submit" variant="contained">
              Confirmar inscrição
            </Button>
          </Grid>
        </Grid>
      </form>
    </MainContainer>
  );
};

export default EventQuickRegistrationPage;
