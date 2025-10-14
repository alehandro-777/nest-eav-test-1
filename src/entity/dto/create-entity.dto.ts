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
import { Type } from 'class-transformer'; 

export class CreateEntityDto {
    @ApiProperty()
    name:string;
}
