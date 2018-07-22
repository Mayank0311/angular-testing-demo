import { VoteComponent } from './vote.component';

xdescribe('VoteComponent', () => {
  let component: VoteComponent;

  beforeEach(() => {
    component = new VoteComponent();
  });

  it('should increment the votes when upvoted', () => {
    component.upVote();

    expect(component.totalVotes).toBe(1);
  });

  it('should decrement the votes when downvotes', () => {
    component.downVote();

    expect(component.totalVotes).toBe(-1);
  });
});
