import AppError from '@shared/errors/AppError';
import axios from 'axios';
import { IUserDTO } from '../dtos/IUserDTO';

interface IRequest {
  user_id: number;
}

export default class FindUserService {
  public async execute({ user_id }: IRequest): Promise<IUserDTO> {
    const { data: user } = await axios.get<IUserDTO>(
      `http://localhost:3000/api/users/user/${user_id}`,
    );

    if (!user) {
      throw new AppError('Usuário não encontrado.');
    }

    return user;
  }
}
