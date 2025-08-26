import { PartialType } from '@nestjs/mapped-types';
import { CreateShoppingListDto } from './create-shopping-list.dto';
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class UpdateShoppingListDto extends PartialType(CreateShoppingListDto) {
  @ApiProperty({
    description: 'O título da lista de compras a ser atualizado.',
    example: 'Compras da Semana 2',
  })
  @IsString()
  @IsNotEmpty()
  title: string;
}
