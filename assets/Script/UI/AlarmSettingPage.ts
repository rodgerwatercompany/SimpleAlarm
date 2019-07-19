import BaseUI from './BaseUI';

const { ccclass, property } = cc._decorator;

@ccclass
export default class AlarmSettingPage extends BaseUI {

    @property(cc.Button)
    btnCancel : cc.Button = null;

    @property(cc.Button)
    btnDelete : cc.Button = null;

    @property(cc.Button)
    btnConfirm : cc.Button = null;

    private modelInfo : any = null;

    private eventHandler : any = null;

    onLoad () {

        this.modelInfo = {
            alarmID : '',
            time : '00:00'
        };

        this.pushClickEvent(this.btnCancel, 'onCancelClick');
        this.pushClickEvent(this.btnDelete, 'onDeleteClick');
        this.pushClickEvent(this.btnConfirm, 'onConfirmClick');
    }

    setEventHandler (eventHandler) {

        this.eventHandler = eventHandler;
    }

    show (obj) {

        super.show(obj);

        this.btnDelete.node.active = !obj.isNewAlarm;

        if (obj.isNewAlarm) {

            this.btnCancel.node.setContentSize(480, 180);
            this.btnConfirm.node.setContentSize(480, 180);
        }else {

            this.modelInfo.alarmID = obj.alarmData.alarmID;

            this.btnCancel.node.setContentSize(300, 180);
            this.btnConfirm.node.setContentSize(300, 180);
        }

    }

    onCancelClick () {

        this.hide();
    }

    onDeleteClick () {

        const obj = {
            alarmID : this.modelInfo.alarmID
        };
        this.eventHandler.onAlarmSettingPageDeleteClick(obj);
    }

    onConfirmClick () {

        const obj = {
            time : this.modelInfo.time
        };
        this.eventHandler.onAlarmSettingPageConfirmClick(obj);

        this.hide();
    }

    private pushClickEvent (btnObject, handler) {

        const eventHandler = new cc.Component.EventHandler();
        eventHandler.target = this.node;
        eventHandler.component = 'AlarmSettingPage';
        eventHandler.handler = handler;
        eventHandler.customEventData = null;
        btnObject.clickEvents.push(eventHandler);
    }
}
