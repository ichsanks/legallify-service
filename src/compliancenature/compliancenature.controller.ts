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
import { Compliancenature } from './compliancenature.entity';
import { CompliancenatureService } from './compliancenature.service';

@Controller('compliancenature')
@UseGuards(JwtAuthGuard)
export class CompliancenatureController {
  constructor(
    private readonly compliancenatureService: CompliancenatureService,
  ) {}

  @Get()
  findAll(): Promise<Compliancenature[]> {
    return this.compliancenatureService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Compliancenature> {
    return this.compliancenatureService.findOne(id);
  }

  @Post()
  create(@Body() payload: Compliancenature) {
    this.compliancenatureService.create(payload);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() payload: Compliancenature) {
    this.compliancenatureService.update(id, payload);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    this.compliancenatureService.delete(id);
  }
}
