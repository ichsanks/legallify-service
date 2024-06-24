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
import { Complianceflow } from './complianceflow.entity';
import { ComplianceflowService } from './complianceflow.service';

@Controller('complianceflow')
@UseGuards(JwtAuthGuard)
export class ComplianceflowController {
  constructor(private readonly complianceflowService: ComplianceflowService) {}

  @Get()
  findAll(): Promise<Complianceflow[]> {
    return this.complianceflowService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Complianceflow> {
    return this.complianceflowService.findOne(id);
  }

  @Post()
  create(@Body() payload: Complianceflow) {
    this.complianceflowService.create(payload);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() payload: Complianceflow) {
    this.complianceflowService.update(id, payload);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    this.complianceflowService.delete(id);
  }
}
