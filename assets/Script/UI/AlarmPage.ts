
const {ccclass, property} = cc._decorator;

@ccclass
export default class AlarmPage extends cc.Component {

    @property(cc.Label)
    label: cc.Label = null;

    @property
    text: string = 'hello';

    private eventHandler : any = null;

    onLoad () {

    }

    setEventHandler (eventHandler) {

        this.eventHandler = eventHandler;
    }
}
