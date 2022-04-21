import { Button, Card, Typography } from '@mui/material';

import { DownloadCertificateButton } from '../../components/DownloadCertificateButton';
import { Header } from '../../components/Header';
import { RouterLink } from '../../components/Link';
import { MainContainer } from '../../components/MainContainer';

const EventsPage = () => {
  const nextEvents = [
    {
      id: 1,
      title: 'TDC Floripa',
      description: 'Um encontro de devs com muitas palestras',
      img: 'https://cdn.thedevconf.com.br/img/logo/logo-tdc.png',
      duration: 300,
    },
    {
      id: 2,
      title: 'Show do Gustavo Lima',
      description: 'Show nacional do cantor Gustavo Lima',
      img: 'https://s2.glbimg.com/pQPSrWFUJBB1FRTWQGLUbtB9eeA=/0x0:833x794/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2019/A/c/6PPJpbRn684qOUAx1gVQ/gusttavo-lima.png',
      duration: 60,
    },
  ];

  const lastEvents = [
    {
      id: 1,
      title: 'TDC Floripa',
      description: 'Um encontro de devs com muitas palestras',
      img: 'https://cdn.thedevconf.com.br/img/logo/logo-tdc.png',
      duration: 300,
    },
    {
      id: 2,
      title: 'Show do Gustavo Lima',
      description: 'Show nacional do cantor Gustavo Lima',
      img: 'https://s2.glbimg.com/pQPSrWFUJBB1FRTWQGLUbtB9eeA=/0x0:833x794/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2019/A/c/6PPJpbRn684qOUAx1gVQ/gusttavo-lima.png',
      duration: 60,
    },
  ];

  return (
    <>
      <Header />

      <MainContainer>
        <Button fullWidth variant="outlined" sx={{ margin: '1rem 0' }}>
          <RouterLink to="/my-events">Acessar meus eventos</RouterLink>
        </Button>

        <DownloadCertificateButton
          userName="José Silva"
          event={nextEvents[0]}
          hash="as56d4sa65dsdsa564da"
        />

        <Typography variant="h3">Em andamento</Typography>
        <Typography variant="subtitle1">
          Listagem dos eventos em andamento
        </Typography>

        {nextEvents.map(event => (
          <Card key={event.id} sx={{ padding: '2rem', margin: '1rem 0' }}>
            <Typography>{event.title}</Typography>
            <Typography>{event.description}</Typography>
            <img
              src={event.img}
              alt="imagem do evento"
              height="64px"
              width="64px"
            />
          </Card>
        ))}

        <Typography variant="h3">Próximos eventos</Typography>
        <Typography variant="subtitle1">
          Listagem dos próximos eventos organizados pela equipe Event Manager
        </Typography>

        {nextEvents.map(event => (
          <Card key={event.id} sx={{ padding: '2rem', margin: '1rem 0' }}>
            <Typography>{event.title}</Typography>
            <Typography>{event.description}</Typography>
            <img
              src={event.img}
              alt="imagem do evento"
              height="64px"
              width="64px"
            />
          </Card>
        ))}

        <Typography variant="h4">Eventos anteriores</Typography>
        <Typography variant="subtitle2">
          Listagem dos eventos anteriores organizados pela equipe Event Manager
        </Typography>

        {lastEvents.map(event => (
          <Card key={event.id} sx={{ padding: '2rem', margin: '1rem 0' }}>
            <Typography>{event.title}</Typography>
            <Typography>{event.description}</Typography>
            <img
              src={event.img}
              alt="imagem do evento"
              height="64px"
              width="64px"
            />
          </Card>
        ))}
      </MainContainer>
    </>
  );
};

export default EventsPage;
