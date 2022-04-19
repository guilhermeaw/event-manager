import { Column, Entity, PrimaryColumn } from 'typeorm';

export enum Status {
  PENDING = 'pending',
  CHECKING = 'checking',
  CANCELED = 'canceled',
}
@Entity('event_registrations')
export default class EventRegistration {
  @PrimaryColumn()
  user_id: number;

  @PrimaryColumn()
  event_id: number;

  @Column('enum', { enum: Status })
  status: Status;
}
