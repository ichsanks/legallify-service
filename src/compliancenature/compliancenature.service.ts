import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Compliancenature } from './compliancenature.entity';

@Injectable()
export class CompliancenatureService {
  constructor(
    @InjectRepository(Compliancenature)
    private compliancenatureRepository: Repository<Compliancenature>,
  ) {}

  findAll(): Promise<Compliancenature[]> {
    return this.compliancenatureRepository.find();
  }

  findOne(id: string): Promise<Compliancenature> {
    return this.compliancenatureRepository.findOne({ where: { id } });
  }

  async create(payload: Compliancenature): Promise<void> {
    await this.compliancenatureRepository.save(payload);
  }

  async update(id: string, payload: Compliancenature): Promise<void> {
    await this.compliancenatureRepository.update(id, payload);
  }

  async delete(id: string): Promise<void> {
    await this.compliancenatureRepository.delete(id);
  }
}
