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
import { Complianceflowfiles } from './complianceflowfiles.entity';
import { ComplianceflowfilesService } from './complianceflowfiles.service';

@Controller('complianceflowfiles')
@UseGuards(JwtAuthGuard)
export class ComplianceflowfilesController {
  constructor(
    private readonly ComplianceflowfilesService: ComplianceflowfilesService,
  ) {}

  @Get()
  findAll(): Promise<Complianceflowfiles[]> {
    return this.ComplianceflowfilesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Complianceflowfiles> {
    return this.ComplianceflowfilesService.findOne(id);
  }

  @Post()
  create(@Body() payload: Complianceflowfiles) {
    this.ComplianceflowfilesService.create(payload);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() payload: Complianceflowfiles) {
    this.ComplianceflowfilesService.update(id, payload);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    this.ComplianceflowfilesService.delete(id);
  }
}
