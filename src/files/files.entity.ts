import { Companies } from 'src/companies/companies.entity';
import { Compliances } from 'src/compliances/compliances.entity';
import { Organizations } from 'src/organizations/organizations.entity';
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
export class Files {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  filepath: string;

  @Column()
  organization_id: string;

  @ManyToOne(() => Organizations, (organization) => organization.files)
  @JoinColumn({ name: 'organization_id' })
  organization: Organizations;

  @BeforeInsert()
  generateId() {
    if (!this.id) {
      this.id = uuidv4();
    }
  }
}
