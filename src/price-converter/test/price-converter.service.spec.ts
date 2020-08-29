import { Test, TestingModule } from '@nestjs/testing';
import { PriceConverterService } from '../services/price-converter.service';

describe('PriceConverterService', () => {
  let service: PriceConverterService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PriceConverterService],
    }).compile();

    service = module.get<PriceConverterService>(PriceConverterService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
