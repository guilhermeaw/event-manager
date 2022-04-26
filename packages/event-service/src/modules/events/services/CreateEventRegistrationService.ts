import EventRegistrationRepository from '@modules/events/repositories/EventRegistrationRepository';
import AppError from '@shared/errors/AppError';
import { Status } from '../entities/EventRegistration';

interface IRequest {
  user_id: number;
  event_id: number;
  status: Status;
}

export default class CreateEventRegistrationService {
  private eventRegistrationsRepository: EventRegistrationRepository;

  constructor() {
    this.eventRegistrationsRepository = new EventRegistrationRepository();
  }

  public async execute({
    user_id,
    event_id,
    status
  }: IRequest) {

    const alreadyExistRegistration = await this.eventRegistrationsRepository.findByUserAndEvent({
      user_id,
      event_id
    });

    if (alreadyExistRegistration) {
      throw new AppError("Usuário já inscrito no evento!");
    }

    const eventRegistration = await this.eventRegistrationsRepository.create({
      user_id,
      event_id,
      status
    });

    return eventRegistration;
  }
}
