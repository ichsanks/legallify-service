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
import { Compliancelegalbasis } from './compliancelegalbasis.entity';
import { CompliancelegalbasisService } from './compliancelegalbasis.service';

@Controller('compliancelegalbasis')
@UseGuards(JwtAuthGuard)
export class CompliancelegalbasisController {
  constructor(
    private readonly compliancelegalbasisService: CompliancelegalbasisService,
  ) {}

  @Get()
  findAll(): Promise<Compliancelegalbasis[]> {
    return this.compliancelegalbasisService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Compliancelegalbasis> {
    return this.compliancelegalbasisService.findOne(id);
  }

  @Post()
  create(@Body() payload: Compliancelegalbasis) {
    this.compliancelegalbasisService.create(payload);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() payload: Compliancelegalbasis) {
    this.compliancelegalbasisService.update(id, payload);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    this.compliancelegalbasisService.delete(id);
  }
}
