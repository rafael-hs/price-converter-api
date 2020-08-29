import { Guid } from "guid-typescript"

export class PriceConverterModel {

    constructor(
        userId: number,
        sourceCurrency: number,
        sourceValue: number,
        targetCurrency: number) {

        this.userId = userId;
        this.sourceCurrency = sourceCurrency;
        this.sourceValue = sourceValue;
        this.targetCurrency = targetCurrency;
        this.dateConversion = Date();
        this.createGuid();
    }

    protected transactId: Guid;
    protected userId: number;

    protected sourceCurrency: number;
    protected sourceValue: number;
    protected targetCurrency: number;
    protected targetValue: number
    
    protected rateConversion: number;
    protected dateConversion: string;

    private createGuid() {
        this.transactId = Guid.create();
    }

    public getGuid(): Guid {
        return this.transactId;
    }

    public setTargetValue(targetValue: number) {
        this.targetValue = targetValue;
    }
    
    public setRateConversion(rateConversion: number) {
        this.rateConversion = rateConversion;
    }
}
