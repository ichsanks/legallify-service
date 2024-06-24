import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { OrganizationsModule } from './organizations/organizations.module';
import { UsersModule } from './users/users.module';
import { CompliancesModule } from './compliances/compliances.module';
import { RegulationsModule } from './regulations/regulations.module';
import { RegulationflowModule } from './regulationflow/regulationflow.module';
import { CompliancecategoryModule } from './compliancecategory/compliancecategory.module';
import { CompliancenatureModule } from './compliancenature/compliancenature.module';
import { CompliancelegalbasisModule } from './compliancelegalbasis/compliancelegalbasis.module';
import { ComplianceflowModule } from './complianceflow/complianceflow.module';
import { CompliancetimelineModule } from './compliancetimeline/compliancetimeline.module';
import { CompliancefilesModule } from './compliancefiles/compliancefiles.module';
import { APP_GUARD } from '@nestjs/core';
import { RolesGuard } from './roles/roles.guard';
import { CompaniesModule } from './companies/companies.module';
import { ComplianceflowfilesModule } from './complianceflowfiles/complianceflowfiles.module';
import { RegulationflowfilesModule } from './regulationflowfiles/regulationflowfiles.module';
import { RolesModule } from './roles/roles.module';
import { FilesModule } from './files/files.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'legallify',
      autoLoadEntities: true,
      logging: true,
      synchronize: true, // Note: In production, consider using migrations instead of synchronize: true
    }),
    UsersModule,
    AuthModule,
    OrganizationsModule,
    CompliancesModule,
    RegulationsModule,
    RegulationflowModule,
    RegulationflowfilesModule,
    CompliancecategoryModule,
    CompliancenatureModule,
    CompliancelegalbasisModule,
    ComplianceflowModule,
    ComplianceflowfilesModule,
    CompliancetimelineModule,
    CompliancefilesModule,
    CompaniesModule,
    RolesModule,
    FilesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
