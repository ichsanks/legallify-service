import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { Roles } from './roles.entity';
import { RolesService } from './roles.service';

@Controller('roles')
@UseGuards(JwtAuthGuard)
export class RolesController {
  constructor(private rolesService: RolesService) {}

  @Get()
  findAll(): Promise<Roles[]> {
    return this.rolesService.findAll();
  }

  @Post()
  async create(@Body() payload: Roles) {
    try {
      await this.rolesService.create(payload);
    } catch (error) {
      throw error;
    }
  }
}
