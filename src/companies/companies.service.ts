import {
  ConflictException,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { registerUserDto } from 'src/users/users.dto';
import { QueryRunner, Repository } from 'typeorm';
import { RegisterCompanyDto } from './companies.dto';
import { Companies } from './companies.entity';

@Injectable()
export class CompaniesService {
  constructor(
    @InjectRepository(Companies)
    private CompaniesRepository: Repository<Companies>,
  ) {}

  findAll(): Promise<Companies[]> {
    return this.CompaniesRepository.find();
  }

  findOne(id: string): Promise<Companies> {
    return this.CompaniesRepository.findOne({ where: { id } });
  }

  async create(payload: RegisterCompanyDto): Promise<Companies> {
    const newCompany = this.CompaniesRepository.create(payload);

    try {
      return await this.CompaniesRepository.save(newCompany);
    } catch (error) {
      if (error.code === 'ER_DUP_ENTRY' || error.errno === 1062) {
        throw new ConflictException('Company name already exists');
      }
      throw new InternalServerErrorException();
    }
  }

  async createWithinTransaction(
    queryRunner: QueryRunner,
    payload: RegisterCompanyDto,
  ): Promise<Companies> {
    const newCompany = queryRunner.manager.create(Companies, payload);

    try {
      return await queryRunner.manager.save(newCompany);
    } catch (error) {
      if (error.code === 'ER_DUP_ENTRY' || error.errno === 1062) {
        throw new ConflictException('Company name already exists');
      }
      throw new InternalServerErrorException();
    }
  }

  async update(id: string, payload: Companies): Promise<void> {
    await this.CompaniesRepository.update(id, payload);
  }

  async delete(id: string): Promise<void> {
    await this.CompaniesRepository.delete(id);
  }

  deactive() {}

  activate() {}

  toRegisterCompanyDto(user: registerUserDto): RegisterCompanyDto {
    const {
      username,
      password,
      email,
      fullname: pic,
      phone: pic_number,
      company: name,
      ...companyData
    } = user;
    return { name, pic, pic_number, ...companyData }; // Include only desired fields
  }
}
