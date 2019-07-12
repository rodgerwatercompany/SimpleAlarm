import AlarmPage from '../../UI/AlarmPage';
import BottomBarUI from '../../UI/BottomBarUI';

const { ccclass, property } = cc._decorator;

@ccclass
export default class UIManager extends cc.Component {

    @property(AlarmPage)
    alarmPage : AlarmPage = null;

    @property(BottomBarUI)
    bottomBarUI : BottomBarUI = null;

    onLoad () {

    }

    setEventHandler (eventHandler) {

        this.alarmPage.setEventHandler(eventHandler);
        this.bottomBarUI.setEventHandler(eventHandler);
    }

    handleAlarmClick () {

        cc.log('handleAlarmClick');
    }

}
