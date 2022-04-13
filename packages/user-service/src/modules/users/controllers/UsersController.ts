import { Request, Response } from 'express';

export default class UsersController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { name, email, password, cpf } = request.body;

    const createUser = new CreateUserService();
  }
}
