import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('events')
export default class Event {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  name: string;

  @Column()
  location: string;

  @Column()
  description: string;

  @Column({ type: 'timestamp' })
  date: Date;

  @Column()
  duration: number;
}
