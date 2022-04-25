import { Button, Card, Typography } from '@mui/material';

import { DownloadCertificateButton } from '../../components/DownloadCertificateButton';
import { MainContainer } from '../../components/MainContainer';
import { useFetchMyEvents, useFetchNextEvents } from '../../services/queries';
import { useRegister } from '../../services/mutations/useRegister';
import { useCancel } from '../../services/mutations/useCancel';
import { useAuth } from '../../store/Auth/useAuth';

const EventsPage = () => {
  const { data: nextEvents } = useFetchNextEvents();
  const { data: myEvents } = useFetchMyEvents();
  const { user } = useAuth();
  const { mutateAsync: register } = useRegister();
  const { mutateAsync: cancel } = useCancel();

  const handleRegistration = async (eventId: number) => {
    await register({ user_id: user.id, event_id: eventId });
  }

  const handleCancelRegistration = async (eventId: number) => {
    await cancel({ user_id: user.id, event_id: eventId });
  }

  return (
    <MainContainer>
      <Typography variant="h3">Meus eventos</Typography>
      <Typography variant="subtitle1">Listagem dos meus eventos</Typography>

      {myEvents?.map(event => (
        <Card key={event.event.id} sx={{ padding: '2rem', margin: '1rem 0' }}>
          <Typography>{event.event.name}</Typography>
          <Typography>{event.event.description}</Typography>
          <img
            src='https://cdn.thedevconf.com.br/img/logo/logo-tdc.png'
            alt="imagem do evento"
            height="64px"
            width="64px"
          />
          <div style={{ justifyContent: 'flex-end', display: 'flex' }}>
            {new Date(event.event.date) < new Date() && event.status == "checking"
              ?
              <DownloadCertificateButton
                userName={user.name}
                event={event.event}
                hash="as56d4sa65dsdsa564da"
              />
              :
              <Button variant="contained" onClick={() => handleCancelRegistration(event.event.id)}>
                Cancelar inscrição
              </Button>
            }
          </div>
        </Card>
      ))}

      <Typography variant="h3">Próximos eventos</Typography>
      <Typography variant="subtitle1">
        Listagem dos próximos eventos organizados pela equipe Event Manager
      </Typography>

      {nextEvents?.map(event => (
        <Card key={event.id} sx={{ padding: '2rem', margin: '1rem 0' }}>
          <Typography>{event.name}</Typography>
          <Typography>{event.description}</Typography>
          <img
            src='https://cdn.thedevconf.com.br/img/logo/logo-tdc.png'
            alt="imagem do evento"
            height="64px"
            width="64px"
          />
          <div style={{ justifyContent: 'flex-end', display: 'flex' }}>
            <Button variant="contained" onClick={() => handleRegistration(event.id)}>
              Inscrever-se no eventos
            </Button>
          </div>

        </Card>
      ))}
    </MainContainer>
  );
};

export default EventsPage;
