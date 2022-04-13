import { sign } from 'jsonwebtoken';

import { authConfig } from '@config/auth';
import User from '@modules/users/entities/User';
import BCryptHashProvider from '@modules/users/providers/BCryptHashProvider';
import UsersRepository from '@modules/users/repositories/UsersRepository';
import AppError from '@shared/errors/AppError';

interface IRequest {
  email: string;
  password: string;
}

interface IResponse {
  user: User;
  token: string;
}

export default class CreateSessionService {
  private usersRepository: UsersRepository;

  private hashProvider: BCryptHashProvider;

  constructor() {
    this.usersRepository = new UsersRepository();
    this.hashProvider = new BCryptHashProvider();
  }

  public async execute({ email, password }: IRequest): Promise<IResponse> {
    const user = await this.usersRepository.findByEmail(email);

    if (!user) {
      throw new AppError('Combinação incorreta de e-mail e senha.');
    }

    const passwordMatched = await this.hashProvider.compareHash(
      password,
      user.password,
    );

    if (!passwordMatched) {
      throw new AppError('Combinação incorreta de e-mail e senha.');
    }

    const { expiresIn, secret } = authConfig.jwt;

    const token = sign({}, secret, {
      subject: user.id.toString(),
      expiresIn,
    });

    return {
      user,
      token,
    };
  }
}
