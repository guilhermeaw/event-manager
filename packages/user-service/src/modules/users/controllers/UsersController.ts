import { instanceToPlain } from 'class-transformer';
import { Request, Response } from 'express';

import { UserRole } from '../entities/User';
import CreateUserService from '../services/CreateUserService';
import FindUserService from '../services/FindUserService';
import ListAllUsersService from '../services/ListAllUsersService';

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

  public async index(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const idAsNumber = Number(id);

    const user = await new FindUserService().execute({
      id: idAsNumber,
    });

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
