import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Compliancefiles } from './compliancefiles.entity';
import { CompliancefilesController } from './compliancefiles.controller';
import { CompliancefilesService } from './compliancefiles.service';

@Module({
  imports: [TypeOrmModule.forFeature([Compliancefiles])],
  controllers: [CompliancefilesController],
  exports: [CompliancefilesService],
  providers: [CompliancefilesService],
})
export class CompliancefilesModule {}
