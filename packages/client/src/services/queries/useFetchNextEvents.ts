import { useQuery } from 'react-query';

import { Event } from '../../models/Event';
import api from '../api';

export const useFetchNextEvents = () => {
  return useQuery('nextEvents', () =>
    api
      .get<Event[]>('/events/events/next-events')
      .then(response => response.data),
  );
};
