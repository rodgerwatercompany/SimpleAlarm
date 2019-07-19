
const { ccclass, property } = cc._decorator;

@ccclass
export default class GameModel {

    private getUserData () {

        const strUserData = cc.sys.localStorage.getItem('userData');
        let userData = null;
        if (!strUserData) {

            userData = {
                UserAlarms : {}
            };
            cc.sys.localStorage.setItem('userData', JSON.stringify(userData));
        }else {

            userData = JSON.parse(strUserData);
            if (typeof(userData.UserAlarms) === 'undefined')
                userData.UserAlarms = {};
        }

        return userData;
    }

    createAlarm (obj) {

        const userData = this.getUserData();
        const newAlarm = {
            alarmID : new Date().getTime(),
            time: obj.time,
            repeat : 0,
            ringSetting: {},
            volumeSetting : {}
        };

        userData.UserAlarms[newAlarm.alarmID] = newAlarm;

        cc.sys.localStorage.setItem('userData', JSON.stringify(userData));

        return newAlarm;
    }

    deleteAlarm (obj) {

        const userData = this.getUserData();
        delete userData.UserAlarms[obj.alarmID];
        cc.sys.localStorage.setItem('userData', JSON.stringify(userData));
        cc.log(userData);
    }

    getUserAlarms () {

        return this.getUserData().UserAlarms;

    }

}
