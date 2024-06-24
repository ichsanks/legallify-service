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
import { Users } from './users.entity';
import { UsersService } from './users.service';

@Controller('users')
@UseGuards(JwtAuthGuard)
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  findAll(): Promise<Users[]> {
    return this.usersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Users> {
    return this.usersService.findOne(id);
  }

  @Post()
  async create(@Body() user: Users) {
    this.usersService.create(user);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateUser: Users) {
    this.usersService.update(id, updateUser);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    this.usersService.delete(id);
  }
}
