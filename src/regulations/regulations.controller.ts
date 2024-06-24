import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UploadedFile,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { Regulations } from './regulations.entity';
import { RegulationsService } from './regulations.service';
import { diskStorage } from 'multer';

@Controller('regulations')
@UseGuards(JwtAuthGuard)
export class RegulationsController {
  constructor(private readonly regulationsService: RegulationsService) {}

  @Get()
  findAll(): Promise<Regulations[]> {
    return this.regulationsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Regulations> {
    return this.regulationsService.findOne(id);
  }

  @Post()
  @UseInterceptors(
    FileInterceptor('file', {
      storage: diskStorage({
        destination: './uploads',
        filename: (req, file, cb) => {
          const filename = `${Date.now()}-${file.originalname}`;
          cb(null, filename);
        },
      }),
    }),
  )
  create(
    @Body() payload: Regulations,
    @UploadedFile() file: Express.Multer.File,
  ) {
    this.regulationsService.create(payload, file);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() payload: Regulations) {
    this.regulationsService.update(id, payload);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    this.regulationsService.delete(id);
  }
}
