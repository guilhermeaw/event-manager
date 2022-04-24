import { Repository, Between, MoreThan } from 'typeorm';

import AppDataSource from '@shared/database/ormconfig';
import Event from '../entities/Event';
import { IDateIntervalDTO } from '../dtos/DateInterval';

import EventRegistration from '../entities/EventRegistration';
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

  public async listByDateInterval({
    from,
    to,
  }: IDateIntervalDTO): Promise<Event[]> {
    const event = await this.ormRepository.find({
      where: { date: Between(from, to) },
    });

    return event;
  }

  public async listNextEvents(date: Date): Promise<Event[]> {
    const events = await this.ormRepository.find({
      where: { date: MoreThan(date) },
    });

    return events;
  }
}
