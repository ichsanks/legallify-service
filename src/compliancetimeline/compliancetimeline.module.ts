import { Module } from '@nestjs/common';
import { CompliancetimelineService } from './compliancetimeline.service';
import { CompliancetimelineController } from './compliancetimeline.controller';

@Module({
  providers: [CompliancetimelineService],
  controllers: [CompliancetimelineController]
})
export class CompliancetimelineModule {}
