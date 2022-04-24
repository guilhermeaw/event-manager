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
import { useFetchTodayEvents } from '../../services/queries';
import { useFetchUsers } from '../../services/queries/useFetchUsers';
import { useRegisterCheckin } from '../../services/mutations/useRegisterCheckin';

const EventCheckinPage = () => {
  const [selectedUser, setSelectedUser] = useState('');
  const [selectedEvent, setSelectedEvent] = useState('');

  const fetchTodayEvents = useFetchTodayEvents();
  const fetchUsers = useFetchUsers();

  const { mutateAsync: registerCheckin } = useRegisterCheckin();

  const handleSubmitEventCheckin = async (
    event: FormEvent<HTMLFormElement>,
  ) => {
    event.preventDefault();

    if (!selectedEvent || !selectedUser) {
      return;
    }

    registerCheckin({
      event_id: Number(selectedEvent),
      user_id: Number(selectedUser),
    });

    setSelectedUser('');
    setSelectedEvent('');
  };

  const handleSelectUser = (
    event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
  ) => {
    setSelectedUser(event.target.value);
  };

  const handleSelectEvent = (
    event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
  ) => {
    setSelectedEvent(event.target.value);
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
              query={fetchUsers}
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
              query={fetchTodayEvents}
              required
            />

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
