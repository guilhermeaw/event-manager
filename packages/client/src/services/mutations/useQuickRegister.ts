import { useMutation } from 'react-query';

import api from '../api';

type QuickRegistration = {
  event_id: number;
  email: string;
  userName: string;
};

export const useQuickRegister = () => {
  return useMutation(
    ({ event_id, email, userName }: QuickRegistration) =>
      api
        .post('/events/eventsRegistration/quick-registration', {
          event_id,
          email,
          userName,
        })
        .then(response => response.data),
    {
      onError: error => window.alert(error.message),
      onSuccess: () => window.alert('Inscrição rápida realizada com sucesso.'),
    },
  );
};
