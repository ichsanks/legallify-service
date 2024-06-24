import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Compliancecategory } from './compliancecategory.entity';

@Injectable()
export class CompliancecategoryService {
  constructor(
    @InjectRepository(Compliancecategory)
    private compliancecategoryRepository: Repository<Compliancecategory>,
  ) {}

  findAll(): Promise<Compliancecategory[]> {
    return this.compliancecategoryRepository.find();
  }

  findOne(id: string): Promise<Compliancecategory> {
    return this.compliancecategoryRepository.findOne({ where: { id } });
  }

  async create(payload: Compliancecategory): Promise<void> {
    await this.compliancecategoryRepository.save(payload);
  }

  async update(id: string, payload: Compliancecategory): Promise<void> {
    await this.compliancecategoryRepository.update(id, payload);
  }

  async delete(id: string): Promise<void> {
    await this.compliancecategoryRepository.delete(id);
  }
}
