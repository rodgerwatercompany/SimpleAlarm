import UIPresenter from './Manager/Presenter/UIPresenter';
import UIManager from './Manager/Mediator/UIManager';

const { ccclass, property } = cc._decorator;

@ccclass
export default class GameMain extends cc.Component {


    @property(UIManager)
    uiManager : UIManager = null;

    private presenters : any = null;

    onLoad () {

        // 任務處理中心
        this.presenters = [];

        this.presenters['UI'] = new UIPresenter();

        const mgrs = {
            ui : this.uiManager
        };

        this.presenters['UI'].setManager(mgrs);

        // 管理器
        this.uiManager.setEventHandler(this.presenters['UI']);


    }


}
