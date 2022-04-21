import { Timestamp } from 'typeorm';

export interface IEventDTO {
  id: number;
  name: string;
  location: string;
  description: string;
  date: Timestamp;
  duration: number;
}
