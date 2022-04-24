import { useMutation } from 'react-query';

import { User } from '../../models/User';
import api from '../api';

type UserUpdate = User & {
  password: string;
};

export const useUserUpdate = () => {
  return useMutation(({ name, email, password, cpf, id }: UserUpdate) =>
    api
      .put(`/users/users/update/${id}`, { email, password, name, cpf })
      .then(response => response.data),
  );
};
