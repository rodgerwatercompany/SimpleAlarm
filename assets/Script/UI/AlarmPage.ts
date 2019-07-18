
import BaseUI from './BaseUI';
import ResourceManager from '../Util/ResourceManager';
import AlarmButton from './AlarmButton';

const { ccclass, property } = cc._decorator;

@ccclass
export default class AlarmPage extends BaseUI {


    @property(cc.Node)
    layoutContent : cc.Node = null;

    private eventHandler : any = null;

    onLoad () {

    }

    setEventHandler (eventHandler) {

        this.eventHandler = eventHandler;

    }

    createAlarm (obj) {

        ResourceManager.getResource('Prefab/AlarmButton', this.onAlarmButtonLoad.bind(this));
    }

    onAlarmButtonLoad (obj) {

        this.layoutContent.addChild(obj);
        const alarmButton = obj.getComponent(AlarmButton);
        alarmButton.init();
        alarmButton.setEventHandler(this.eventHandler);
    }

}
