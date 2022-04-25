import AppError from '@shared/errors/AppError';
import EventRegistrationRepository from '../repositories/EventRegistrationRepository';
import EventRegistration, {
  Status as EventRegistrationStatus,
} from '../entities/EventRegistration';

interface IRequest {
  event_id: number;
  user_id: number;
}

export default class RegisterCheckinService {
  private eventRegistrationRepository: EventRegistrationRepository;

  constructor() {
    this.eventRegistrationRepository = new EventRegistrationRepository();
  }

  public async execute({
    event_id,
    user_id,
  }: IRequest): Promise<EventRegistration> {
    const existEventRegistration =
      await this.eventRegistrationRepository.findByUserAndEvent({
        event_id,
        user_id,
      });

    if (!existEventRegistration) {
      throw new AppError('Usuário não inscrito no evento.');
    }

    if (existEventRegistration.status === EventRegistrationStatus.CHECKING) {
      throw new AppError('Usuário já confirmou presença no evento.');
    }

    return this.eventRegistrationRepository.update({
      event_id: existEventRegistration.event_id,
      user_id: existEventRegistration.user_id,
      status: EventRegistrationStatus.CHECKING,
    });
  }
}
