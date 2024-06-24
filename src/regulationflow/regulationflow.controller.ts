import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { Regulationflow } from './regulationflow.entity';
import { RegulationflowService } from './regulationflow.service';

@Controller('regulationflow')
@UseGuards(JwtAuthGuard)
export class RegulationflowController {
  constructor(private readonly regulationflowService: RegulationflowService) {}

  @Get()
  findAll(): Promise<Regulationflow[]> {
    return this.regulationflowService.findAll();
  }

  @Post()
  create(@Body() payload: Regulationflow) {
    this.regulationflowService.create(payload);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() payload: Regulationflow) {
    this.regulationflowService.update(id, payload);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    this.regulationflowService.delete(id);
  }
}
