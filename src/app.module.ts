import { Module } from '@nestjs/common';
import { PriceConverterModule } from './price-converter/price-converter.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';

@Module({
  imports: [
    PriceConverterModule,
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'database/database.db',
      entities: [__dirname + '/**/*.model{.ts,.js}'],
      synchronize: true,

    })
  ],
  controllers: [],
  providers: [],
})
export class AppModule {
  constructor(private connection: Connection) { }
}
