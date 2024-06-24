import { Module } from '@nestjs/common';
import { CompaniesService } from './companies.service';
import { CompaniesController } from './companies.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Companies } from './companies.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Companies])],
  providers: [CompaniesService],
  controllers: [CompaniesController],
  exports: [CompaniesService, TypeOrmModule],
})
export class CompaniesModule {}
