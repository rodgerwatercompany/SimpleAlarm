import BasePresenter from './BasePresenter';

const { ccclass, property } = cc._decorator;

@ccclass
export default class UIPresenter extends BasePresenter {


    constructor () {

        super();

    }

    onBottomUIAlarmClick () {

    }

    onQuickUIAlarmClick () {

        this.mgrs['UI'].handleQuickUIAlarmClick();
    }

    onAlarmSettingPageConfirmClick (obj) {

        this.mgrs['UI'].handleAlarmSettingPageConfirmClick(obj);
    }
}
