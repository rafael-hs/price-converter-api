import { Guid } from "guid-typescript"
import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
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

    @PrimaryGeneratedColumn()
    protected userId: number;
    
    @Column()
    protected transactId: string;

    @Column()
    protected sourceCurrency: number;
    @Column()
    protected sourceValue: number;
    @Column()
    protected targetCurrency: number;
    @Column()
    protected targetValue: number
    
    @Column()
    protected rateConversion: number;
    @Column()
    protected dateConversion: string;

    private createGuid() {
        this.transactId = Guid.create().toString();
    }

    public getGuid(): string {
        return this.transactId;
    }

    public setTargetValue(targetValue: number) {
        this.targetValue = targetValue;
    }

    public setRateConversion(rateConversion: number) {
        this.rateConversion = rateConversion;
    }
}
