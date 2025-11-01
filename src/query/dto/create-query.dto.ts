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

export class CreateQueryDto {
    @ApiProperty()
    name: string;
    @ApiProperty()
    params: string;
}
