import { Controller, Get, Post, Param, Body } from '@nestjs/common';
import { CurrencyService } from './services/currency.service';
import { CurrencyRatesDto } from './dto/currency-rates.dto';
import { TransactModel } from './models/transact.model';
import { TransactService } from './services/transact.service';
import { TransactDto } from './dto/transact.dto';

@Controller('transact')
export class PriceConverterController {

    constructor(
        private readonly currencyService: CurrencyService,
        private readonly transactionService: TransactService
    ) { }

    @Get('rates/:base')
    async getRates(@Param('base') base: string): Promise<CurrencyRatesDto> {
        return await this.currencyService.getCurrencys(base);
    }

    @Get('get-all-transactions')
    async getAllTransactions(): Promise<TransactModel[]> {
        return await this.transactionService.getAllTransaction();
    }

    @Get('get-transactions-by-userid/:userid')
    async getTransactionById(@Param('userid') userId: number): Promise<TransactModel[]> {
        return await this.transactionService.getTransactionByUserId(userId);
    }

    @Post('create-transaction')
    async createTransaction(@Body() transactDto: TransactDto): Promise<TransactModel> {
        return this.transactionService.createTransaction(transactDto);
    }
}
