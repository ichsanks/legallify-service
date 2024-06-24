import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Regulations } from './regulations.entity';

@Injectable()
export class RegulationsService {
  constructor(
    @InjectRepository(Regulations)
    private regulationsRepository: Repository<Regulations>,
  ) {}

  findAll(): Promise<Regulations[]> {
    return this.regulationsRepository.find();
  }

  findOne(id: string): Promise<Regulations> {
    return this.regulationsRepository.findOne({
      where: { id },
      relations: ['regulationflow'],
    });
  }

  findOneByTitle(title: string): Promise<Regulations> {
    return this.regulationsRepository.findOne({
      where: { title },
      relations: ['regulationflow'],
    });
  }

  async create(payload: Regulations, file: Express.Multer.File): Promise<void> {
    const { title, type, released_date = '' } = payload;

    const regulation = new Regulations();
    regulation.title = title;
    regulation.status = 'ACTIVE';
    regulation.type = type;
    regulation.released_date = released_date;
    regulation.filepath = file ? file.path : null;

    await this.regulationsRepository.save(regulation);
  }

  async update(id: string, payload: Regulations): Promise<void> {
    await this.regulationsRepository.update(id, payload);
  }

  async delete(id: string): Promise<void> {
    await this.regulationsRepository.delete(id);
  }

  deactive() {}

  activate() {}
}
