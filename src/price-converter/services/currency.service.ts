import { Injectable, HttpService } from '@nestjs/common';
import { CurrencyRatesDto } from '../dto/currency-rates.dto';
import { AxiosResponse } from 'axios'

@Injectable()
export class CurrencyService {
    constructor(private readonly http: HttpService) { }

    async getCurrencys(targetCurrency: string): Promise<CurrencyRatesDto> {
        const result = await this.http.get(`https://api.exchangeratesapi.io/latest?base=${targetCurrency}`).toPromise();
        return result.data;
    }
}
