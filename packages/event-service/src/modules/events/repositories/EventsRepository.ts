import { Repository } from 'typeorm';

import AppDataSource from '@shared/database/ormconfig';
import Event from '../entities/Event';

export default class EventsRepository {
  private ormRepository: Repository<Event>;

  constructor() {
    this.ormRepository = AppDataSource.getRepository(Event);
  }

  public async create(eventData: Omit<Event, 'id'>): Promise<Event> {
    const event = this.ormRepository.create(eventData);
    await this.ormRepository.save(event);

    return event;
  }

  public async findByName(name: string): Promise<Event | null> {
    const event = await this.ormRepository.findOne({
      where: { name },
    });

    return event;
  }

  public async findById(id: number): Promise<Event | null> {
    const event = await this.ormRepository.findOne({
      where: { id },
    });

    return event;
  }

  public async listNextEvents(id: number): Promise<Event | null> {
    const event = await this.ormRepository.findOne({
      where: { id },
    });

    return event;
  }
}
