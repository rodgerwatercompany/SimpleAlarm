
const { ccclass, property } = cc._decorator;

@ccclass
export default class BaseUIPage extends cc.Component {



    public show () {

        this.node.active = true;
        this.node.setPosition(-1080, 0);
        this.node.runAction(
            cc.moveTo(0.5, 0, 0).easing(cc.easeQuadraticActionOut())
        );
    }
}
