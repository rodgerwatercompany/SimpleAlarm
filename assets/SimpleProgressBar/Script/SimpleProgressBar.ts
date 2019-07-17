
const { ccclass, property } = cc._decorator;

@ccclass
export default class SimpleProgressBar extends cc.Component {

    @property(cc.Slider)
    slider : cc.Slider = null;

    @property(cc.ProgressBar)
    progressBar : cc.ProgressBar = null;

    onLoad () {

        this.slider.progress = 0;
    }

    onSliderUpdate (slider:cc.Slider) {

        this.progressBar.progress = slider.progress;
    }
}
