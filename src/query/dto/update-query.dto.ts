import { PartialType } from '@nestjs/swagger';
import { CreateQueryDto } from './create-query.dto';
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

export class UpdateQueryDto extends PartialType(CreateQueryDto) {
    @ApiProperty()
    id: number;
}
