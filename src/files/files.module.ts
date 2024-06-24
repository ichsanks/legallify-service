import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Files } from './Files.entity';
import { FilesController } from './Files.controller';
import { FilesService } from './Files.service';
import { OrganizationsModule } from 'src/organizations/organizations.module';
@Module({
  imports: [TypeOrmModule.forFeature([Files])],
  controllers: [FilesController],
  exports: [FilesService],
  providers: [FilesService],
})
export class FilesModule {}
