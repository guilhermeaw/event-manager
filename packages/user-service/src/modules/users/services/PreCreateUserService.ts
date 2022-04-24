import AppError from '@shared/errors/AppError';
import User, { UserRole } from '../entities/User';
import UsersRepository from '../repositories/UsersRepository';

interface IRequest {
  email: string;
  name: string;
  role: UserRole;
}

export default class PreCreateUserService {
  private usersRepository: UsersRepository;

  constructor() {
    this.usersRepository = new UsersRepository();
  }

  public async execute({
    email,
    name,
    role,
  }: IRequest): Promise<Omit<User, 'password'>> {
    const userAlreadyExistsWithEmail = await this.usersRepository.findByEmail(
      email,
    );

    if (userAlreadyExistsWithEmail) {
      throw new AppError('O e-mail informado já se encontra em uso.');
    }

    const user = await this.usersRepository.create({
      email,
      name,
      role,
    });

    return user;
  }
}
