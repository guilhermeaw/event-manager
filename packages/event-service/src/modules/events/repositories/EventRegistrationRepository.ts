import { Repository } from 'typeorm';

import AppDataSource from '@shared/database/ormconfig';
import EventRegistration from '../entities/EventRegistration';

export default class EventRegistrationRepository {
  private ormRepository: Repository<EventRegistration>;

  constructor() {
    this.ormRepository = AppDataSource.getRepository(EventRegistration);
  }

  public async create(eventRegistrationData: EventRegistration): Promise<EventRegistration> {
    const eventRegistration = this.ormRepository.create(eventRegistrationData);
    await this.ormRepository.save(eventRegistration);

    return eventRegistration;
  }

  public async findByName(user_id: number, event_id: number): Promise<EventRegistration | null> {
    const eventRegistration = await this.ormRepository.findOne({
      where: { user_id, event_id },
    });

    return eventRegistration;
  }
}
