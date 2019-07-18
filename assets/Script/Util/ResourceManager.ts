
const { ccclass, property } = cc._decorator;

@ccclass
export default class ResourceManager {


    static getResource (url, cb) {

        cc.loader.loadRes(url, (err, prefab) => {

            if (err)
                cc.log(err);
            else
                cb(cc.instantiate(prefab));
        });
    }
}
