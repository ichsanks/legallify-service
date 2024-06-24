import { Regulationflow } from '../regulationflow/regulationflow.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  BeforeInsert,
  OneToMany,
} from 'typeorm';
import { v4 as uuidv4 } from 'uuid';

@Entity()
export class Regulations {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  title: string;

  @Column({ nullable: true })
  description: string;

  @Column({ nullable: true })
  filepath: string;

  @Column()
  type: string;

  @Column()
  released_date: string;

  @Column({ default: 'ACTIVE' })
  status: string;

  @OneToMany(() => Regulationflow, (flow) => flow.regulation_id)
  flow: Regulationflow[];

  @BeforeInsert()
  generateId() {
    if (!this.id) {
      this.id = uuidv4();
    }
  }
}
