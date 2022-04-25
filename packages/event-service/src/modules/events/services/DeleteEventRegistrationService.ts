import EventRegistrationRepository from '@modules/events/repositories/EventRegistrationRepository';
import { Status } from '../entities/EventRegistration';

interface IRequest {
  user_id: number;
  event_id: number;
  status?: Status;
}

export default class DeleteEventRegistrationService {
  private eventRegistrationsRepository: EventRegistrationRepository;

  constructor() {
    this.eventRegistrationsRepository = new EventRegistrationRepository();
  }

  public async execute({
    user_id,
    event_id
  }: IRequest) {

    const eventRegistration = await this.eventRegistrationsRepository.delete({
      user_id,
      event_id,
    });

    return eventRegistration;
  }
}
