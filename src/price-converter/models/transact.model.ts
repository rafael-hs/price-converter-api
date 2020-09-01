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


    //#region private methods
    private createGuid(): void { this.transactionHashId = Guid.create().toString(); }
    //#endregion

    //#region set methods
    setTargetValue(targetValue: number): void { this.targetValue = +targetValue.toFixed(2); }
    setRateConversion(rateConversion: number): void { this.rateConversion = +rateConversion.toFixed(2) }
    //#endregion

    //#region get methods
    getGuid(): string { return this.transactionHashId }
    getDate(): string { return this.dateConversion }
    getSourceCurrency(): string { return this.sourceCurrency }
    getSourceValue(): number { return this.sourceValue }
    getTargetCurrency(): string { return this.targetCurrency }
    getTargetValue(): number { return this.targetValue }
    getUserId(): number { return this.userId }
    //#endregion
}