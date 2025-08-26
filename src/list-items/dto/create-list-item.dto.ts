import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsInt, Min, IsOptional } from 'class-validator';

export class CreateListItemDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: 'Nome do item a ser adicionado na lista.',
    example: 'Feijão Carioca',
  })
  description: string;

  @IsInt()
  @Min(1)
  @IsOptional()
  @ApiProperty({
    description: 'Quantidade do item a ser adicionado la lista.',
    example: '2',
  })
  quantity?: number;
}
