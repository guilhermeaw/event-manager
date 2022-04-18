import { Request, Response } from 'express';

import CreateUserTokenService from '../services/CreateUserTokenService';

export default class UserTokensController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { user_id } = request.body;

    const token = await new CreateUserTokenService().execute({ user_id });

    return response.json(token);
  }
}
