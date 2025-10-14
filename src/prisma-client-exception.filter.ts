// prisma-client-exception.filter.ts
import { ExceptionFilter, Catch, ArgumentsHost, HttpStatus } from '@nestjs/common';
import { Prisma } from './!generated/prisma';
import { Response } from 'express';

@Catch(Prisma.PrismaClientKnownRequestError, Prisma.PrismaClientValidationError)
export class PrismaClientExceptionFilter implements ExceptionFilter {
  catch(exception: Prisma.PrismaClientKnownRequestError, host: ArgumentsHost) {
    
    const ctx = host.switchToHttp();

    const response = ctx.getResponse<Response>();

    console.error("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA")

    if (exception instanceof Prisma.PrismaClientValidationError) {
      return response.status(400).json({
        statusCode: 400,
        message: 'Некорректные данные. Проверь формат и типы полей.',
      });
    }

    const message = exception.message.replace(/\n/g, '');

    let statusCode = HttpStatus.INTERNAL_SERVER_ERROR;
    //let message = 'Internal server error';

    switch (exception.code) {
      case 'P2000': // value too long
        statusCode = HttpStatus.BAD_REQUEST;
        message;
        break;
      case 'P2002': // unique constraint failed
        statusCode = HttpStatus.CONFLICT;
        message;
        break;
      case 'P2025': // record not found
        statusCode = HttpStatus.NOT_FOUND;
        message;
        break;
      default:
        console.error('Unhandled Prisma error:', exception);
        //super.catch(exception, host);
    }

    response.status(statusCode).json({
      statusCode,
      message,
      error: 'PrismaClientKnownRequestError',
    });
    
  }
}
