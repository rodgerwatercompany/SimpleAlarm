
const { ccclass, property } = cc._decorator;

@ccclass
export default class SimpleScrollView extends cc.Component {

    @property([cc.Node])
    cells : cc.Node[] = [];

    @property(Number)
    distanceCell : number = 0;

    // 釋放後，回彈時間
    @property(Number)
    releasedTime : number = 0.5;

    @property(cc.Boolean)
    loop : boolean = false;

    private model : any = null;
    private releasedParams : any = null;

    private orderedCells : any = [];

    onLoad () {

        this.releasedParams = {
            direction : false,
            startPos : 0,
            endPOS : 0,
            distance : 0,
            passTime : 0,
            totalTime : this.releasedTime
        };

        this.model = {
            isReleasedAni : false,
            sizeShow : 1
        };

        this.orderedCells = this.cells;

        if (this.cells.length > 4) {
            this.model.sizeShow = (this.cells.length - 1) / 2;
        }

    }

    update (dt) {

        if (this.model.isReleasedAni) {

            this.releasedParams.passTime += dt;

            if (this.releasedParams.passTime < this.releasedParams.totalTime) {

                const ratio = this.releasedParams.direction ? 1 : -1;
                this.orderedCells[0].y = this.releasedParams.startPos + ((ratio) * this.releasedParams.distance * (this.releasedParams.passTime / this.releasedParams.totalTime));

            }else {

                this.model.isReleasedAni = false;
                this.orderedCells[0].y = this.releasedParams.endPOS;
            }

            this.moveCell();
        }
    }

    handleScrollViewStart () {

        if (this.model.isReleasedAni) {

            this.model.isReleasedAni = false;
        }
    }

    handleScrollViewMove (obj) {

        this.doMove(obj.delta);
    }

    handleScrollViewEnd () {

        this.deRelease();
    }

    private doMove (dt) {

        if (this.loop)
            this.reOrderCell(dt);

        const nextPos = this.orderedCells[0].y + dt;
        this.orderedCells[0].y = nextPos;

        if (!this.loop) {

            if (dt >= 0) {

                if (nextPos >= (this.distanceCell * (this.orderedCells.length - 1)))
                    this.orderedCells[0].y = (this.distanceCell * (this.orderedCells.length - 1));
            }else {

                if (nextPos <= 0)
                    this.orderedCells[0].y = 0;
            }
        }

        this.moveCell();
    }

    private deRelease() {

        const posStart = this.orderedCells[0].y / this.distanceCell;
        const idx = Math.round(posStart);

        this.model.isReleasedAni = true;
        this.releasedParams.passTime = 0;
        this.releasedParams.startPos = this.orderedCells[0].y;
        this.releasedParams.endPOS = idx * this.distanceCell;
        this.releasedParams.distance = Math.abs(idx * this.distanceCell - this.orderedCells[0].y);

        this.releasedParams.direction = this.releasedParams.endPOS > this.releasedParams.startPos ? true : false;

        // 如果不使用動畫
        if (this.releasedTime <= 0) {

            this.model.isReleasedAni = false;
            this.cells[0].y = idx * this.distanceCell;

            for (let i = 1; i < this.cells.length; i ++) {

                this.cells[i].y = this.cells[i - 1].y - this.distanceCell;
            }
        }
    }

    private reOrderCell (dt) {

        const posStart = (this.orderedCells[0].y + dt) / this.distanceCell;
        const posEnd = (this.orderedCells[this.orderedCells.length - 1].y + dt) / this.distanceCell;
        const idxStart = Math.round(posStart);
        const idxEnd = Math.abs(Math.round(posEnd));

        if (dt > 0) {

            if (idxStart > this.model.sizeShow) {

                const firstElement = this.orderedCells.shift();
                this.orderedCells.push(firstElement);
            }
        }else if (dt < 0) {

            if (idxEnd > this.model.sizeShow) {

                this.orderedCells[this.orderedCells.length - 1].y = this.orderedCells[0].y + this.distanceCell;
                const lastElement = this.orderedCells.pop();
                this.orderedCells.unshift(lastElement);
            }

        }
    }

    private moveCell () {

        for (let i = 1; i < this.orderedCells.length; i ++) {

            this.orderedCells[i].y = this.orderedCells[i - 1].y - this.distanceCell;
        }
    }

    private setCenter (idx) {

        for (let i = 0; i < this.orderedCells.length; i++) {

        }
    }
}
