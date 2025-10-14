import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateValueDto } from './dto/create-value.dto';
import { UpdateValueDto } from './dto/update-value.dto';
import { PrismaService } from '../prisma/prisma.service';
import { Prisma } from '@prisma/client';


@Injectable()
export class ValueService {
  constructor(private prisma: PrismaService) {}

  create(createValueDto: CreateValueDto) {

    return this.prisma.value.upsert({
            where: {
              entityId_attributeId_ts: {                  // составной уникальный ключ
                entityId: createValueDto.entityId,
                attributeId: createValueDto.attributeId,
                ts: createValueDto.ts
              },
            },
            update: { 
              stringVal: createValueDto.stringVal, 
              numberVal:createValueDto.numberVal,
              boolVal:createValueDto.boolVal,
              dateVal:createValueDto.dateVal
            },
            create: {                   // создать, если нет
              entityId: createValueDto.entityId,
              attributeId: createValueDto.attributeId,
              ts: createValueDto.ts,
              stringVal: createValueDto.stringVal,
              numberVal:createValueDto.numberVal,
              boolVal:createValueDto.boolVal,
              dateVal:createValueDto.dateVal
            },
    });

  }

  findAll() {
    return this.prisma.value.findMany({ take:1000 });
  }

  findOne(id: number) {
    return `This action returns a #${id} value`;
  }

  update(createValueDto: CreateValueDto[]) {
  /*
    await prisma.$transaction([
      prisma.attributeValue.deleteMany({ where: { entityId: 42 } }),
      prisma.attributeValue.createMany({ data: [...] })
    ]);
  */
 
    return this.prisma.$transaction(createValueDto.map(value=> {
        return this.prisma.value.upsert({
            where: {
              entityId_attributeId_ts: {                  // составной уникальный ключ
                entityId: value.entityId,
                attributeId: value.attributeId,
                ts: value.ts,
              },
            },
            update: { 
              stringVal: value.stringVal, 
              numberVal:value.numberVal,
              boolVal:value.boolVal,
              dateVal:value.dateVal
            },
            create: {                   // создать, если нет
              entityId: value.entityId,
              attributeId: value.attributeId,
              ts: value.ts,
              stringVal: value.stringVal,
              numberVal:value.numberVal,
              boolVal:value.boolVal,
              dateVal:value.dateVal
            },
    });
    }));
  }

  remove(id: number) {
    return `This action removes a #${id} value`;
  }


  //----------- TEST
    async test(ts:string, from:string, to:string, ) {

    let djs = new Date(ts);
    let _from = new Date(from);
    let _to = new Date(to);    

    console.log(djs, _from, _to)

    let res = await this.query3(_from, _to);

    return this.transform1(res);  
  }

  query1(ts: Date)  {
    return  this.prisma.value.findMany(
      {
        where:{
          "entityId": { in: [1] },
          "attributeId": { in: [1] },
          "ts": ts
        }, 
        take:1000 
    });
  }
  //group 
  query2()  {
    return  this.prisma.value.groupBy({
        by: ['entityId'],
        _count: { _all: true },    
    });
  }
  //filter +range +  by IN + select fields
  query3(from:Date, to:Date,)  {
    return  this.prisma.value.findMany(
      {
        where:{
          "entityId": { in: [1,2,3,4,5] },
          "attributeId": { in: [1,] },
          "ts": { gte: from, lt: to  }
        }, 
        select: {
          ts: true,
          entityId: true,
          attributeId: true,
          numberVal: true,
          id: true,
        },
        orderBy:  {
          ts: 'asc',
        },
        take:1000 
    });
  }
  //aggregate func 
  query4(from:Date, to:Date,)  {
    return  this.prisma.value.aggregate(
      {
        where:{
          "entityId": { in: [1] },
          "attributeId": { in: [1] },
          "ts": { gte: from, lt: to  }
        }, 
          _avg: { numberVal: true },
          _sum: { numberVal: true },
    });
  } 
  //group + aggr func
  query5(from:Date, to:Date,)  {
    return  this.prisma.value.groupBy(
      {
        by: ['entityId'],
        where:{
          "entityId": { in: [1,2,3,4,5] },
          "attributeId": { in: [1] },
          "ts": { gte: from, lt: to  }
        }, 
          _avg: { numberVal: true },
          _sum: { numberVal: true },
          _count: true,
      });
  } 
  //group + having- выполняется после фильтрации
  query6(from:Date, to:Date,)  {
    return  this.prisma.value.groupBy(
      {
        by: ['entityId'],
        where:{
          "entityId": { in: [1,2,3,4,5] },
          "attributeId": { in: [1] },
          "ts": { gte: from, lt: to  }
        }, 
          _avg: { numberVal: true },
          _sum: { numberVal: true },
          _count: true,
        having: {
            numberVal: { _avg: { gt: 50 }, },
        },
      });
  } 
  // преобразование  в строки, группируем по времени: MAP -> key - ts, предполагаем, объект имеет одно значение атрибута
  transform1(eav: any[]): Map<string, any>  {
    return eav.reduce((map, currValue, currIndex) => {
      let key = currValue.ts.toISOString();
      if (!map.has(key)) map.set(key, { }); //начало новой строки
      let editableObject = map.get(key);
      editableObject[currValue.entityId] = currValue;           
      return map;
    }, new Map<string, any>());
  }
}
