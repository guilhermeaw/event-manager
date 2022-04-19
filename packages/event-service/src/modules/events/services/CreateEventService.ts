import Event from '@modules/events/entities/Event';
import EventsRepository from '@modules/events/repositories/EventsRepository';
import { Timestamp } from 'typeorm';

interface IRequest {
  name: string;
  location: string;
  description: string;
  date: Timestamp;
  duration: number;
}

export default class CreateEventService {
  private eventsRepository: EventsRepository;

  constructor() {
    this.eventsRepository = new EventsRepository();
  }

  public async execute({
    name,
    location,
    description,
    date,
    duration,
  }: IRequest): Promise<Omit<Event, 'password'>> {

    const event = await this.eventsRepository.create({
      name,
      location,
      description,
      date,
      duration,
    });

    return event;
  }
}
