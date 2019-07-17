import BasePresenter from './BasePresenter';

const { ccclass, property } = cc._decorator;

@ccclass
export default class UIPresenter extends BasePresenter {


    constructor () {

        super();

    }

    onAlarmClick () {

        this.mgrs['UI'].handleAlarmClick();
    }
}
