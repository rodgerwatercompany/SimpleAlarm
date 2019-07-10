
const {ccclass, property} = cc._decorator;

@ccclass
export default class SimpleScrollView extends cc.Component {

    @property([cc.Node])
    cells : cc.Node[] = [];

    @property(Number)
    cellHeight : number = 0;

    onLoad () {

    }

    handleScrollViewMove (obj) {

    }
    
    private doMove (dt) {

        if (dt) { // 上移

           if (this.cells[0].y >= (this.cellHeight * (this.cells.length - 0.5))) {

            
           }else {
               // all move
           }
        }else { // 下移

            const lastIdx = this.cells.length - 1;
            if (this.cells[lastIdx].y <= -(this.cellHeight * (this.cells.length - 0.5))) {
               
            }
        }

    }
}
