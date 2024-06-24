import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RegulationflowController } from './regulationflow.controller';
import { Regulationflow } from './regulationflow.entity';
import { RegulationflowService } from './regulationflow.service';

@Module({
  imports: [TypeOrmModule.forFeature([Regulationflow])],
  providers: [RegulationflowService],
  controllers: [RegulationflowController],
  exports: [RegulationflowService],
})
export class RegulationflowModule {}
