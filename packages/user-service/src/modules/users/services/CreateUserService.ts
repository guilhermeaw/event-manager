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
  private usersRepository: UsersRepository;

  private hashProvider: HashProvider;

  constructor() {
    this.usersRepository = new UsersRepository();
    this.hashProvider = new HashProvider();
  }

  public async execute({
    name,
    email,
    password,
    cpf,
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
    });

    return user;
  }
}
