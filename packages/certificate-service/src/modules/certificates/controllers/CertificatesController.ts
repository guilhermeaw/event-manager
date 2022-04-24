import { instanceToPlain } from 'class-transformer';
import { Request, Response } from 'express';

import CreateCertificateService from '../services/CreateCertificateService';
import FindCertificateByHashService from '../services/FindCertificateByHashService';
import FindCertificateService from '../services/FindCertificateService';
import FindEventService from '../services/FindEventService';
import FindUserService from '../services/FindUserService';

export default class CertificatesController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { user_id, event_id } = request.body;

    const event = await new FindEventService().execute({
      event_id,
    });

    const user = await new FindUserService().execute({
      user_id,
    });

    const certificate = await new CreateCertificateService().execute({
      user_id,
      event_id,
    });

    return response.json({ ...instanceToPlain(certificate), event, user });
  }

  public async index(request: Request, response: Response): Promise<Response> {
    const { user_id, event_id } = request.params;

    const eventIdAsNumber = Number(event_id);
    const userIdAsNumber = Number(user_id);

    const event = await new FindEventService().execute({
      event_id: eventIdAsNumber,
    });

    const user = await new FindUserService().execute({
      user_id: userIdAsNumber,
    });

    const certificate = await new FindCertificateService().execute({
      user_id: userIdAsNumber,
      event_id: eventIdAsNumber,
    });

    return response.json({ ...instanceToPlain(certificate), event, user });
  }

  public async findByHash(
    request: Request,
    response: Response,
  ): Promise<Response> {
    const { hash } = request.params;

    const certificate = await new FindCertificateByHashService().execute(hash);

    return response.json(certificate);
  }
}
