import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  ValidationPipe,
  Res,
  Req,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { getOneUserDto } from './dto/getOne-user.dto';
import { Response } from 'express';

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
    @Req() _req: Request,
    @Res() res: Response,
  ) {
    const user = await this.usersService.findOne(id.id);

    return res.status(404).json(
      user ?? {
        statusCode: 404,
        message: [`User with id ${id.id} not found`],
        error: 'Bad Request',
      },
    );
  }
}
