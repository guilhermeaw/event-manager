import AppError from '@shared/errors/AppError';
import User from '../entities/User';
import UserTokensRepository from '../repositories/UserTokensRepository';

export default class FindUserByTokenService {
  private userTokensRepository: UserTokensRepository;

  constructor() {
    this.userTokensRepository = new UserTokensRepository();
  }

  public async execute(token: string): Promise<User | undefined> {
    const userToken = await this.userTokensRepository.findByToken(token);

    if (!userToken) {
      throw new AppError(
        'Não foi encontrado nenhum usuário com o token informado.',
      );
    }

    return userToken.user;
  }
}
