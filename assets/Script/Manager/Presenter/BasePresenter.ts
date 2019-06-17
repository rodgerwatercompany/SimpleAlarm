
const {ccclass, property} = cc._decorator;

@ccclass
export default class BasePresenter {

    protected mgrs : any;
    protected gameModel : any;

    constructor () {

        this.mgrs = [];

    }

    setGameModel (gameModel) {

        this.gameModel = gameModel;
    }

    setManager (mgrs) {

        //this.mgrs['Performance'] = mgrs.performance;
        this.mgrs['UI'] = mgrs.ui;
        // this.mgrs['Network'] = mgrs.network;
        // this.mgrs['Scene'] = mgrs.scene;
        // this.mgrs['Voice'] = mgrs.voice;
    }
}
