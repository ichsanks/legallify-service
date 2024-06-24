import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Regulationflowfiles } from './regulationflowfiles.entity';
import { RegulationflowfilesController } from './regulationflowfiles.controller';
import { RegulationflowfilesService } from './regulationflowfiles.service';

@Module({
  imports: [TypeOrmModule.forFeature([Regulationflowfiles])],
  controllers: [RegulationflowfilesController],
  exports: [RegulationflowfilesService],
  providers: [RegulationflowfilesService],
})
export class RegulationflowfilesModule {}
