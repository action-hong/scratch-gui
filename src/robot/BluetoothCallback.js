const NORMAL = '123321123';
const COLOR = '001';
const ULTRASONIC = '002';
const TRACKING = '003';
const KEY = '004';
const HUMITURE = '005';
const PHOTOSENSITIVE = '006';
const VOICE = '007';
const INFRARED_REC = '008';

const RGB = '101';
const LED = '102';
const BEE = '103';
const INFRARED_SEND = '105';
const SEGMENT_DISPLAYS = '104';

// 封装返回的数据信息
class BLEMsg {
    constructor (type, port, vals, msg) {
        this.type = type;
        this.port = port;
        this.vals = vals;
        this.msg = msg;
    }
}

// 解析设备返回的数据信息
class BLEMsgParser {
    constructor (text) {
        this.text = text;
    }

    parse () {
        if (this.text && this.text.startsWith('#')) {
            const strs = this.text.split(',');
            const length = strs.length;
            const type = strs[1];
            const port = strs[2];
            const vals = strs.splice(3, length - 4);
            return new BLEMsg(type, port, vals, this.text);
        }
        return new BLEMsg(NORMAL, 0, [], this.text);
    
    }
}

// 分配返回的数据信息
class BLEMsgDispatch {
    constructor () {
        this.callbacks = {};
    }

    onReceive (id, data) {
        const parser = new BLEMsgParser(data);
        const msg = parser.parse();
        const type = msg.type;
        let callbacks = this.callbacks[type];
        if (callbacks) {
            for (const callback of callbacks) {
                callback(msg);
                // 清空
            }
        }
        this.callbacks[type] = [];        
    }

    once (type, callback) {
        this.callbacks[type] = this.callbacks[type] || [];
        this.callbacks[type].push(callback);
    }

    clear () {
        this.callbacks = {};
    }
}

export default BLEMsgDispatch;

export {
    COLOR,
    ULTRASONIC,
    TRACKING,
    KEY,
    HUMITURE,
    PHOTOSENSITIVE,
    VOICE,
    INFRARED_REC,
    RGB,
    LED,
    BEE,
    INFRARED_SEND,
    SEGMENT_DISPLAYS
};
