import { PartialType } from '@nestjs/swagger';
import { CreateValueDto } from './create-value.dto';
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


export class UpdateValueDto extends PartialType(CreateValueDto) {
      @IsNumber()
      id:number;
}
