
const { ccclass, property } = cc._decorator;


@ccclass('ActionParams')
class ActionParams {

    @property(cc.Vec2)
    originPos : cc.Vec2 = null;

    @property(cc.Vec2)
    targetPos : cc.Vec2 = null;
}

@ccclass
export default class BaseUI extends cc.Component {


    @property(ActionParams)
    actionParams : ActionParams = null;

    @property(cc.Boolean)
    useShowAnim : boolean = false;

    public show () {

        this.node.active = true;

        if (!this.useShowAnim)
            return;

        this.node.setPosition(this.actionParams.originPos);
        this.node.runAction(
            cc.moveTo(0.5, this.actionParams.targetPos).easing(cc.easeQuadraticActionOut())
        );
    }
}
