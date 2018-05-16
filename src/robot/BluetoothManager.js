/**
 * Created by PVer on 2017/8/10.
 */
import config from './BluetoothConfig';
import BLEDispatch from './BluetoothCallback';
const BluetoothManager = {
    // 已连接的设备
    devices: new Map(),
    // 所有回调(设备连接,断开,接受)
    callbacks: new Map(),
    // 至少有一个连接设备则为连接, 否则为断开
    state: config.BLE_DISCONNECT,
    // 蓝牙返回信息处理
    dispatch: new BLEDispatch(),
    isConnected () {
        return this.state === config.BLE_CONNECTED;
    },
    connectCallback (robot) {
        this.devices.set(robot.id, robot);
        for (const c of this.callbacks.values()) {
            c.connectCallback && c.connectCallback(robot);
        }
        this.state = config.BLE_CONNECTED;
    },
    disconnectAllDevices () {
        for (const d of this.devices.values()) {
            d.disconnect();
        }
    },
    disconnectCallback (deviceId) {
        this.devices.delete(deviceId);
        for (const c of this.callbacks.values()) {
            c.disconnectCallback && c.disconnectCallback(deviceId);
        }
        if (this.devices.size === 0) {
            this.state = config.BLE_DISCONNECT;
        }
    },
    receiveData (deviceId, data) {
        console.log('device', deviceId, '返回值: ', data);
        for (const c of this.callbacks.values()) {
            c && c(deviceId, data);
        }
        this.dispatch.onReceive(deviceId, data);
    },
    // 回调后自动取消注册, 类似once
    registerRec (key, callback) {
        this.dispatch.once(key, callback);
    },
    register (key, callback) {
        this.callbacks.set(key, callback);
    },
    unRegister (key) {
        this.callbacks.delete(key);
    },
    getArray () {
        const array = [];
        for (const r of this.devices.values()) {
            array.push(r);
        }
        return array;
    },
    send (cmd, success, failure) {
        if (this.devices.size === 0) {
            failure && failure();
            return;
        }
        const callback = new Callback(this.devices.size, success, failure);
        for (const d of this.devices.values()) {
            d.write(cmd, () => {
                callback.success();
            }, () => {
                callback.failure();
                // 发送失败, 那就清空callback
                this.dispatch.clear();
            });
        }
    },
    /**
   * 停止当前所有的蓝牙发送
   */
    stop () {
        for (const d of this.devices.values()) {
            d.stop();
        }
    },
    /**
   * 是否还在发送
   */
    isRunning () {
        let s = false;
        for (const d of this.devices.values()) {
            s = s || d.sending || (d.sendQueue.length !== 0);
        }
        return s;
    },
    /**
   * 打开蓝牙后, callback, ios的话直接调用
   * @param callback
   */
    enable (callback) {
        callback();
    },
    /**
   * 开始扫描
   * @param services
   * @param success
   * @param failure
   */
    startScan (services, success, failure) {
    // eslint-disable-next-line no-undef
        ble.startScan(services, success, failure);
    // eslint-disable-next-line no-undef
    // ble.scan(services, 20, success, failure)
    },

    /**
   * 停止扫描
   * @param success
   * @param failure
   */
    stopScan (success, failure) {
    // eslint-disable-next-line no-undef
        ble.stopScan(success, failure);
    }
};
/**
 * 辅助回调, 保证所有设备同步执行
 */
class Callback {
    constructor (num, success, failure) {
        this.num = num;
        this.s = success;
        this.f = failure;
    }
    success () {
        console.log(`成功回调: ${this.num}`);
        this.num--;
        if (this.num === 0) {
            this.s && this.s();
        }
    }
    failure () {
        this.num--;
        console.log(`失败回调: ${this.num}`);
        if (this.num === 0) {
            this.f && this.f();
        }
    }
}

export default BluetoothManager;
