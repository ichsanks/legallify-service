import { Module } from '@nestjs/common';
import { OrganizationsService } from './organizations.service';
import { OrganizationsController } from './organizations.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Organizations } from './organizations.entity';
import { Files } from 'src/files/files.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Organizations, Files])],
  providers: [OrganizationsService],
  controllers: [OrganizationsController],
  exports: [OrganizationsService, TypeOrmModule],
})
export class OrganizationsModule {}
