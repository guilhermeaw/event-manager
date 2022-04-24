import { startOfDay } from 'date-fns';

import Event from '../entities/Event';
import EventsRepository from '../repositories/EventsRepository';

interface IRequest {
  date: Date;
}

export default class ListNextEventsService {
  private eventsRepository: EventsRepository;

  constructor() {
    this.eventsRepository = new EventsRepository();
  }

  public async execute({ date }: IRequest): Promise<Event[]> {
    const events = await this.eventsRepository.listNextEvents(
      startOfDay(date)
    );

    return events;
  }
}
