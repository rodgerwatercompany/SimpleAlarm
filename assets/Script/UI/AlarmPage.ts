
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

    initAlarms (obj) {

        ResourceManager.getResource('Prefab/AlarmButton', (prefab) => {

            for (const key in obj.userAlarms) {

                const object = cc.instantiate(prefab);
                this.layoutContent.addChild(object);
                const alarmButton = object.getComponent(AlarmButton);
                alarmButton.setup(obj.userAlarms[key]);
                alarmButton.setEventHandler(this.eventHandler);
            }
        });
    }

    createAlarm (obj) {

        ResourceManager.getResource('Prefab/AlarmButton', (prefab) => {

            const object = cc.instantiate(prefab);
            this.layoutContent.addChild(object);
            const alarmButton = object.getComponent(AlarmButton);
            alarmButton.setup(obj);
            alarmButton.setEventHandler(this.eventHandler);
        });
    }

}
