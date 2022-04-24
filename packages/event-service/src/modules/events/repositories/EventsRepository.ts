import { Repository, Between } from 'typeorm';

import AppDataSource from '@shared/database/ormconfig';
import { IDateIntervalDTO } from '../dtos/DateInterval';
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

<<<<<<< HEAD
  public async listNextEvents(id: number): Promise<Event | null> {
    const event = await this.ormRepository.findOne({
      where: { id },
=======
  public async listByDateInterval({
    from,
    to,
  }: IDateIntervalDTO): Promise<Event[]> {
    const event = await this.ormRepository.find({
      where: { date: Between(from, to) },
>>>>>>> 35e4fb875dd9638ddbb64ebc451892d6c346df99
    });

    return event;
  }
}
