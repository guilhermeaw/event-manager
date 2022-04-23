import { ChangeEvent, FormEvent, useState } from 'react';
import {
  Button,
  FormHelperText,
  Grid,
  MenuItem,
  Typography,
} from '@mui/material';

import { MainContainer } from '../../components/MainContainer';
import { SelectEvent } from '../../components/SelectEvent';
import { SelectUser } from '../../components/SelectUser';

const EventCheckinPage = () => {
  const [selectedUser, setSelectedUser] = useState('');
  const [selectedEvent, setElectedEvent] = useState('');

  const handleSubmitEventCheckin = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  const handleSelectUser = (
    event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
  ) => {
    setSelectedUser(event.target.value as string);
  };

  const handleSelectEvent = (
    event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
  ) => {
    setElectedEvent(event.target.value as string);
  };

  return (
    <MainContainer>
      <Typography variant="h2">Check-in do evento</Typography>
      <Typography variant="subtitle1">
        A funcionalidade de check-in é destinada para registrar a presença de um
        usuário em um evento.
      </Typography>

      <form onSubmit={handleSubmitEventCheckin}>
        <Grid container spacing={2} sx={{ marginTop: '0.5rem' }}>
          <Grid item xs={12}>
            <SelectUser
              value={selectedUser}
              onChange={handleSelectUser}
              required
            >
              <MenuItem value="Guilherme">Guilherme</MenuItem>
            </SelectUser>

            <FormHelperText>
              Selecione o usuário para registrar a presença.
            </FormHelperText>
          </Grid>

          <Grid item xs={12}>
            <SelectEvent
              value={selectedEvent}
              onChange={handleSelectEvent}
              required
            >
              <MenuItem value="TDC Floripa">TDC Floripa</MenuItem>
              <MenuItem value="Show do Gustavo Lima">
                Show do Gustavo Lima
              </MenuItem>
            </SelectEvent>

            <FormHelperText>
              Selecione o evento que deseja registrar a presença.
            </FormHelperText>
          </Grid>

          <Grid item xs={12}>
            <Button type="submit" variant="contained">
              Registrar presença
            </Button>
          </Grid>
        </Grid>
      </form>
    </MainContainer>
  );
};

export default EventCheckinPage;
