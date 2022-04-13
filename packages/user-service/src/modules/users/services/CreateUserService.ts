import AppError from '@shared/errors/AppError';
import User, { UserRole } from '@modules/users/entities/User';
import UsersRepository from '@modules/users/repositories/UsersRepository';
import BCryptHashProvider from '@modules/users/providers/BCryptHashProvider';

interface IRequest {
  name: string;
  email: string;
  password: string;
  cpf: string;
  role: UserRole;
}

export default class CreateUserService {
  private usersRepository: UsersRepository;

  private hashProvider: BCryptHashProvider;

  constructor() {
    this.usersRepository = new UsersRepository();
    this.hashProvider = new BCryptHashProvider();
  }

  public async execute({
    name,
    email,
    password,
    cpf,
    role,
  }: IRequest): Promise<Omit<User, 'password'>> {
    const userAlreadyExistsWithEmail = await this.usersRepository.findByEmail(
      email,
    );

    if (userAlreadyExistsWithEmail) {
      throw new AppError('O e-mail informado já se encontra em uso.');
    }

    const userAlreadyExistsWithCpf = await this.usersRepository.findByCpf(cpf);

    if (userAlreadyExistsWithCpf) {
      throw new AppError('O CPF informado já se encontra em uso.');
    }

    const hashedPassword = await this.hashProvider.generateHash(password);

    const user = await this.usersRepository.create({
      name,
      email,
      password: hashedPassword,
      cpf,
      role,
    });

    return user;
  }
}
