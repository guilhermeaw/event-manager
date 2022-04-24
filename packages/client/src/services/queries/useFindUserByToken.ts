import { useQuery } from 'react-query';

import { User } from '../../models/User';
import api from '../api';

type FindUserByTokenParams = {
  token: string | undefined;
};

export const useFindUserByToken = ({ token }: FindUserByTokenParams) => {
  return useQuery('findUserByToken', () =>
    api
      .get<User>(`/users/users/token/${token}`)
      .then(response => response.data),
  );
};
