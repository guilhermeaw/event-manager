import { Column, Entity, PrimaryColumn, Generated } from 'typeorm';
import { Exclude } from 'class-transformer';

@Entity('certificates')
export default class Certificate {
  @PrimaryColumn()
  @Exclude()
  user_id: number;

  @PrimaryColumn()
  @Exclude()
  event_id: number;

  @Column()
  @Generated('uuid')
  hash: string;
}
