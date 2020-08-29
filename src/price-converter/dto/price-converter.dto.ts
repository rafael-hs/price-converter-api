import { PriceConverterModel } from "../models/price-converter.model";

export class PriceConverterDto {
    userId: number;
    sourceCurrency: number;
    sourceValue: number;
    targetCurrency: number;

    public priceConverterMapper(): PriceConverterModel{
        return new PriceConverterModel(
            this.userId,
            this.sourceCurrency,
            this.sourceValue,
            this.targetCurrency
        )
    }
}