import { instanceToPlain } from 'class-transformer';
import { Request, Response } from 'express';

import CreateEventService from '../services/CreateEventService';

export default class EventsController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { name, location, description, date, duration } = request.body;

    const event = await new CreateEventService().execute({
      name,
      location,
      description,
      date,
      duration,
    });

    return response.json(instanceToPlain(event));
  }
}
