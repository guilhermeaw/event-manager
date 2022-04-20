import { useMutation } from 'react-query';

import { User } from '../../models/User';
import api from '../api';

type SignUpCredentials = {
  name: string;
  email: string;
  password: string;
  cpf: string;
};

export const useUserCreate = () => {
  return useMutation(({ name, email, password, cpf }: SignUpCredentials) =>
    api
      .post<User>('/users/users', { email, password, name, cpf })
      .then(response => response.data),
  );
};
