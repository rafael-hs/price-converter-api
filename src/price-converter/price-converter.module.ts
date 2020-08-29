import { Module } from '@nestjs/common';
import { PriceConverterController } from './price-converter.controller';

@Module({
  controllers: [PriceConverterController]
})
export class PriceConverterModule {}
