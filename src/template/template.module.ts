import { Module } from '@nestjs/common';
import { TemplateService } from './template.service';
import { TemplateController } from './template.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [TemplateController],
  providers: [TemplateService],
  imports: [PrismaModule],
})
export class TemplateModule {}
