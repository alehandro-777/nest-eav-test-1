import { PartialType } from '@nestjs/swagger';
import { CreateEntityDto } from './create-entity.dto';
import { ApiProperty } from '@nestjs/swagger';
import {
  IsNumber,
  IsBoolean,
  IsNotEmpty,
  IsOptional,
  IsString,
  MaxLength,
  MinLength,
  IsDate,

} from 'class-validator';
import { Type } from 'class-transformer'; // <- обязательно

export class UpdateEntityDto extends PartialType(CreateEntityDto) {
    @ApiProperty()
    id:number;
}
