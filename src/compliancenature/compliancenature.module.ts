import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Compliancenature } from './compliancenature.entity';
import { CompliancenatureController } from './compliancenature.controller';
import { CompliancenatureService } from './compliancenature.service';

@Module({
  imports: [TypeOrmModule.forFeature([Compliancenature])],
  controllers: [CompliancenatureController],
  exports: [CompliancenatureService],
  providers: [CompliancenatureService],
})
export class CompliancenatureModule {}
