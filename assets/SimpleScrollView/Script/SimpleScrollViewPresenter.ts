import SimpleTouchEvent from "./SimpleTouchEvent";
import SimpleScrollView from "./SimpleScrollView";

const {ccclass, property} = cc._decorator;

@ccclass
export default class SimpleScrollViewPresenter extends cc.Component {

    @property(SimpleTouchEvent)
    touchEvent : SimpleTouchEvent = null;

    @property(SimpleScrollView)
    scrollView : SimpleScrollView = null;

    onLoad () {

        this.touchEvent.setEventHandler(this);
    }

    onScrollViewMove (obj) {

        this.scrollView.handleScrollViewMove(obj);
    }

}
