
const { ccclass, property, executeInEditMode } = cc._decorator;

@ccclass
@executeInEditMode
export default class SimpleLayout extends cc.Component {

    @property(cc.Boolean)
    useEditLayout : boolean = true;

    @property(cc.Boolean)
    useHorizontal : boolean = true;

    @property(cc.Integer)
    distanceCell : number = 0;

    onLoad() {

        if (CC_EDITOR && this.useEditLayout) {

            if (this.node.children.length > 0)
                this._doLayout();
        }
    }

    _doLayout () {

        const lenCell = this.node.children.length;
        const direction = this.useHorizontal ? 'x' : 'y';

        for (let i = 0; i < lenCell; i++) {

            const cell = this.node.children[i];
            if (lenCell % 2 === 0)
                cell[direction] = (this.distanceCell * (((lenCell - 1) * 0.5) - 0.5)) - (i * this.distanceCell);
            else
                cell[direction] = (this.distanceCell * ((lenCell - 1) * 0.5)) - (i * this.distanceCell);
        }
    }

}
