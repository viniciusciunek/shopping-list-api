// src/users/users.controller.ts
import { Controller, Get, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { AdminGuard } from 'src/auth/guards/admin.guard';
import { AuthGuard } from 'src/auth/guards/auth.guard';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';

@ApiTags('Users (Admin)')
@ApiBearerAuth()
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  @ApiOperation({ summary: 'Lista todos os usuários (Apenas Admins)' })
  @ApiResponse({
    status: 200,
    description: 'Retorna um array com todos os usuários.',
  })
  @ApiResponse({ status: 403, description: 'Acesso negado.' })
  @UseGuards(AuthGuard, AdminGuard)
  findAll() {
    return this.usersService.findAll();
  }
}
