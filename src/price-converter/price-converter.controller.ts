import { Controller, Get, Post, Param } from '@nestjs/common';
import { CurrencyService } from './services/currency.service';
import { CurrencyRatesDto } from './dto/currency-rates.dto';
import { Observable } from 'rxjs';
import { InjectRepository } from '@nestjs/typeorm';
import { PriceConverterModel } from './models/price-converter.model';
import { Repository } from 'typeorm';

@Controller('price-converter')
export class PriceConverterController {


    constructor(
        private currencyService: CurrencyService,
        @InjectRepository(PriceConverterModel)
        private priceConverterRepository: Repository<PriceConverterModel>
    ) { }

    @Get('rates/:base')
    getRates(@Param('base') base: string): Observable<CurrencyRatesDto> {
        return this.currencyService.getCurrencys(base);
    }
}
