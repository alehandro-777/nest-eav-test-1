import { HttpAdapterHost, NestFactory, Reflector  } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { ValidationPipe, ClassSerializerInterceptor } from '@nestjs/common';
import { HttpStatus } from '@nestjs/common';


//import { PrismaClientExceptionFilter } from './prisma-client-exception.filter';
import { PrismaClientExceptionFilter } from 'nestjs-prisma';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

//validator
//app.useGlobalPipes(new ValidationPipe());
app.useGlobalPipes(new ValidationPipe({ 
    whitelist: true,
  transform: true,  // Преобразует строку в Date
  forbidNonWhitelisted: true,
}));

const { httpAdapter } = app.get(HttpAdapterHost);
//global error handle
//app.useGlobalFilters(new PrismaClientExceptionFilter());

//for Exclude
app.useGlobalInterceptors(new ClassSerializerInterceptor(app.get(Reflector)));

app.useGlobalFilters(
  new PrismaClientExceptionFilter(
  httpAdapter, 
  {
      // Prisma Error Code: HTTP Status Response
      P2000: HttpStatus.BAD_REQUEST,
      P2002: HttpStatus.CONFLICT,
      P2025: HttpStatus.NOT_FOUND,
  }));



///-- swagler
  const config = new DocumentBuilder()
    .setTitle('Fuck')
    .setDescription('The ... API description')
    .setVersion('0.1')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
//--------
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
