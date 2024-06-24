import { Companies } from 'src/companies/companies.entity';
import { Compliances } from 'src/compliances/compliances.entity';
import { Files } from 'src/files/files.entity';
import { Users } from 'src/users/users.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  BeforeInsert,
  OneToMany,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { v4 as uuidv4 } from 'uuid';

@Entity()
export class Organizations {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column({ nullable: true })
  @Column()
  address: string;

  @Column()
  company_id: string;

  @Column({ default: 'ACTIVE' })
  status: string;

  @OneToMany(() => Users, (users) => users.organization_id)
  users: Users[];

  @OneToMany(() => Compliances, (compliance) => compliance.organization_id)
  compliances: Compliances[];

  @ManyToOne(() => Companies, (company) => company.organizations)
  @JoinColumn({ name: 'company_id' })
  company: Companies;

  @OneToMany(() => Files, (file) => file.organization_id)
  files: Files[];

  @BeforeInsert()
  generateId() {
    if (!this.id) {
      this.id = uuidv4();
    }
  }
}
