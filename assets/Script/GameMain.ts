import UIPresenter from './Manager/Presenter/UIPresenter';
import UIManager from './Manager/Mediator/UIManager';
import GameModel from './Model/GameModel';

const { ccclass, property } = cc._decorator;

@ccclass
export default class GameMain extends cc.Component {


    @property(UIManager)
    uiManager : UIManager = null;

    private presenters : any = null;

    onLoad () {

        // 取得本地使用者數據
        let userData = null;
        if (true) {

            cc.sys.localStorage.removeItem('userData');
            userData = cc.sys.localStorage.getItem('userData');
            if (!userData) {

                userData = {
                    userAlarms : []
                };
                cc.sys.localStorage.setItem('userData', JSON.stringify(userData));

                cc.log(cc.sys.localStorage.getItem('userData'));
            }

            cc.log(userData);
        }

        const gameModel = new GameModel();


        // 任務處理中心
        this.presenters = [];

        this.presenters['UI'] = new UIPresenter();

        const mgrs = {
            ui : this.uiManager
        };

        this.presenters['UI'].setManager(mgrs);
        this.presenters['UI'].setGameModel(gameModel);

        // 管理器
        this.uiManager.setEventHandler(this.presenters['UI']);

    }


}
