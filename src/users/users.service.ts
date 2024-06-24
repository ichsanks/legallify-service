import {
  ConflictException,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { QueryRunner, Repository } from 'typeorm';
import { createUserDto, UsersDto } from './users.dto';
import { Users } from './users.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(Users)
    private usersRepository: Repository<Users>,
  ) {}

  findAll(): Promise<Users[]> {
    return this.usersRepository.find({ relations: ['organizations'] });
  }

  findOne(id: string): Promise<Users> {
    return this.usersRepository.findOne({
      where: { id },
      relations: ['organizations'],
    });
  }

  findOneByUsername(username: string): Promise<Users> {
    return this.usersRepository.findOne({
      where: { username },
      relations: ['organizations', 'roles'],
    });
  }

  async create(payload: createUserDto): Promise<Users> {
    const newUser = this.usersRepository.create(payload);

    try {
      return await this.usersRepository.save(newUser);
    } catch (error) {
      if (error.code === 'ER_DUP_ENTRY' || error.errno === 1062) {
        throw new ConflictException('Username already exists');
      }
      throw new InternalServerErrorException();
    }
  }

  async createWithinTransaction(
    queryRunner: QueryRunner,
    payload: createUserDto,
  ): Promise<Users> {
    const newUser = queryRunner.manager.create(Users, payload);

    try {
      return await queryRunner.manager.save(newUser);
    } catch (error) {
      console.log({ error });
      if (error.code === 'ER_DUP_ENTRY' || error.errno === 1062) {
        throw new ConflictException('Username already exists');
      }
      throw new InternalServerErrorException();
    }
  }

  async update(id: string, user: Users): Promise<void> {
    await this.usersRepository.update(id, user);
  }

  async delete(id: string): Promise<void> {
    await this.usersRepository.delete(id);
  }

  deactive() {}

  activate() {}

  toUserDto(user: Users): UsersDto {
    const { username, roles } = user;
    return { username, roles }; // Include only desired fields
  }
}
