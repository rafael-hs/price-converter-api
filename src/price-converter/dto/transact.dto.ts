import { ApiProperty } from "@nestjs/swagger";
import { Double } from "typeorm";
import { IsEmail, IsNotEmpty, isNotEmpty, IsNumber } from 'class-validator';

export class TransactDto {
    @IsNotEmpty()
    @IsNumber()
    @ApiProperty({
        type: Number,
        description: 'The id of a user',
        required: true,
        example: 54
    })
    userId: number;

    @IsNotEmpty()
    @ApiProperty({
        type: String,
        description: 'The type of currency you entries',
        required: true,
        example: 'USD'
    })
    sourceCurrency: string;

    @IsNotEmpty()
    @IsNumber()
    @ApiProperty({
        type: Double,
        description: 'The entry value',
        required: true,
        example: 13.54
    })
    sourceValue: number;

    @IsNotEmpty()
    @ApiProperty({
        type: String,
        description: 'The target currency you want',
        required: true,
        example: 'BRL'
    })
    targetCurrency: string;
}