import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RegulationsController } from './regulations.controller';
import { Regulations } from './regulations.entity';
import { RegulationsService } from './regulations.service';

@Module({
  imports: [TypeOrmModule.forFeature([Regulations])],
  providers: [RegulationsService],
  controllers: [RegulationsController],
  exports: [RegulationsService],
})
export class RegulationsModule {}
