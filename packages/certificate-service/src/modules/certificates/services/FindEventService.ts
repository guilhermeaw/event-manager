import axios from 'axios';

import AppError from '@shared/errors/AppError';
import { IEventDTO } from '../dtos/IEventDTO';

interface IRequest {
  event_id: number;
}

export default class FindEventService {
  public async execute({ event_id }: IRequest): Promise<IEventDTO> {
    const { data: event } = await axios.get<IEventDTO>(
      `http://localhost:3000/api/events/event/${event_id}`,
    );

    if (!event) {
      throw new AppError('Evento não encontrado.');
    }

    return event;
  }
}
