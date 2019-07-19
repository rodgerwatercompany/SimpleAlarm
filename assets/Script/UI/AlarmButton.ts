
const { ccclass, property } = cc._decorator;

@ccclass
export default class AlarmButton extends cc.Component {

    @property(cc.Button)
    btnItSelf : cc.Button = null;

    private modelInfo : any = null;

    private eventHandler : any = null;

    onLoad () {

        cc.log('AlarmButton');
        this.modelInfo = {
            alarmID : ''
        };
        this.pushClickEvent(this.btnItSelf, 'onItSelfClick');
    }

    init () {

        this.modelInfo.alarmID = new Date().getTime();
    }

    setup (obj) {

        this.modelInfo.alarmID = obj.alarmID;
    }

    setEventHandler (eventHandler) {

        this.eventHandler = eventHandler;
    }

    onItSelfClick () {

        const obj = {
            alarmID : this.modelInfo.alarmID
        };
        this.eventHandler.onAlarmButtonClick(obj);
    }

    private pushClickEvent (btnObject, handler) {

        const eventHandler = new cc.Component.EventHandler();
        eventHandler.target = this.node;
        eventHandler.component = 'AlarmButton';
        eventHandler.handler = handler;
        eventHandler.customEventData = null;
        btnObject.clickEvents.push(eventHandler);
    }
}
