import { Injectable, HttpService } from '@nestjs/common';
import { CurrencyRatesDto } from '../dto/currency-rates.dto';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable()
export class CurrencyService {
    constructor(
        private http: HttpService) { }


    getCurrencys(targetCurrency: string): Observable<CurrencyRatesDto> {
        return this.http.get(`https://api.exchangeratesapi.io/latest?base=${targetCurrency}`)
            .pipe(
                map(res => res.data)
            )
    }
}
