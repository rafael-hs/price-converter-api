import { IsNotEmpty, IsNumber } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class GetUserDto {
    @IsNotEmpty()
    @ApiProperty({
        type: Number,
        description: 'The number id of a user',
        required: true,
        example: 1
    })
    userId: number;
}