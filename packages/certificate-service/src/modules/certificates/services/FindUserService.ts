import axios from 'axios';

import AppError from '@shared/errors/AppError';
import { IUserDTO } from '../dtos/IUserDTO';

interface IRequest {
  user_id: number;
}

export default class FindUserService {
  public async execute({ user_id }: IRequest): Promise<IUserDTO> {
    let user;

    try {
      const { data } = await axios.get<IUserDTO>(
        `http://localhost:3000/api/users/users/${user_id}`,
      );

      user = data;
    } catch (err) {
      throw new AppError('Erro ao buscar usuário.');
    }

    if (!user) {
      throw new AppError('Usuário não encontrado.');
    }

    return user;
  }
}
