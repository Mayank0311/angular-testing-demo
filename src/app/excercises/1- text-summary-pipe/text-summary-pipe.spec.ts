import { TextSummaryPipe } from './text-summary.pipe';

xdescribe('TextSummaryPipe', () => {
    let pipe: TextSummaryPipe;

    beforeEach(() => {
        pipe = new TextSummaryPipe();
    });

    it('should return an empty string if input is null', () => {
        expect(pipe.transform(null)).toBe('');
    });
    it('should return an empty string if input is undefined', () => {
        expect(pipe.transform(undefined)).toBe('');
    });
    it('should return an empty string if input is empty string', () => {
        expect(pipe.transform('')).toBe('');
    });
    it('should return the same value if length of input is equal to or less than the limit', () => {
        expect(pipe.transform('12345', 5)).toBe('12345');
    });
    it('should transform the value if input is greater than the limit', () => {
        expect(pipe.transform('1234567', 5)).toBe('12345...');
    });

    it('should presume 10 limit if no limit is given', () => {
        expect(pipe.transform('12345678901')).toBe('1234567890...');
    });
});