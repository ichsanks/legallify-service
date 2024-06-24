import { Organizations } from 'src/organizations/organizations.entity';
import { Users } from 'src/users/users.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  BeforeInsert,
  OneToMany,
  Unique,
} from 'typeorm';
import { v4 as uuidv4 } from 'uuid';

@Entity()
@Unique(['name'])
export class Companies {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  address: string;

  @Column()
  pic: string;

  @Column()
  pic_number: string;

  @Column()
  country: string;

  @Column({ default: 'ACTIVE' })
  status: string;

  @OneToMany(() => Organizations, (organization) => organization.company)
  organizations: Organizations[];

  @OneToMany(() => Users, (user) => user.company)
  users: Users[];

  @BeforeInsert()
  generateId() {
    if (!this.id) {
      this.id = uuidv4();
    }
  }
}
