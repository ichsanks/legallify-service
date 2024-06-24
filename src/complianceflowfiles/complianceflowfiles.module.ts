import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Complianceflowfiles } from './complianceflowfiles.entity';
import { ComplianceflowfilesController } from './complianceflowfiles.controller';
import { ComplianceflowfilesService } from './complianceflowfiles.service';

@Module({
  imports: [TypeOrmModule.forFeature([Complianceflowfiles])],
  controllers: [ComplianceflowfilesController],
  exports: [ComplianceflowfilesService],
  providers: [ComplianceflowfilesService],
})
export class ComplianceflowfilesModule {}
