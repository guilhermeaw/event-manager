import { instanceToPlain } from 'class-transformer';
import { Request, Response } from 'express';

import { UserRole } from '../entities/User';
import CreateUserService from '../services/CreateUserService';
import FindUserByTokenService from '../services/FindUserByTokenService';
import FindUserService from '../services/FindUserService';
import ListAllUsersService from '../services/ListAllUsersService';
import PreCreateUserService from '../services/PreCreateUserService';
import UpdateUserService from '../services/UpdateUserService';

export default class UsersController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { name, email, password, cpf, role = UserRole.USER } = request.body;

    const user = await new CreateUserService().execute({
      cpf,
      name,
      email,
      password,
      role,
    });

    return response.json(instanceToPlain(user));
  }

  public async preCreate(
    request: Request,
    response: Response,
  ): Promise<Response> {
    const { email, name, role = UserRole.USER } = request.body;

    const user = await new PreCreateUserService().execute({
      email,
      name,
      role,
    });

    return response.json(instanceToPlain(user));
  }

  public async update(request: Request, response: Response): Promise<Response> {
    const { cpf, password, email, name, role = UserRole.USER } = request.body;
    const { id } = request.params;

    const idAsNumber = Number(id);

    await new UpdateUserService().execute({
      email,
      name,
      role,
      cpf,
      password,
      id: idAsNumber,
    });

    return response.status(204).json();
  }

  public async findById(
    request: Request,
    response: Response,
  ): Promise<Response> {
    const { id } = request.params;

    const idAsNumber = Number(id);

    const user = await new FindUserService().execute({
      id: idAsNumber,
    });

    return response.json(instanceToPlain(user));
  }

  public async findByToken(
    request: Request,
    response: Response,
  ): Promise<Response> {
    const { token } = request.params;

    const user = await new FindUserByTokenService().execute(token);

    return response.json(instanceToPlain(user));
  }

  public async listAll(
    request: Request,
    response: Response,
  ): Promise<Response> {
    const users = await new ListAllUsersService().execute();

    return response.json(instanceToPlain(users));
  }
}
