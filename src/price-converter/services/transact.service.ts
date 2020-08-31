import { Injectable } from '@nestjs/common';
import { CurrencyService } from './currency.service';
import { TransactDto } from '../dto/transact.dto';
import { TransactModel } from '../models/transact.model';
import { DeleteResult, getConnection, Repository } from 'typeorm';
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
        const result = await getConnection()
            .createQueryBuilder()
            .select()
            .from(TransactModel, null)
            .where("userId = :userId", { userId: userId })
            .execute();
        return result;
    }

    async deleteTransactionsByUserId(userId: number): Promise<DeleteResult> {
        const result = await getConnection()
            .createQueryBuilder()
            .delete()
            .from(TransactModel)
            .where("userId = :userId", { userId: userId })
            .execute();
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
