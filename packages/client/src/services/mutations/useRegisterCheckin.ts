import { useMutation } from 'react-query';

import api from '../api';

enum EventRegistrationStatus {
  PENDING = 'pending',
  CHECKING = 'checking',
  CANCELED = 'canceled',
}

type EventRegistration = {
  user_id: number;
  event_id: number;
  status: EventRegistrationStatus;
};

export const useRegisterCheckin = () => {
  return useMutation(
    ({ event_id, user_id }: Omit<EventRegistration, 'status'>) =>
      api
        .put<Event>('/events/events/checkin', { event_id, user_id })
        .then(response => response.data),
    {
      onError: error => window.alert(error.message),
      onSuccess: () =>
        window.alert('Registro de presença realizado com sucesso.'),
    },
  );
};
