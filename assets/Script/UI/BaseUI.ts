
const { ccclass, property } = cc._decorator;


@ccclass('ActionParams')
class ActionParams {

    @property(Number)
    speed : number = 0.5;

    @property(cc.Vec2)
    originPos : cc.Vec2 = null;

    @property(cc.Vec2)
    targetPos : cc.Vec2 = null;
}

@ccclass
export default class BaseUI extends cc.Component {

    @property(cc.Node)
    root : cc.Node = null;

    @property(cc.Node)
    rotateTarget : cc.Node = null;

    @property(ActionParams)
    actionParams : ActionParams = null;

    public show (obj) {

        this.root.active = true;

        if (!obj.useShowAni)
            return;

        this.root.setPosition(this.actionParams.originPos);
        this.root.runAction(
            cc.moveTo(this.actionParams.speed, this.actionParams.targetPos).easing(cc.easeQuadraticActionOut())
        );
    }

    public hide () {

        this.root.active = false;
    }

    public rotateObj (obj) {

        this.rotateTarget.rotation = obj.originRot;
        this.rotateTarget.runAction(
            cc.rotateTo(obj.speed, obj.endRot).easing(cc.easeQuadraticActionOut())
        );
    }

}
