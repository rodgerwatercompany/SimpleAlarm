import SimpleTouchEvent from './SimpleTouchEvent';
import SimpleScrollView from './SimpleScrollView';

const { ccclass, property } = cc._decorator;

@ccclass
export default class SimpleScrollViewPresenter extends cc.Component {

    @property(SimpleTouchEvent)
    touchEvent : SimpleTouchEvent = null;

    @property(SimpleScrollView)
    scrollView : SimpleScrollView = null;

    onLoad () {

        this.touchEvent.setEventHandler(this);
    }

    onScrollViewStart () {

        this.scrollView.handleScrollViewStart();
    }

    onScrollViewMove (obj) {

        this.scrollView.handleScrollViewMove(obj);
    }

    onScrollViewEnd () {

        this.scrollView.handleScrollViewEnd();
    }

    onScrollViewCancel () {

        this.scrollView.handleScrollViewEnd();
    }
}
