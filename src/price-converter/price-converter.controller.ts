import { Controller, Get, Post, Param, Body, UsePipes, ValidationPipe, Req, Query } from '@nestjs/common';
import { CurrencyService } from './services/currency.service';
import { CurrencyRatesDto } from './dto/currency-rates.dto';
import { TransactModel } from './models/transact.model';
import { TransactService } from './services/transact.service';
import { TransactDto } from './dto/transact.dto';
import { BaseCurrencyDto } from './dto/base-currency.dto';
import { GetUserDto } from './dto/get-user.dto';
import { ApiResponse } from '@nestjs/swagger';

@Controller('transact')
export class PriceConverterController {

    constructor(
        private readonly currencyService: CurrencyService,
        private readonly transactionService: TransactService
    ) { }


    @UsePipes(ValidationPipe)
    @Get('rates')
    async getRates(@Query() baseCurrency: BaseCurrencyDto): Promise<CurrencyRatesDto> {
        return await this.currencyService.getCurrencys(baseCurrency.baseCurrency);
    }

    @Get('get-all-transactions')
    async getAllTransactions(): Promise<TransactModel[]> {
        return await this.transactionService.getAllTransaction();
    }

    @UsePipes(ValidationPipe)
    @Get('get-transactions-by-userid')
    async getTransactionById(@Query() userId: GetUserDto): Promise<TransactModel[]> {
        return await this.transactionService.getTransactionByUserId(userId.userId);
    }

    @ApiResponse({ status: 201, description: 'The record has been successfully created.' })
    @ApiResponse({ status: 400, description: 'Some problem with params..' })
    @UsePipes(ValidationPipe)
    @Post('create-transaction')
    async createTransaction(@Body() transactDto: TransactDto): Promise<TransactModel> {
        return this.transactionService.createTransaction(transactDto);
    }
}
