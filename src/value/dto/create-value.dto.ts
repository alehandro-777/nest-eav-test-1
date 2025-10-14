
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
  IsPositive,
  IsInt,
} from 'class-validator';
import { Type } from 'class-transformer'; // <- обязательно

export class CreateValueDto {
  @Type(() => Date)
  @IsDate()
  @ApiProperty()
  ts:Date;

  @IsInt()
  @ApiProperty()
  entityId: number;

  @IsInt()
  @ApiProperty()
  attributeId:  number;

  @IsString()
  @ApiProperty()
  stringVal:  string;

  @IsOptional()
  @ApiProperty()
  numberVal:  number | null;

  @IsOptional()
  @ApiProperty()
  boolVal: boolean | null;

  @IsOptional()
  @ApiProperty()
  @Type(() => Date)
  @IsDate()
  dateVal:  Date | null;    
}
