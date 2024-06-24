import {
  ConflictException,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { QueryRunner, Repository } from 'typeorm';
import { createOrganizationDto } from './organization.dto';
import { Organizations } from './organizations.entity';

@Injectable()
export class OrganizationsService {
  constructor(
    @InjectRepository(Organizations)
    private organizationsRepository: Repository<Organizations>,
  ) {}

  findAll(): Promise<Organizations[]> {
    return this.organizationsRepository.find();
  }

  findOne(id: string): Promise<Organizations> {
    return this.organizationsRepository.findOne({ where: { id } });
  }

  async create(payload: createOrganizationDto): Promise<Organizations> {
    const newOrganization = this.organizationsRepository.create(payload);

    try {
      return await this.organizationsRepository.save(newOrganization);
    } catch (error) {
      if (error.code === 'ER_DUP_ENTRY' || error.errno === 1062) {
        throw new ConflictException('Organization name already exists');
      }
      throw new InternalServerErrorException();
    }
  }

  async createWithinTransaction(
    queryRunner: QueryRunner,
    payload: createOrganizationDto,
  ): Promise<Organizations> {
    const newOrganization = queryRunner.manager.create(Organizations, payload);

    try {
      return await queryRunner.manager.save(newOrganization);
    } catch (error) {
      if (error.code === 'ER_DUP_ENTRY' || error.errno === 1062) {
        throw new ConflictException('Organization name already exists');
      }
      throw new InternalServerErrorException();
    }
  }

  async update(id: string, payload: Organizations): Promise<void> {
    await this.organizationsRepository.update(id, payload);
  }

  async delete(id: string): Promise<void> {
    await this.organizationsRepository.delete(id);
  }

  deactive() {}

  activate() {}
}
