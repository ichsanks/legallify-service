import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Compliances } from './compliances.entity';
import { CompliancesController } from './compliances.controller';
import { CompliancesService } from './compliances.service';
import { OrganizationsModule } from 'src/organizations/organizations.module';
import { CompliancenatureModule } from 'src/compliancenature/compliancenature.module';
import { CompliancecategoryModule } from 'src/compliancecategory/compliancecategory.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Compliances]),
    OrganizationsModule,
    CompliancenatureModule,
    CompliancecategoryModule,
  ],
  controllers: [CompliancesController],
  exports: [CompliancesService],
  providers: [CompliancesService],
})
export class CompliancesModule {}
