import { Guid } from "guid-typescript"
import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class TransactModel {

    constructor(
        userId: number,
        sourceCurrency: string,
        sourceValue: number,
        targetCurrency: string) {

        this.userId = userId;
        this.sourceCurrency = sourceCurrency;
        this.sourceValue = sourceValue;
        this.targetCurrency = targetCurrency;
        this.dateConversion = new Date().toLocaleDateString();
        this.createGuid();
    }
    
    @PrimaryGeneratedColumn()
    protected id: number;

    @Column('uuid')
    protected transactionHashId: string;
    @Column()
    protected userId: number;

    @Column()
    protected sourceCurrency: string;
    @Column()
    protected sourceValue: number;
    @Column()
    protected targetCurrency: string;

    @Column('integer')
    protected targetValue: number
    
    @Column('integer')
    protected rateConversion: number;
    @Column()
    protected dateConversion: string;

    private createGuid() {
        this.transactionHashId = Guid.create().toString();
    }

    public getGuid(): string {
        return this.transactionHashId;
    }

    public setTargetValue(targetValue: number) {
        this.targetValue = +targetValue.toFixed(2);
    }

    public setRateConversion(rateConversion: number) {
        this.rateConversion = +rateConversion.toFixed(2);
    }
}
