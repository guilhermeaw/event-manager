import axios from 'axios';

import AppError from '@shared/errors/AppError';
import { IUserTokenDTO } from '../dtos/IUserTokenDTO';

export default class CreateUserTokenService {
  public async execute(user_id: number): Promise<IUserTokenDTO> {
    let userToken;

    try {
      const { data } = await axios.post<IUserTokenDTO>(
        `http://localhost:3000/api/users/tokens`,
        { user_id },
      );

      userToken = data;
    } catch (err) {
      throw new AppError('Erro ao criar token de usuário.');
    }

    if (!userToken) {
      throw new AppError('Token de usuário não encontrado.');
    }

    return userToken;
  }
}
