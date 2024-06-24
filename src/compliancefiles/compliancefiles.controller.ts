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
import { Compliancefiles } from './compliancefiles.entity';
import { CompliancefilesService } from './compliancefiles.service';

@Controller('compliancefiles')
@UseGuards(JwtAuthGuard)
export class CompliancefilesController {
  constructor(
    private readonly compliancefilesService: CompliancefilesService,
  ) {}

  @Get()
  findAll(): Promise<Compliancefiles[]> {
    return this.compliancefilesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Compliancefiles> {
    return this.compliancefilesService.findOne(id);
  }

  @Post()
  create(@Body() payload: Compliancefiles) {
    this.compliancefilesService.create(payload);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() payload: Compliancefiles) {
    this.compliancefilesService.update(id, payload);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    this.compliancefilesService.delete(id);
  }
}
