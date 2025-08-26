import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsEmail, MinLength, IsNotEmpty } from 'class-validator';

export class SignUpDTO {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: 'O nome completo do usuário',
    example: 'Fulano da Silva',
  })
  name: string;

  @IsEmail()
  @IsNotEmpty()
  @ApiProperty({
    description: 'O endereço de e-mail único do usuário',
    example: 'usuario@email.com',
  })
  email: string;

  @IsString()
  @MinLength(8)
  @ApiProperty({
    description: 'A senha do usuário, com no mínimo 8 caracteres',
    example: 'senhaForte123',
  })
  password: string;
}

export class SignInDTO {
  @IsEmail()
  @ApiProperty({
    description: 'O endereço de e-mail único do usuário',
    example: 'usuario@email.com',
  })
  email: string;

  @IsString()
  @ApiProperty({
    description: 'A senha do usuário, com no mínimo 8 caracteres',
    example: 'senhaForte123',
  })
  password: string;
}
