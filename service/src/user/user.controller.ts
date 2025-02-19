import { Body, Controller, Post, UsePipes, ValidationPipe, Get } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('users')
export class UserController {
  constructor(private readonly prisma: PrismaService) {}

  @Get()
  async getUsers() {
    return this.prisma.user.findMany();
  }

  @Post()
  @UsePipes(new ValidationPipe()) // ここでバリデーション適用
  async createUser(@Body() createUserDto: CreateUserDto) {
    return this.prisma.user.create({
      data: { name: createUserDto.name, email: createUserDto.email },
    });
  }
}