import {
  ConflictException,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Roles } from './roles.entity';

@Injectable()
export class RolesService {
  constructor(
    @InjectRepository(Roles)
    private RolesRepository: Repository<Roles>,
  ) {}

  findAll(): Promise<Roles[]> {
    return this.RolesRepository.find();
  }

  findOne(id: string): Promise<Roles> {
    return this.RolesRepository.findOne({ where: { id } });
  }

  findByName(name: string): Promise<Roles> {
    return this.RolesRepository.findOne({ where: { name } });
  }

  async create(payload: Roles): Promise<Roles> {
    const newRole = this.RolesRepository.create(payload);

    try {
      return await this.RolesRepository.save(newRole);
    } catch (error) {
      if (error.code === 'ER_DUP_ENTRY' || error.errno === 1062) {
        throw new ConflictException('Role name already exists');
      }
      throw new InternalServerErrorException();
    }
  }

  async update(id: string, payload: Roles): Promise<void> {
    await this.RolesRepository.update(id, payload);
  }

  async delete(id: string): Promise<void> {
    await this.RolesRepository.delete(id);
  }

  deactive() {}

  activate() {}
}
