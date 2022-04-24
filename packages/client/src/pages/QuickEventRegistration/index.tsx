import { ChangeEvent, FormEvent, RefObject, useRef, useState } from 'react';
import {
  Button,
  CircularProgress,
  FormHelperText,
  Grid,
  Typography,
} from '@mui/material';

import { MainContainer } from '../../components/MainContainer';
import { InputEmail } from '../../components/InputEmail';
import { SelectEvent } from '../../components/SelectEvent';
import { useFetchNextEvents } from '../../services/queries';
import { useQuickRegister } from '../../services/mutations/useQuickRegister';

const EventQuickRegistrationPage = () => {
  const emailInput = useRef(null) as RefObject<HTMLInputElement>;
  const [selectedEvent, setSelectedEvent] = useState('');

  const fetchNextEvents = useFetchNextEvents();

  const { mutateAsync: quickRegister, isLoading } = useQuickRegister();

  const handleSubmitQuickEventRegistration = async (
    event: FormEvent<HTMLFormElement>,
  ) => {
    event.preventDefault();

    const email = emailInput?.current?.value;

    if (!selectedEvent || !email) {
      return;
    }

    await quickRegister({
      event_id: Number(selectedEvent),
      email,
    });

    emailInput.current.value = '';
    setSelectedEvent('');
  };

  const handleSelectEvent = (
    event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
  ) => {
    setSelectedEvent(event.target.value as string);
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
            <SelectEvent
              value={selectedEvent}
              onChange={handleSelectEvent}
              query={fetchNextEvents}
              required
            />

            <FormHelperText>
              Selecione o evento que o usuário deseja se inscrever.
            </FormHelperText>
          </Grid>

          <Grid item xs={12}>
            <Button disabled={isLoading} type="submit" variant="contained">
              {isLoading ? (
                <CircularProgress size={24} />
              ) : (
                'Confirmar inscrição'
              )}
            </Button>
          </Grid>
        </Grid>
      </form>
    </MainContainer>
  );
};

export default EventQuickRegistrationPage;
