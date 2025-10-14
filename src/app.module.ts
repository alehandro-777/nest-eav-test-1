
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { providePrismaClientExceptionFilter } from 'nestjs-prisma';
import { HttpStatus, Module } from '@nestjs/common';
import { EntityModule } from './entity/entity.module';
import { AttributeModule } from './attribute/attribute.module';
import { ValueModule } from './value/value.module';
import { ValueController } from './value/value.controller';
import { EntityController } from './entity/entity.controller';
import { AttributeController } from './attribute/attribute.controller';



@Module({
  imports: [PrismaModule, EntityModule, AttributeModule, ValueModule, ],
  controllers: [AppController],
  providers: [AppService, providePrismaClientExceptionFilter({
      // Prisma Error Code: HTTP Status Response
      P2000: HttpStatus.BAD_REQUEST,
      P2002: HttpStatus.CONFLICT,
      P2025: HttpStatus.NOT_FOUND,
    })
  ],
})
export class AppModule {}
