import { Test, TestingModule } from '@nestjs/testing';
import { TransactService } from '../services/transact.service';
import { HttpModule } from '@nestjs/common';
import { getRepositoryToken } from '@nestjs/typeorm';
import { CurrencyService } from '../services/currency.service';
import { TransactModel } from '../models/transact.model';
import { Repository } from 'typeorm';

describe('TransactService', () => {
  let service: TransactService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CurrencyService,
        TransactService,
        { 
          provide: getRepositoryToken(TransactModel), 
          useClass: Repository 
        }],
      imports: [HttpModule]
    }).compile();

    service = module.get<TransactService>(TransactService);

  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });


});
