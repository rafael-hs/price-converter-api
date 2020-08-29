import { Injectable, Inject } from '@nestjs/common';
import { CurrencyService } from './currency.service';
import { TransactDto } from '../dto/transact.dto';
import { TransactModel } from '../models/transact.model';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class TransactService {
    constructor(
        @InjectRepository(TransactModel)
        private transactRepository: Repository<TransactModel>,
        private readonly currencyService: CurrencyService
    ) { }

    async createTransaction(transactDto: TransactDto): Promise<TransactModel> {
        const response = await this.currencyService.getCurrencys(transactDto.sourceCurrency);
        const targetValue = Object.entries(response.rates).find(resp => resp[0] === transactDto.targetCurrency);
        return await this.transactRepository.save(this.farmTransaction(transactDto, +targetValue[1]));
    }

    async getAllTransaction(): Promise<TransactModel[]> {
        const result = await this.transactRepository.find();
        return result;
    }

    async getTransactionByUserId(userId: number): Promise<TransactModel[]> {
        let query = `select * from transact_model where userId = :userId`;
        const result = await this.transactRepository.query(query,[userId]);
        return result;
    }

    private farmTransaction(transactDto: TransactDto, targetValeu: number): TransactModel {
        let transctModel = new TransactModel(
            transactDto.userId,
            transactDto.sourceCurrency,
            transactDto.sourceValue,
            transactDto.targetCurrency
        );
        transctModel.setTargetValue(transactDto.sourceValue * targetValeu);
        transctModel.setRateConversion(targetValeu);

        return transctModel;
    }
}
