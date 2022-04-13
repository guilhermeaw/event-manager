import User from '../entities/User';

export default class UsersRepository {
  public async create(userData: Omit<User, 'id'>): Promise<User> {
    console.log(userData);
    const user = new User();
    return user;
  }

  public async findByEmail(email: string): Promise<User | undefined> {
    console.log(email);
    const user = new User();
    return user;
  }
}
