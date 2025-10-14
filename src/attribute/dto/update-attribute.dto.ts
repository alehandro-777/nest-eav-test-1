import { PartialType } from '@nestjs/swagger';
import { CreateAttributeDto } from './create-attribute.dto';
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
  isNumber,

} from 'class-validator';
import { Type } from 'class-transformer';

export class UpdateAttributeDto extends PartialType(CreateAttributeDto) {
        @ApiProperty()
        @IsNumber()
      typeId :   number;
}
