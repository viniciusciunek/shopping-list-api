import { PartialType } from '@nestjs/mapped-types';
import { CreateListItemDto } from './create-list-item.dto';
import { IsBoolean } from 'class-validator';

export class UpdateListItemDto extends PartialType(CreateListItemDto) {
  @IsBoolean()
  checked: boolean;
}
