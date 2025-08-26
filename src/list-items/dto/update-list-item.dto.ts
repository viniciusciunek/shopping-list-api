import { PartialType } from '@nestjs/mapped-types';
import { CreateListItemDto } from './create-list-item.dto';
import { IsBoolean } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateListItemDto extends PartialType(CreateListItemDto) {
  @IsBoolean()
  @ApiProperty({
    description: 'Se o item já foi comprado.',
    example: 'True',
  })
  checked: boolean;
}
