import { Injectable } from '@nestjs/common';
import { CreateAttributeDto } from './dto/create-attribute.dto';
import { UpdateAttributeDto } from './dto/update-attribute.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class AttributeService {
    constructor(private prisma: PrismaService) {}

  create(createAttributeDto: CreateAttributeDto) {
    return 'This action adds a new attribute';
  }

  findAll() {
    return this.prisma.attribute.findMany({ include:{ kVSet:{include:{values:true}}, range:true }});
  }

  findOne(id: number) {
    return `This action returns a #${id} attribute`;
  }

  update(id: number, updateAttributeDto: UpdateAttributeDto) {
    return `This action updates a #${id} attribute`;
  }

  remove(id: number) {
    return `This action removes a #${id} attribute`;
  }
}
