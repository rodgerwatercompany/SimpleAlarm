import BasePresenter from './BasePresenter';

const { ccclass, property } = cc._decorator;

@ccclass
export default class UIPresenter extends BasePresenter {


    constructor () {

        super();

    }

    // 程式啟動時，創建使用者已建立的 AlarmButton。
    onGameMainStart () {

        const obj = {
            userAlarms : this.gameModel.getUserAlarms()
        };
        this.mgrs['UI'].setupUserAlarm(obj);
    }

    onBottomUIAlarmClick () {

    }

    onQuickUIAlarmClick () {

        this.mgrs['UI'].handleQuickUIAlarmClick();
    }

    // 點擊 Alarm 的設定頁面的 Confirm (確認)。
    onAlarmSettingPageConfirmClick (obj) {

        const obj1 = this.gameModel.createAlarm(obj);
        this.mgrs['UI'].handleAlarmSettingPageConfirmClick(obj1);
    }

    // 點擊 Alarm 的設定頁面的 Delete (刪除)。
    onAlarmSettingPageDeleteClick (obj) {

        this.gameModel.deleteAlarm(obj);
    }

    // 點擊 AlarmButton ，開啟該 Alarm 的設定頁面。
    onAlarmButtonClick (obj) {

        this.mgrs['UI'].handleAlarmButtonClick(obj);
    }
}
