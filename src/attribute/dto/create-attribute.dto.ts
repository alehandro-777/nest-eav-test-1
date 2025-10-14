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


export class CreateAttributeDto {
    @ApiProperty()
    @IsNumber()
  typeId :   number;
    @ApiProperty()
    @IsNumber()
  rangeId  : number;
    @ApiProperty()
    @IsNumber()
  KVSetId?  : number;
}
