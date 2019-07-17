
const { ccclass, property } = cc._decorator;

@ccclass
export default class SimpleTouchEvent extends cc.Component {

    @property(cc.Node)
    nodeTouch : cc.Node = null;

    private infos : any = null;
    private params : any = null;

    private eventHandler : any = null;

    onLoad () {

        this.infos = {

        };

        this.params = {
            touchLoc : 0,
            oldLoc : 0
        };

        this.nodeTouch.on(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);
        this.nodeTouch.on(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this);
        this.nodeTouch.on(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this);
        this.nodeTouch.on(cc.Node.EventType.TOUCH_CANCEL, this.onTouchCancel, this);

    }

    setEventHandler (eventHandler) {

        this.eventHandler = eventHandler;
    }

    onTouchStart (event:cc.Event.EventTouch) {

        const touches = event.getTouches();
        const touchLoc = touches[0].getLocation();


        this.params.oldLoc = touchLoc.y;

        this.eventHandler.onScrollViewStart();
    }

    onTouchMove (event:cc.Event.EventTouch) {

        const touches = event.getTouches();
        const touchLoc = touches[0].getLocation();

        const moveDis = touchLoc.y - this.params.oldLoc;
        this.params.oldLoc = touchLoc.y;

        const obj = {
            delta : moveDis
        };

        this.eventHandler.onScrollViewMove(obj);
    }

    onTouchEnd () {

        this.eventHandler.onScrollViewEnd();
    }

    onTouchCancel () {

        this.eventHandler.onScrollViewCancel();
    }
}
