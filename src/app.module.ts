import { Module } from '@nestjs/common';
import { PriceConverterModule } from './price-converter/price-converter.module';

@Module({
  imports: [PriceConverterModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
