import { Module, HttpModule } from '@nestjs/common';
import { PriceConverterController } from './price-converter.controller';
import { PriceConverterService } from './services/price-converter.service';
import { CurrencyService } from './services/currency.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PriceConverterModel } from './models/price-converter.model';

@Module({
  imports: [
    HttpModule,
    TypeOrmModule.forFeature([PriceConverterModel])
  ],
  providers: [
    PriceConverterService,
    CurrencyService
  ],
  controllers: [
    PriceConverterController
  ]
})
export class PriceConverterModule { }
