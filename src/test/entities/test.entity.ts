import { Entity, Column } from 'typeorm';
import { AbstractEntity } from '../../database/abstract.entity';

@Entity()
export class Test extends AbstractEntity<Test> {
  @Column()
  record: string;
}
