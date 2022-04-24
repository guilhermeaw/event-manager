import EventRegistration from '../entities/EventRegistration';
import EventRegistrationRepository from '../repositories/EventRegistrationRepository';

export default class ListMyEventsService {
  private eventRegistrationRepository: EventRegistrationRepository;

  constructor() {
    this.eventRegistrationRepository = new EventRegistrationRepository();
  }

  public async execute({ user_id }: Pick<EventRegistration, 'user_id'>): Promise<EventRegistration[]> {
    const events = await this.eventRegistrationRepository.listMyEvents(user_id);

    return events;
  }
}
