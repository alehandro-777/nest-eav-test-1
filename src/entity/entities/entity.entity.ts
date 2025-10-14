import { Entity } from '../../!generated/prisma/';
import { ApiProperty } from '@nestjs/swagger';

export class EntityE implements Entity {
    @ApiProperty()
    name: string;
    @ApiProperty()
    id: number;
    @ApiProperty()
    createdAt: Date;
}
