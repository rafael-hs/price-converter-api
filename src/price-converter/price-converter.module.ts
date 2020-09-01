import { Module, HttpModule } from '@nestjs/common';
import { TransactController } from './transact.controller';
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
    TransactController
  ]
})
export class PriceConverterModule { }
