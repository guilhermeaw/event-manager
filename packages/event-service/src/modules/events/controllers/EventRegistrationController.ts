import { instanceToPlain } from 'class-transformer';
import { Request, Response } from 'express';

import { Status } from '../entities/EventRegistration';
import CreateEventRegistrationService from '../services/CreateEventRegistrationService';

export default class EventRegistrationController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { user_id, event_id, status = Status.PENDING } = request.body;

    const eventRegistration = await new CreateEventRegistrationService().execute({
      user_id,
      event_id,
      status
    });

    return response.json(instanceToPlain(eventRegistration));
  }
}
