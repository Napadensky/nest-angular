import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  ValidationPipe,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { getOneUserDto } from './dto/getOne-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }
  @Get(':id')
  async findOne(
    @Param(new ValidationPipe({ whitelist: true })) id: getOneUserDto,
  ) {
    const user = await this.usersService.findOne(id.id);
    return user;
  }
}
