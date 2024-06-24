import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Complianceflowfiles } from './complianceflowfiles.entity';

@Injectable()
export class ComplianceflowfilesService {
  constructor(
    @InjectRepository(Complianceflowfiles)
    private ComplianceflowfilesRepository: Repository<Complianceflowfiles>,
  ) {}

  findAll(): Promise<Complianceflowfiles[]> {
    return this.ComplianceflowfilesRepository.find();
  }

  findOne(id: string): Promise<Complianceflowfiles> {
    return this.ComplianceflowfilesRepository.findOne({ where: { id } });
  }

  async create(payload: Complianceflowfiles): Promise<void> {
    await this.ComplianceflowfilesRepository.save(payload);
  }

  async update(id: string, payload: Complianceflowfiles): Promise<void> {
    await this.ComplianceflowfilesRepository.update(id, payload);
  }

  async delete(id: string): Promise<void> {
    await this.ComplianceflowfilesRepository.delete(id);
  }
}
