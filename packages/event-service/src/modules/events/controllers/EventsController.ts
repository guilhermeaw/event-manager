import { instanceToPlain } from 'class-transformer';
import { Request, Response } from 'express';

import CreateEventService from '../services/CreateEventService';
import FindEventService from '../services/FindEventService';
import ListEventsInDayService from '../services/ListEventsInDayService';
import ListNextEventsService from '../services/ListNextEventsService';
import RegisterCheckinService from '../services/RegisterCheckinService';
import ListMyEventsService from '../services/ListMyEventsService';

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

  public async registerCheckin(
    request: Request,
    response: Response,
  ): Promise<Response> {
    const { event_id, user_id } = request.body;

    const event = await new RegisterCheckinService().execute({
      event_id,
      user_id,
    });

    return response.json(event);
  }

  public async getById(
    request: Request,
    response: Response,
  ): Promise<Response> {
    const { id } = request.params;

    const idAsNumber = Number(id);

    const event = await new FindEventService().execute({
      id: idAsNumber,
    });

    return response.json(event);
  }

  public async listTodayEvents(
    request: Request,
    response: Response,
  ): Promise<Response> {
    const event = await new ListEventsInDayService().execute({
      date: new Date(),
    });

    return response.json(event);
  }

  public async listNextEvents(
    request: Request,
    response: Response,
  ): Promise<Response> {
    const events = await new ListNextEventsService().execute({
      date: new Date(),
    });

    return response.json(events);
  }

  public async listMyEvents(
    request: Request,
    response: Response,
  ): Promise<Response> {
    const { user_id } = request.params;

    const userIdAsNumber = Number(user_id);

    const events = await new ListMyEventsService().execute({
      user_id: userIdAsNumber,
    });

    return response.json(events);
  }
}
