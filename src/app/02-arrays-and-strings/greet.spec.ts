import { greet } from './greet';

xdescribe('greet', () => {
    it('should include the name mayank', () => {
        const result = 'mayank';
        expect(greet('mayank')).toContain(result);
    });
});
