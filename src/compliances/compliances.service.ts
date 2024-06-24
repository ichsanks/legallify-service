import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Compliances } from './compliances.entity';

@Injectable()
export class CompliancesService {
  constructor(
    @InjectRepository(Compliances)
    private compliancesRepository: Repository<Compliances>,
  ) {}

  findAll(): Promise<Compliances[]> {
    return this.compliancesRepository.find({
      relations: ['organizations', 'compliancenature', 'compliancecategory'],
    });
  }

  findOne(id: string): Promise<Compliances> {
    return this.compliancesRepository.findOne({ where: { id } });
  }

  async create(payload: Compliances): Promise<void> {
    await this.compliancesRepository.save(payload);
  }

  async update(id: string, payload: Compliances): Promise<void> {
    await this.compliancesRepository.update(id, payload);
  }

  async delete(id: string): Promise<void> {
    await this.compliancesRepository.delete(id);
  }
}
