import { Entity, PrimaryColumn } from 'typeorm';

@Entity('event_registrations')
export default class EventRegistration {
  @PrimaryColumn()
  user_id: number;

  @PrimaryColumn()
  event_id: number;
}
