import { Repository } from 'typeorm';

import AppDataSource from '@shared/database/ormconfig';
import EventRegistration from '../entities/EventRegistration';

export default class EventRegistrationRepository {
  private ormRepository: Repository<EventRegistration>;

  constructor() {
    this.ormRepository = AppDataSource.getRepository(EventRegistration);
  }

  public async create(
    eventRegistrationData: EventRegistration,
  ): Promise<EventRegistration> {
    const eventRegistration = this.ormRepository.create(eventRegistrationData);
    await this.ormRepository.save(eventRegistration);

    return eventRegistration;
  }

  public async update(
    eventRegistration: Omit<EventRegistration, 'event'>,
  ): Promise<EventRegistration> {
    return this.ormRepository.save(eventRegistration);
  }

  public async findByUserAndEvent({
    event_id,
    user_id,
  }: Pick<
    EventRegistration,
    'event_id' | 'user_id'
  >): Promise<EventRegistration | null> {
    const eventRegistration = await this.ormRepository.findOne({
      where: { user_id, event_id },
    });

    return eventRegistration;
  }

  public async listMyEvents(user_id: number): Promise<EventRegistration[]> {
    const events = await this.ormRepository.find({
      where: { user_id },
    });

    return events;
  }
}
