import { LikeComponent } from './like.component';


xdescribe('like', () => {
    let component: LikeComponent;

    beforeEach(() => {
        component = new LikeComponent();
    });

    it('should change the value of iLike property on click', () => {
        const result = true;

        component.click();

        expect(component.iLike).toBe(result);
    });

    it('should increment the value of totalLikes property if iLike is true', () => {
        component.click();

        expect(component.totalLikes).toBe(1);
    });

    it('should decrement the value of totalLikes property if iLike is false', () => {
        component.iLike = true;

        component.click();

        expect(component.totalLikes).toBe(-1);
    });
});
