import { IsString, IsNotEmpty, IsInt, Min, IsOptional } from 'class-validator';

export class CreateListItemDto {
  @IsString()
  @IsNotEmpty()
  description: string;

  @IsInt()
  @Min(1)
  @IsOptional()
  quantity?: number;
}
