import { Module } from '@nestjs/common';
import { PriceConverterModule } from './price-converter/price-converter.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SharedModule } from './shared/shared.module';


@Module({
  imports: [
    PriceConverterModule,
    SharedModule,
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
}
