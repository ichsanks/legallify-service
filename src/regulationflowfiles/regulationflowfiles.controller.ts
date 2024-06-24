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
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { Regulationflowfiles } from './regulationflowfiles.entity';
import { RegulationflowfilesService } from './regulationflowfiles.service';

@Controller('regulationflowfiles')
@UseGuards(JwtAuthGuard)
export class RegulationflowfilesController {
  constructor(
    private readonly RegulationflowfilesService: RegulationflowfilesService,
  ) {}

  @Get()
  findAll(): Promise<Regulationflowfiles[]> {
    return this.RegulationflowfilesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Regulationflowfiles> {
    return this.RegulationflowfilesService.findOne(id);
  }

  @Post()
  create(@Body() payload: Regulationflowfiles) {
    this.RegulationflowfilesService.create(payload);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() payload: Regulationflowfiles) {
    this.RegulationflowfilesService.update(id, payload);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    this.RegulationflowfilesService.delete(id);
  }
}
