import { Module } from '@nestjs/common';
import { EntityService } from './entity.service';
import { EntityController } from './entity.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [EntityController],
  providers: [EntityService],
  imports: [PrismaModule],
})
export class EntityModule {}
