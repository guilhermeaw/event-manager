import Event from '../entities/Event';
import EventsRepository from '../repositories/EventsRepository';

export default class FindEventService {
  private eventsRepository: EventsRepository;

  constructor() {
    this.eventsRepository = new EventsRepository();
  }

  public async execute({ id }: Pick<Event, 'id'>): Promise<Event | null> {
    const event = await this.eventsRepository.findById(id);

    return event;
  }
}
