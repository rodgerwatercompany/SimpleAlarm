import AlarmPage from '../../UI/AlarmPage';
import BottomBarUI from '../../UI/BottomBarUI';
import QuickUI from '../../UI/QuickUI';
import AlarmSettingPage from '../../UI/AlarmSettingPage';

const { ccclass, property } = cc._decorator;

@ccclass
export default class UIManager extends cc.Component {

    @property(cc.Node)
    nodeMask : cc.Node = null;

    @property(AlarmPage)
    alarmPage : AlarmPage = null;

    @property(AlarmSettingPage)
    alarmSettingPage : AlarmSettingPage = null;

    @property(QuickUI)
    quickUI : QuickUI = null;

    @property(BottomBarUI)
    bottomBarUI : BottomBarUI = null;


    onLoad () {

    }

    setEventHandler (eventHandler) {

        this.alarmPage.setEventHandler(eventHandler);
        this.alarmSettingPage.setEventHandler(eventHandler);
        this.quickUI.setEventHandler(eventHandler);
        this.bottomBarUI.setEventHandler(eventHandler);
    }

    setupUserAlarm (obj) {

        this.alarmPage.initAlarms(obj);
    }

    handleQuickUIAlarmClick () {

        const obj = {
            useShowAni : true,
            isNewAlarm : true
        };
        this.alarmSettingPage.show(obj);
    }

    handleAlarmSettingPageConfirmClick (obj) {

        this.alarmPage.createAlarm(obj);
    }

    handleAlarmButtonClick (obj) {

        const obj1 = {
            alarmData : obj,
            useShowAni : true,
            isNewAlarm : false
        };

        this.alarmSettingPage.show(obj1);
    }

}
