import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Compliancecategory } from './compliancecategory.entity';
import { CompliancecategoryController } from './compliancecategory.controller';
import { CompliancecategoryService } from './compliancecategory.service';

@Module({
  imports: [TypeOrmModule.forFeature([Compliancecategory])],
  controllers: [CompliancecategoryController],
  exports: [CompliancecategoryService],
  providers: [CompliancecategoryService],
})
export class CompliancecategoryModule {}
