import { Compliancecategory } from '../compliancecategory/compliancecategory.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  BeforeInsert,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { v4 as uuidv4 } from 'uuid';
import { Compliancenature } from 'src/compliancenature/compliancenature.entity';
import { Organizations } from 'src/organizations/organizations.entity';

@Entity()
export class Compliances {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  title: string;

  @Column({ nullable: true })
  number: string;

  @Column({ nullable: true })
  active_period_start: string;

  @Column({ nullable: true })
  active_period_end: string;

  @Column({ nullable: true })
  status: string;

  @Column()
  compliancenature_id: string;

  @Column()
  compliancecategory_id: string;

  @Column()
  organization_id: string;

  @ManyToOne(() => Compliancecategory, (category) => category.compliances)
  @JoinColumn({ name: 'compliancecategory_id' })
  compliancecategory: Compliancecategory;

  @ManyToOne(() => Compliancenature, (nature) => nature.compliances)
  @JoinColumn({ name: 'compliancenature_id' })
  compliancenature: Compliancenature;

  @ManyToOne(() => Organizations, (organization) => organization.compliances)
  @JoinColumn({ name: 'organization_id' })
  organizations: Organizations;

  @BeforeInsert()
  generateId() {
    if (!this.id) {
      this.id = uuidv4();
    }
  }
}
