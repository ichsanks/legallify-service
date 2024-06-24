import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Regulationflow } from './regulationflow.entity';

@Injectable()
export class RegulationflowService {
  constructor(
    @InjectRepository(Regulationflow)
    private RegulationflowRepository: Repository<Regulationflow>,
  ) {}

  findAll(): Promise<Regulationflow[]> {
    return this.RegulationflowRepository.find({
      relations: ['regulations'],
    });
  }

  async create(user: Regulationflow): Promise<void> {
    await this.RegulationflowRepository.save(user);
  }

  async update(id: string, payload: Regulationflow): Promise<void> {
    await this.RegulationflowRepository.update(id, payload);
  }

  async delete(id: string): Promise<void> {
    await this.RegulationflowRepository.delete(id);
  }
}
