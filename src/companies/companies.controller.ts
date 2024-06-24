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
import { Companies } from './companies.entity';
import { CompaniesService } from './companies.service';

@Controller('Companies')
@UseGuards(JwtAuthGuard)
export class CompaniesController {
  constructor(private readonly CompaniesService: CompaniesService) {}

  @Get()
  findAll(): Promise<Companies[]> {
    return this.CompaniesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Companies> {
    return this.CompaniesService.findOne(id);
  }

  @Post()
  async create(@Body() payload: Companies) {
    try {
      await this.CompaniesService.create(payload);
    } catch (error) {
      throw error;
    }
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() payload: Companies) {
    this.CompaniesService.update(id, payload);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    this.CompaniesService.delete(id);
  }
}
