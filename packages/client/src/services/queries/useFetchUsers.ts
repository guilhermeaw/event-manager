import { useQuery } from 'react-query';

import { User } from '../../models/User';
import api from '../api';

export const useFetchUsers = () => {
  return useQuery('users', () =>
    api.get<User[]>('/users/users/list-all').then(response => response.data),
  );
};
