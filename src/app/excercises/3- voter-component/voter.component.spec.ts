import { VoterComponent } from './voter.component';

xdescribe('VoterComponent', () => {
    let component: VoterComponent;

    beforeEach(() => {
        component = new VoterComponent();
    });

    it('should return the total votes', () => {
        component.myVote = 1;
        component.othersVote = 2;
        expect(component.totalVotes).toBe(3);
    });

    describe('When I upVote', () => {
        it('should increment the totalVotes', () => {
            component.upVote();
            expect(component.totalVotes).toBe(1);
        });

        it('should NOT increment the totalVotes when I already submitted the positive vote', () => {
            component.myVote = 1;
            component.upVote();
            expect(component.totalVotes).toBe(1);
        });

        it('should raise an event', () => {
            let eventData = null;
            component.myVoteChanged.subscribe(v => eventData = v);
            component.upVote();
            expect(eventData).toEqual({ myVote: 1 });
        });

        it('should NOT raise an event when I already submitted the positive vote', () => {
            component.myVote = 1;
            let eventData = null;
            component.myVoteChanged.subscribe(v => eventData = v);
            component.upVote();
            expect(eventData).toBeNull();
        });
    });

    describe('When I downVote', () => {
        it('should decrement the totalVotes', () => {
            component.downVote();
            expect(component.totalVotes).toBe(-1);
        });

        it('should NOT decrement the totalVotes when I already submitted the negative vote', () => {
            component.myVote = -1;
            component.downVote();
            expect(component.totalVotes).toBe(-1);
        });

        it('should raise an event', () => {
            let eventData = null;
            component.myVoteChanged.subscribe(v => eventData = v);
            component.downVote();
            expect(eventData).toEqual({ myVote: -1 });
        });

        it('should NOT raise an event when I already submitted the negative vote', () => {
            component.myVote = -1;
            let eventData = null;
            component.myVoteChanged.subscribe(v => eventData = v);
            component.downVote();
            expect(eventData).toBeNull();
        });
    });
});
