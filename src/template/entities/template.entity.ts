import { Template } from '../../!generated/prisma/';
import { ApiProperty } from '@nestjs/swagger';

export class TemplateE implements Template {
    @ApiProperty()
    name: string;
    @ApiProperty()
    id: number;
}
