
const { ccclass, property } = cc._decorator;

@ccclass
export default class BottomBarUI extends cc.Component {

    @property(cc.Button)
    btnAlarm: cc.Button = null;

    private eventHandler : any = null;

    onLoad () {

        this.pushClickEvent(this.btnAlarm, 'onAlarmClick');
    }

    setEventHandler (eventHandler) {

        this.eventHandler = eventHandler;
    }

    onAlarmClick () {

        this.eventHandler.onAlarmClick();
    }

    private pushClickEvent (btnObject, handler) {

        const eventHandler = new cc.Component.EventHandler();
        eventHandler.target = this.node;
        eventHandler.component = 'BottomBarUI';
        eventHandler.handler = handler;
        eventHandler.customEventData = null;
        btnObject.clickEvents.push(eventHandler);
    }
}
