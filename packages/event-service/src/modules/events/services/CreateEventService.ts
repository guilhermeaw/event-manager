import { Timestamp } from 'typeorm';

import EventsRepository from '@modules/events/repositories/EventsRepository';
import Event from '@modules/events/entities/Event';
import AppError from '@shared/errors/AppError';

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
  }: IRequest): Promise<Event> {
    const eventAlreadyExistsWithName = await this.eventsRepository.findByName(
      name,
    );

    if (eventAlreadyExistsWithName) {
      throw new AppError(
        'Já existe um evento com o mesmo nome, por favor escolha outro nome.',
      );
    }

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
