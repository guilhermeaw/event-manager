import { Column, Entity, PrimaryColumn, Generated } from 'typeorm';

@Entity('certificates')
export default class Certificate {
  @PrimaryColumn()
  user_id: number;

  @PrimaryColumn()
  event_id: number;

  @Column()
  @Generated('uuid')
  hash: string;
}
