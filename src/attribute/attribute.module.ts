import { Module } from '@nestjs/common';
import { AttributeService } from './attribute.service';
import { AttributeController } from './attribute.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [AttributeController],
  providers: [AttributeService],
  imports: [PrismaModule],
})
export class AttributeModule {}
