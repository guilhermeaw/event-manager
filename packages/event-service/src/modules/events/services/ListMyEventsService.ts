import { isAfter } from 'date-fns'

import EventRegistration, { Status } from '../entities/EventRegistration';
import EventRegistrationRepository from '../repositories/EventRegistrationRepository';
export default class ListMyEventsService {
  private eventRegistrationRepository: EventRegistrationRepository;

  constructor() {
    this.eventRegistrationRepository = new EventRegistrationRepository();
  }

  public async execute({ user_id }: Pick<EventRegistration, 'user_id'>): Promise<EventRegistration[]> {
    const events = await this.eventRegistrationRepository.listMyEvents(user_id);

    const myEvents = events.map((eventRegistration) => {
      const { event } = eventRegistration;
      if (isAfter(event.date, new Date())) {
        return {...eventRegistration, buttonAction:'cancelar'}
      }
      if (eventRegistration.status === Status.CHECKING) {
        return {...eventRegistration, buttonAction:'imprimir'}
      }
      return eventRegistration;
    })

    return myEvents;
  }
}
