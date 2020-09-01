import { Test, TestingModule } from '@nestjs/testing';
import { CurrencyService } from '../services/currency.service';
import { HttpModule } from '@nestjs/common';

describe('CurrencyService', () => {
  let service: CurrencyService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CurrencyService],
      imports: [HttpModule]
    }).compile();

    service = module.get<CurrencyService>(CurrencyService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  const modelRates = {
    "rates": {
      "CAD": 0.2370595049,
      "HKD": 1.4075265212,
      "ISK": 24.920741373,
      "PHP": 8.7910010974,
      "DKK": 1.1346024875,
      "HUF": 54.1366906475,
      "CZK": 3.9934154371,
      "GBP": 0.1363675162,
      "RON": 0.7376387026,
      "SEK": 1.563879405,
      "IDR": 2641.5482867943,
      "INR": 13.2929673211,
      "BRL": 1.0,
      "RUB": 13.5082611877,
      "HRK": 1.147344836,
      "JPY": 19.1119985368,
      "THB": 5.6534264114,
      "CHF": 0.1639739056,
      "EUR": 0.1524204365,
      "MYR": 0.7564931106,
      "BGN": 0.2981038898,
      "TRY": 1.3287403975,
      "CNY": 1.2460218266,
      "NOK": 1.5958419705,
      "NZD": 0.2701347397,
      "ZAR": 3.0305602975,
      "USD": 0.1816089501,
      "MXN": 3.97344836,
      "SGD": 0.246844897,
      "AUD": 0.2471649799,
      "ILS": 0.6109468358,
      "KRW": 214.4921351055,
      "PLN": 0.6694457993
    },
    "base": "BRL",
    "date": "2020-08-28"
  }

  it('get currecy rates success', async () => {
    const response = await service.getCurrencys('BRL');
    expect(200);
    expect(response).toBeTruthy();
    expect(Object.entries(response.rates).length).toEqual(Object.entries(modelRates.rates).length);
    expect(response.base).toEqual(modelRates.base);
  })
});
