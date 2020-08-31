import { IsNotEmpty } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class IdDeleteDto {
    @IsNotEmpty()
    @ApiProperty({
        type: Number,
        description: 'The number id on database',
        required: true,
        example: 1
    })
    id: number;
}