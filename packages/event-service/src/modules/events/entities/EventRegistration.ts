import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm';

import Event from './Event';

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

  @ManyToOne(() => Event, {eager: true})
  @JoinColumn({ name: 'event_id' })
  event: Event;

  @Column('enum', { enum: Status })
  status: Status;
}
