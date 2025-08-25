import { IsString, IsEmail, MinLength, IsNotEmpty } from 'class-validator'; // Você precisará instalar

export class SignUpDTO {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsEmail()
  @IsNotEmpty()
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
