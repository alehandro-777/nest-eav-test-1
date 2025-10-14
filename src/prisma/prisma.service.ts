// src/prisma/prisma.service.ts

import { INestApplication, Injectable } from '@nestjs/common';
import { PrismaClient } from '../!generated/prisma';

@Injectable()
export class PrismaService extends PrismaClient {
    dayjs = require('dayjs');
    customParseFormat = require("dayjs/plugin/customParseFormat");
}

