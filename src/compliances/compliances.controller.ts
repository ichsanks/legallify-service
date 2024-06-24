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
import { Compliances } from './compliances.entity';
import { CompliancesService } from './compliances.service';

@Controller('compliances')
@UseGuards(JwtAuthGuard)
export class CompliancesController {
  constructor(private readonly compliancesService: CompliancesService) {}

  @Get()
  findAll(): Promise<Compliances[]> {
    return this.compliancesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Compliances> {
    return this.compliancesService.findOne(id);
  }

  @Post()
  create(@Body() payload: Compliances) {
    this.compliancesService.create(payload);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() payload: Compliances) {
    this.compliancesService.update(id, payload);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    this.compliancesService.delete(id);
  }
}
