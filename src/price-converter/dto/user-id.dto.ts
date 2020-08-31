import { IsNotEmpty } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class UserIdDto {
    @IsNotEmpty()
    @ApiProperty({
        type: Number,
        description: 'The number id of a user',
        required: true,
        example: 1
    })
    userId: number;
}