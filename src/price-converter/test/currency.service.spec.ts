import { Test, TestingModule } from '@nestjs/testing';
import { CurrencyService } from '../services/currency.service';
import { HttpService, HttpModule } from '@nestjs/common';

describe('CurrencyService', () => {
  let service: CurrencyService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CurrencyService, HttpService],
      imports: [HttpModule]
    }).compile();

    service = module.get<CurrencyService>(CurrencyService);
    console.log(service)
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('get currecy rates success', ()  => {
    let response = service.getCurrencys('BRL').subscribe();
    expect(response).toBeTruthy();

  })
});
