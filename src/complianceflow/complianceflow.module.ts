import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Complianceflow } from './complianceflow.entity';
import { ComplianceflowController } from './complianceflow.controller';
import { ComplianceflowService } from './complianceflow.service';

@Module({
  imports: [TypeOrmModule.forFeature([Complianceflow])],
  controllers: [ComplianceflowController],
  exports: [ComplianceflowService],
  providers: [ComplianceflowService],
})
export class ComplianceflowModule {}
