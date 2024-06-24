import {
  ConflictException,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { QueryRunner, Repository } from 'typeorm';
import { Files } from './files.entity';

@Injectable()
export class FilesService {
  constructor(
    @InjectRepository(Files)
    private FilesRepository: Repository<Files>,
  ) {}

  findAll(): Promise<Files[]> {
    return this.FilesRepository.find();
  }

  findOne(id: string): Promise<Files> {
    return this.FilesRepository.findOne({ where: { id } });
  }

  async create(payload: Files): Promise<Files> {
    const newFile = this.FilesRepository.create(payload);

    try {
      return await this.FilesRepository.save(newFile);
    } catch (error) {
      throw new InternalServerErrorException();
    }
  }

  async update(id: string, payload: Files): Promise<void> {
    await this.FilesRepository.update(id, payload);
  }

  async delete(id: string): Promise<void> {
    await this.FilesRepository.delete(id);
  }
}
