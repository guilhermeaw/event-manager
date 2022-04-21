import { instanceToPlain } from 'class-transformer';
import { Request, Response } from 'express';

import CreateEventService from '../services/CreateEventService';
import FindEventService from '../services/FindEventService';

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

  public async index(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const idAsNumber = Number(id);

    const event = await new FindEventService().execute({
      id: idAsNumber,
    });

    return response.json(event);
  }
}
