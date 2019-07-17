import BaseUIPage from './BaseUIPage';

const { ccclass, property } = cc._decorator;

@ccclass
export default class AlarmPage extends BaseUIPage {


    private eventHandler : any = null;

    onLoad () {

    }

    setEventHandler (eventHandler) {

        this.eventHandler = eventHandler;
    }
}
