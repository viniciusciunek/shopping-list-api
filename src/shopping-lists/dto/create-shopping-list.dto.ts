import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty } from 'class-validator';

export class CreateShoppingListDto {
  @ApiProperty({
    description: 'O título da lista de compras',
    example: 'Compras da Semana',
  })
  @IsString()
  @IsNotEmpty()
  title: string;
}
