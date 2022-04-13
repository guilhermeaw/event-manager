import { Request, Response } from 'express';

import CreateUserService from '../services/CreateUserService';

export default class UsersController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { name, email, password, cpf } = request.body;

    const user = await new CreateUserService().execute({
      cpf,
      name,
      email,
      password,
    });

    return response.json(user);
  }
}
