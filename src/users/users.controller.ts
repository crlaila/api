import { Controller, Post, Body } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('users') //responsável por definir o caminho da rota
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post() // responsável por definir o método HTTP
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }
}
