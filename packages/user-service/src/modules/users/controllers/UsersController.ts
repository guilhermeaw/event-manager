import { instanceToPlain } from 'class-transformer';
import { Request, Response } from 'express';

import { UserRole } from '../entities/User';
import CreateUserService from '../services/CreateUserService';

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
}
