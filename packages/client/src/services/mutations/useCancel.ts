import { useMutation } from 'react-query';

import api from '../api';

type Registration = {
  user_id: number;
  event_id: number;
  status?: string;
};

export const useCancel = () => {
  return useMutation(
    ({ user_id, event_id, status }: Registration) =>
      api
        .post('/events/eventsRegistration/delete', {
          user_id,
          event_id,
          status,
        })
        .then(response => response.data),
    {
      onError: error => window.alert(error.message),
      onSuccess: () => window.alert('Inscrição cancelada com sucesso.'),
    },
  );
};
