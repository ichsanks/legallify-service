import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Regulationflowfiles } from './regulationflowfiles.entity';

@Injectable()
export class RegulationflowfilesService {
  constructor(
    @InjectRepository(Regulationflowfiles)
    private RegulationflowfilesRepository: Repository<Regulationflowfiles>,
  ) {}

  findAll(): Promise<Regulationflowfiles[]> {
    return this.RegulationflowfilesRepository.find();
  }

  findOne(id: string): Promise<Regulationflowfiles> {
    return this.RegulationflowfilesRepository.findOne({ where: { id } });
  }

  async create(payload: Regulationflowfiles): Promise<void> {
    await this.RegulationflowfilesRepository.save(payload);
  }

  async update(id: string, payload: Regulationflowfiles): Promise<void> {
    await this.RegulationflowfilesRepository.update(id, payload);
  }

  async delete(id: string): Promise<void> {
    await this.RegulationflowfilesRepository.delete(id);
  }
}
