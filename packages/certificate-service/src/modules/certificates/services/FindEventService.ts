import axios from 'axios';

import AppError from '@shared/errors/AppError';
import { IEventDTO } from '../dtos/IEventDTO';

interface IRequest {
  event_id: number;
}

export default class FindEventService {
  public async execute({ event_id }: IRequest): Promise<IEventDTO> {
    let event;

    try {
      const { data } = await axios.get<IEventDTO>(
        `http://localhost:3000/api/events/events/${event_id}`,
      );

      event = data;
    } catch (err) {
      throw new AppError('Erro ao buscar evento.');
    }

    if (!event) {
      throw new AppError('Evento não encontrado.');
    }

    return event;
  }
}
