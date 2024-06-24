import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Compliancefiles } from './compliancefiles.entity';

@Injectable()
export class CompliancefilesService {
  constructor(
    @InjectRepository(Compliancefiles)
    private compliancefilesRepository: Repository<Compliancefiles>,
  ) {}

  findAll(): Promise<Compliancefiles[]> {
    return this.compliancefilesRepository.find();
  }

  findOne(id: string): Promise<Compliancefiles> {
    return this.compliancefilesRepository.findOne({ where: { id } });
  }

  async create(payload: Compliancefiles): Promise<void> {
    await this.compliancefilesRepository.save(payload);
  }

  async update(id: string, payload: Compliancefiles): Promise<void> {
    await this.compliancefilesRepository.update(id, payload);
  }

  async delete(id: string): Promise<void> {
    await this.compliancefilesRepository.delete(id);
  }
}
