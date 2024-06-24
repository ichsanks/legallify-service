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
import { Organizations } from './organizations.entity';
import { OrganizationsService } from './organizations.service';

@Controller('organizations')
@UseGuards(JwtAuthGuard)
export class OrganizationsController {
  constructor(private readonly organizationsService: OrganizationsService) {}

  @Get()
  findAll(): Promise<Organizations[]> {
    return this.organizationsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Organizations> {
    return this.organizationsService.findOne(id);
  }

  @Post()
  create(@Body() payload: Organizations) {
    this.organizationsService.create(payload);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() payload: Organizations) {
    this.organizationsService.update(id, payload);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    this.organizationsService.delete(id);
  }
}
