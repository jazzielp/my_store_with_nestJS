import {
  Controller,
  Get,
  Post,
  Param,
  Body,
  Delete,
  Put,
  ParseIntPipe,
} from '@nestjs/common';
import { UsersService } from '../services/users.service';
import { CreateUserDto, UpdateUserDto } from '../dtos/user.dto';

@Controller('users')
export class UsersController {
  constructor(private userService: UsersService) {}

  @Get()
  getAll() {
    return {
      message: this.userService.findAll(),
      data: '',
    };
  }

  @Get(':id')
  getOne(@Param('id', ParseIntPipe) id: number) {
    return {
      message: this.userService.findOne(),
      data: id,
    };
  }

  @Post()
  post(@Body() payload: CreateUserDto) {
    return {
      message: this.userService.create(),
      data: payload,
    };
  }

  @Put(':id')
  put(@Param('id', ParseIntPipe) id: number, @Body() payload: UpdateUserDto) {
    return {
      message: this.userService.update(),
      data: { payload, id },
    };
  }

  @Delete(':id')
  delete(@Param('id', ParseIntPipe) id: number) {
    return {
      message: this.userService.delete(),
      data: id,
    };
  }
}
