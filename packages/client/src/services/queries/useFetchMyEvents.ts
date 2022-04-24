import { useQuery } from 'react-query';

import { MyEvent } from '../../models/MyEvents';
import { useAuth } from '../../store/Auth';
import api from '../api';

export const useFetchMyEvents = () => {
  const { user } = useAuth();
  const user_id = user.id;
  console.log("User");
  console.log(user_id);

  return useQuery('myEvent', () =>
    api
      .get<MyEvent[]>(`/events/events/my-events/${user_id}`)
      .then(response => response.data),
  );
};
