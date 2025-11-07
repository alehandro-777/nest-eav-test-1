import { Module } from '@nestjs/common';
import { TemplateService } from './template.service';
import { TemplateController } from './template.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { QueryModule } from 'src/query/query.module';

@Module({
  controllers: [TemplateController],
  providers: [TemplateService],
  imports: [PrismaModule, QueryModule],
})
export class TemplateModule {}
