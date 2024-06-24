import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Compliancelegalbasis } from './compliancelegalbasis.entity';
import { CompliancelegalbasisController } from './compliancelegalbasis.controller';
import { CompliancelegalbasisService } from './compliancelegalbasis.service';

@Module({
  imports: [TypeOrmModule.forFeature([Compliancelegalbasis])],
  controllers: [CompliancelegalbasisController],
  exports: [CompliancelegalbasisService],
  providers: [CompliancelegalbasisService],
})
export class CompliancelegalbasisModule {}
