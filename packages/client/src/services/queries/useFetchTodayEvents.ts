import { useQuery } from 'react-query';

import { Event } from '../../models/Event';
import api from '../api';

export const useFetchTodayEvents = () => {
  return useQuery('todayEvents', () =>
    api
      .get<Event[]>('/events/events/today-events')
      .then(response => response.data),
  );
};
