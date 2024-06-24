import { Regulations } from '../regulations/regulations.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  BeforeInsert,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { v4 as uuidv4 } from 'uuid';

@Entity()
export class Regulationflow {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  type: string;

  @Column()
  estimated_duration: string;

  @Column()
  regulation_id: string;

  @ManyToOne(() => Regulations, (regulations) => regulations.flow)
  @JoinColumn({ name: 'regulation_id' })
  regulations: Regulations;

  @BeforeInsert()
  generateId() {
    if (!this.id) {
      this.id = uuidv4();
    }
  }
}
