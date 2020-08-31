import { IsNotEmpty, IsString } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class BaseCurrencyDto {
    @IsNotEmpty()
    @IsString()
    @ApiProperty({
        type: String,
        description: 'The type of currency you entries',
        required: true,
        example: 'USD'
    })
    baseCurrency: string;
}