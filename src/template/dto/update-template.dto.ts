import { PartialType } from '@nestjs/swagger';
import { CreateTemplateDto } from './create-template.dto';
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

export class UpdateTemplateDto extends PartialType(CreateTemplateDto) {
        @ApiProperty()
        id: number;
}
