import BaseUI from './BaseUI';

const { ccclass, property } = cc._decorator;

@ccclass
export default class QuickUI extends cc.Component {

    @property(cc.Button)
    btnQuick: cc.Button = null;

    @property(cc.Button)
    btnAlarm: cc.Button = null;

    @property(cc.Button)
    btnSwitch: cc.Button = null;

    private modelInfo : any = null;

    private eventHandler : any = null;

    onLoad () {

        this.modelInfo = {
            isShow : false
        };

        this.pushClickEvent(this.btnQuick, 'onQuickUIQuickClick');
        this.pushClickEvent(this.btnAlarm, 'onQuickUIAlarmClick');
        this.pushClickEvent(this.btnSwitch, 'onQuickUISwitchClick');
    }

    setEventHandler (eventHandler) {

        this.eventHandler = eventHandler;
    }

    onQuickUIQuickClick () {

    }

    onQuickUIAlarmClick () {

        this.eventHandler.onQuickUIAlarmClick();

        this.btnQuick.node.getComponent(BaseUI).hide();
        this.btnAlarm.node.getComponent(BaseUI).hide();

        this.modelInfo.isShow = false;
    }

    onQuickUISwitchClick () {

        if (!this.modelInfo.isShow) {

            const obj = {
                useShowAni : true
            };
            this.btnQuick.node.getComponent(BaseUI).show(obj);
            this.btnAlarm.node.getComponent(BaseUI).show(obj);

            const rotObj = {
                originRot : 0,
                endRot : -45,
                speed : 0.2
            };
            this.btnSwitch.node.getComponent(BaseUI).rotateObj(rotObj);
        }else {

            this.btnQuick.node.getComponent(BaseUI).hide();
            this.btnAlarm.node.getComponent(BaseUI).hide();

            const rotObj = {
                originRot : 0,
                endRot : 45,
                speed : 0.2
            };
            this.btnSwitch.node.getComponent(BaseUI).rotateObj(rotObj);
        }

        this.modelInfo.isShow = !this.modelInfo.isShow;
    }

    private pushClickEvent (btnObject, handler) {

        const eventHandler = new cc.Component.EventHandler();
        eventHandler.target = this.node;
        eventHandler.component = 'QuickUI';
        eventHandler.handler = handler;
        eventHandler.customEventData = null;
        btnObject.clickEvents.push(eventHandler);
    }
}
