import { IsNotEmpty, IsNumber } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";
import { Transform } from "class-transformer/decorators";

export class UserIdDto {
    @IsNotEmpty()
    @IsNumber()
    @Transform(value => Number(value))
    @ApiProperty({
        type: Number,
        description: 'The number id of a user',
        required: true,
        example: 1
    })
    userId: number;
}