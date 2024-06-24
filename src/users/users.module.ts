import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { Users } from './users.entity';
import { Roles } from '../roles/roles.entity';
import { RolesModule } from '../roles/roles.module';
import { OrganizationsModule } from 'src/organizations/organizations.module';
import { CompaniesModule } from 'src/companies/companies.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Users, Roles]),
    RolesModule,
    OrganizationsModule,
    CompaniesModule,
  ],
  providers: [UsersService],
  controllers: [UsersController],
  exports: [UsersService],
})
export class UsersModule {}
