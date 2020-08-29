import { Module, HttpModule } from '@nestjs/common';
import { PriceConverterController } from './price-converter.controller';
import { TransactService } from './services/transact.service';
import { CurrencyService } from './services/currency.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TransactModel } from './models/transact.model';

@Module({
  imports: [
    HttpModule,
    TypeOrmModule.forFeature([TransactModel]),
  ],
  providers: [
    TransactService,
    CurrencyService
  ],
  controllers: [
    PriceConverterController
  ]
})
export class PriceConverterModule { }
