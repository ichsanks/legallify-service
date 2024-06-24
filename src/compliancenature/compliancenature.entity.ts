import { Compliances } from 'src/compliances/compliances.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  BeforeInsert,
  OneToMany,
} from 'typeorm';
import { v4 as uuidv4 } from 'uuid';

@Entity()
export class Compliancenature {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column({ default: 'ACTIVE' })
  status: string;

  @OneToMany(() => Compliances, (compliance) => compliance.compliancenature_id)
  compliances: Compliances[];

  @BeforeInsert()
  generateId() {
    if (!this.id) {
      this.id = uuidv4();
    }
  }
}
