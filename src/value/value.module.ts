import { Module } from '@nestjs/common';
import { ValueService } from './value.service';
import { ValueController } from './value.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [ValueController],
  providers: [ValueService],
  imports: [PrismaModule],
})
export class ValueModule {}
