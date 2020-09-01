import { TransactModel } from './transact.model';


describe('Transact class', () => {
    it('should make a transaction with no fields', () => {
        const transact = new TransactModel(0, '', 0, '');
        expect(transact).toBeTruthy();
        expect(transact.getGuid()).toEqual(expect.any(String));
        expect(transact.getSourceCurrency()).toBe('');
        expect(transact.getSourceValue()).toBe(0);
        expect(transact.getTargetCurrency()).toBe('');
    });

    it('should make a transaction with userId only', () => {
        const transact = new TransactModel(432, '', 0, '');
        expect(transact).toBeTruthy();
        expect(transact.getUserId()).toBe(432);
        expect(transact.getGuid()).toEqual(expect.any(String));
        expect(transact.getSourceCurrency()).toBe('');
        expect(transact.getSourceValue()).toBe(0);
        expect(transact.getTargetCurrency()).toBe('');
    });

    it('should make a transaction with normal constructor', () => {
        const transact = new TransactModel(432, 'USD', 15, 'BRL');
        expect(transact).toBeTruthy();
        expect(transact.getUserId()).toBe(432);
        expect(transact.getGuid()).toEqual(expect.any(String));
        expect(transact.getSourceCurrency()).toBe('USD');
        expect(transact.getSourceValue()).toBe(15);
        expect(transact.getTargetCurrency()).toBe('BRL');
    }); 
})