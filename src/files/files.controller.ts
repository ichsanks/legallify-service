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
import { Files } from './Files.entity';
import { FilesService } from './Files.service';

@Controller('Files')
@UseGuards(JwtAuthGuard)
export class FilesController {
  constructor(private readonly FilesService: FilesService) {}

  @Get()
  findAll(): Promise<Files[]> {
    return this.FilesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Files> {
    return this.FilesService.findOne(id);
  }

  @Post()
  create(@Body() payload: Files) {
    this.FilesService.create(payload);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() payload: Files) {
    this.FilesService.update(id, payload);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    this.FilesService.delete(id);
  }
}
