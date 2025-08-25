import { IsString, IsEmail, MinLength } from 'class-validator'; // Você precisará instalar

export class SignUpDTO {
  @IsString()
  name: string;

  @IsEmail()
  email: string;

  @IsString()
  @MinLength(8)
  password: string;
}

export class SignInDTO {
  @IsEmail()
  email: string;

  @IsString()
  password: string;
}
