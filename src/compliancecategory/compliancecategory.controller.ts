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
import { Compliancecategory } from './compliancecategory.entity';
import { CompliancecategoryService } from './compliancecategory.service';

@Controller('compliancecategory')
@UseGuards(JwtAuthGuard)
export class CompliancecategoryController {
  constructor(
    private readonly compliancecategoryService: CompliancecategoryService,
  ) {}

  @Get()
  findAll(): Promise<Compliancecategory[]> {
    return this.compliancecategoryService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Compliancecategory> {
    return this.compliancecategoryService.findOne(id);
  }

  @Post()
  create(@Body() payload: Compliancecategory) {
    this.compliancecategoryService.create(payload);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() payload: Compliancecategory) {
    this.compliancecategoryService.update(id, payload);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    this.compliancecategoryService.delete(id);
  }
}
