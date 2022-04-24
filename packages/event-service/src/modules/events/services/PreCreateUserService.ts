import axios from 'axios';

import AppError from '@shared/errors/AppError';
import { IUserDTO } from '../dtos/IUserDTO';

export default class PreCreateUserService {
  public async execute({
    email,
    name,
  }: Pick<IUserDTO, 'email' | 'name'>): Promise<IUserDTO> {
    let user;

    try {
      const { data } = await axios.post<IUserDTO>(
        `http://localhost:3000/api/users/users/pre-create`,
        { email, name },
      );

      user = data;
    } catch (err) {
      throw new AppError('Erro ao pré criar usuário.');
    }

    if (!user) {
      throw new AppError('Usuário não encontrado.');
    }

    return user;
  }
}
