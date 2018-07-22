import { getCurrencies } from './getCurrencies';

xdescribe('getCurrencies', () => {
    it('should return supported currencies', () => {
        const result = getCurrencies();
        expect(result).toContain('AUD');
        expect(result).toContain('EUR');
        expect(result).toContain('USD');
    });
});
