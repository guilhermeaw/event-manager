import { Repository } from 'typeorm';

import AppDataSource from '@shared/database/ormconfig';
import UserToken from '../entities/UserToken';

export default class UserTokensRepository {
  private ormRepository: Repository<UserToken>;

  constructor() {
    this.ormRepository = AppDataSource.getRepository(UserToken);
  }

  public async generate(user_id: string): Promise<UserToken> {
    const userToken = this.ormRepository.create({ user_id });

    await this.ormRepository.save(userToken);

    return userToken;
  }
}
