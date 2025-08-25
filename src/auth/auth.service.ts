import { Injectable, UnauthorizedException } from '@nestjs/common';
import { SignInDTO, SignUpDTO } from './dto/auth';
import { PrismaService } from 'src/prisma/prisma.service';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private prismaService: PrismaService,
    private jwtService: JwtService,
  ) {}

  async signup(data: SignUpDTO) {
    const userExists = await this.prismaService.user.findUnique({
      where: {
        email: data.email,
      },
    });

    if (userExists) {
      throw new UnauthorizedException(
        'Esse email já está cadastrado, tente fazer login.',
      );
    }

    const pwd = await bcrypt.hash(data.password, 10);

    const user = await this.prismaService.user.create({
      data: {
        ...data,
        password: pwd,
        role: 'admin',
      },
    });

    return {
      id: user.id,
      email: user.email,
      name: user.name,
      role: user.role,
    };
  }

  async signin(data: SignInDTO) {
    const user = await this.prismaService.user.findUnique({
      where: {
        email: data.email,
      },
    });

    if (!user) {
      throw new UnauthorizedException('E-mail ou senha inválidos!');
    }

    const passwordMatch = await bcrypt.compare(data.password, user.password);

    if (!passwordMatch) {
      throw new UnauthorizedException('E-mail ou senha inválidos!');
    }

    const token = await this.jwtService.signAsync({
      id: user.id,
      name: user.name,
      email: user.email,
    });

    return {
      user: {
        id: user.id,
        email: user.email,
        name: user.name,
        role: user.role,
      },
      token: token,
    };
  }
}
