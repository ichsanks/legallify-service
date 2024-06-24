import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Complianceflow } from './complianceflow.entity';

@Injectable()
export class ComplianceflowService {
  constructor(
    @InjectRepository(Complianceflow)
    private complianceflowRepository: Repository<Complianceflow>,
  ) {}

  findAll(): Promise<Complianceflow[]> {
    return this.complianceflowRepository.find();
  }

  findOne(id: string): Promise<Complianceflow> {
    return this.complianceflowRepository.findOne({ where: { id } });
  }

  async create(payload: Complianceflow): Promise<void> {
    await this.complianceflowRepository.save(payload);
  }

  async update(id: string, payload: Complianceflow): Promise<void> {
    await this.complianceflowRepository.update(id, payload);
  }

  async delete(id: string): Promise<void> {
    await this.complianceflowRepository.delete(id);
  }
}
