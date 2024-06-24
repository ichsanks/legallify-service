import { Companies } from 'src/companies/companies.entity';
import { Organizations } from 'src/organizations/organizations.entity';
import { Roles } from 'src/roles/roles.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  BeforeInsert,
  ManyToOne,
  JoinColumn,
  ManyToMany,
  Unique,
  JoinTable,
} from 'typeorm';
import { v4 as uuidv4 } from 'uuid';

@Entity()
@Unique(['username', 'email'])
export class Users {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  fullname: string;

  @Column()
  email: string;

  @Column()
  username: string;

  @Column()
  password: string;

  @Column()
  organization_id: string;

  @Column()
  company_id: string;

  @Column({ default: 'ACTIVE' })
  status: string;

  @Column({ nullable: true })
  subscription_id: string;

  @ManyToOne(() => Organizations, (organizations) => organizations.users)
  @JoinColumn({ name: 'organization_id' })
  organizations: Organizations;

  @ManyToOne(() => Companies, (company) => company.users)
  @JoinColumn({ name: 'company_id' })
  company: Companies;

  @ManyToMany(() => Roles)
  @JoinTable({ name: 'user_roles' })
  roles: Roles[];

  @BeforeInsert()
  generateId() {
    if (!this.id) {
      this.id = uuidv4();
    }
  }
}
