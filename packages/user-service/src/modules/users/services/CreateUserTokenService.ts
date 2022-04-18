import UserToken from '../entities/UserToken';
import UserTokensRepository from '../repositories/UserTokensRepository';

interface IRequest {
  user_id: string;
}

export default class CreateUserTokenService {
  private userTokensRepository: UserTokensRepository;

  constructor() {
    this.userTokensRepository = new UserTokensRepository();
  }

  public async execute({ user_id }: IRequest): Promise<UserToken> {
    const token = await this.userTokensRepository.generate(user_id);

    return token;
  }
}
