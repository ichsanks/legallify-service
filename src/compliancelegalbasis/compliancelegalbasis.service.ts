import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Compliancelegalbasis } from './compliancelegalbasis.entity';

@Injectable()
export class CompliancelegalbasisService {
  constructor(
    @InjectRepository(Compliancelegalbasis)
    private compliancelegalbasisRepository: Repository<Compliancelegalbasis>,
  ) {}

  findAll(): Promise<Compliancelegalbasis[]> {
    return this.compliancelegalbasisRepository.find();
  }

  findOne(id: string): Promise<Compliancelegalbasis> {
    return this.compliancelegalbasisRepository.findOne({ where: { id } });
  }

  async create(payload: Compliancelegalbasis): Promise<void> {
    await this.compliancelegalbasisRepository.save(payload);
  }

  async update(id: string, payload: Compliancelegalbasis): Promise<void> {
    await this.compliancelegalbasisRepository.update(id, payload);
  }

  async delete(id: string): Promise<void> {
    await this.compliancelegalbasisRepository.delete(id);
  }
}
