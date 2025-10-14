import { Controller, Get, Post, Body, Patch, Param, Delete, Query, Req } from '@nestjs/common';
import { ValueService } from './value.service';
import { CreateValueDto } from './dto/create-value.dto';
import { UpdateValueDto } from './dto/update-value.dto';
import type { Request } from 'express';

@Controller('value')
export class ValueController {
  constructor(private readonly valueService: ValueService) {}

  @Post()
  create(@Body() createValueDto: CreateValueDto) {
    return this.valueService.create(createValueDto);
  }

  @Get("all")
  findAll() {
    return this.valueService.findAll();
  }

  @Get('one/:id')
  findOne(@Param('id') id: string) {
    return this.valueService.findOne(+id);
  }

  @Patch()
  update(@Body() createValueDto: CreateValueDto[]) {
    return this.valueService.update(createValueDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.valueService.remove(+id);
  }

  //--------------------------------------
  @Get("test")
  test(@Query('ts') ts:string, @Query('from') from:string, @Query('to') to:string, ) {
    return this.valueService.test(ts, from, to);
  }
}
