import AppError from '@shared/errors/AppError';
import User from '@modules/users/entities/User';
import UsersRepository from '@modules/users/repositories/UsersRepository';
import HashProvider from '@modules/users/providers/BCryptHashProvider';

interface IRequest {
  name: string;
  email: string;
  password: string;
  cpf: string;
}

export default class CreateUserService {
  constructor(
    private usersRepository: UsersRepository,
    private hashProvider: HashProvider,
  ) {}

  public async execute({
    name,
    email,
    password,
    cpf,
  }: IRequest): Promise<Omit<User, 'password'>> {
    const userExists = await this.usersRepository.findByEmail(email);

    if (userExists) {
      throw new AppError('O e-mail informado já se encontra em uso.');
    }

    const hashedPassword = await this.hashProvider.generateHash(password);

    const user = await this.usersRepository.create({
      name,
      email,
      password: hashedPassword,
      cpf,
    });

    return user;
  }
}
