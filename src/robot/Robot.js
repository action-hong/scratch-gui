import config from './BluetoothConfig';
import manager from './BluetoothManager';

class Robot {
    constructor (device) {
        this.id = device.id;
        this.name = device.name;
        this.state = 0;
        this.profile = device;
        this.sending = false;
        this.sendQueue = [];
        this.recData = '';
    }

    connect (success, failure) {
        this.state = 1;
        // eslint-disable-next-line no-undef
        ble.connect(this.id, device => {
            this.profile = Object.assign(this.profile, device);
            this.sending = false;
            this.state = 2;
            console.log(`连接成功:  ${JSON.stringify(this.profile)}`);
            this.__init();
            this.__connectCallback();
            success && success(this.id);
        }, () => {
            failure && failure();
            // 必须用箭头函数, 不然里面的this不是当前实例
            this.disconnectCallback();
        });
    }

    /**
   * 断开
   */
    disconnect (callback) {
    // eslint-disable-next-line no-undef
        this.readService && ble.stopNotification(this.id, this.readService, this.readCharacteristic, () => {
            console.log(`取消监听: ${this.id}`);
        }, () => {
            console.log(`取消监听失败: ${this.id}`);
        });
        // eslint-disable-next-line no-undef
        ble.disconnect(this.id, () => {
            callback && callback();
            this.disconnectCallback();
        });
    }
    disconnectCallback () {
        console.log('断开成功', this.id);
        this.state = config.BLE_DISCONNECT;
        this.__disconnectCallback();
    }
    /**
   * 根据当前状态去连接或断开
   */
    perform (connect, disconnect) {
        const s = this.state;
        if (s === config.BLE_DISCONNECT) {
            this.connect(connect, disconnect);
        } else if (s === config.BLE_CONNECTED || s === config.BLE_CONNECTING) {
            this.disconnect(disconnect);
        } else {
            console.error(`state only be 0,1,2 ${s} is invalid value`);
        }
    }
    write (data, success, failure) {
        if (data === '') {
            success && success();
            return;
        }
        if (this.state !== config.BLE_CONNECTED || !this.writeService) {
            console.error('无法对断开的设备发送指令', this.id, this.state);
            failure && failure(`无法对断开的设备发送 ${this.id}, ${this.state}`);
        } else {
            const arr = Robot.splitData(data);
            console.log(arr);
            arr.forEach((val, index) => {
                let s = null;
                let f = null;
                // 最后一个回调
                if (index === arr.length - 1) {
                    s = success;
                    f = failure;
                }
                this.__send(val, s, f);
            });
        }
    }
    stop () {
        this.sendQueue = [];
        this.sending = false;
        console.log('清空要发的东西');
    }
    __send (data, success, failure) {
        if (this.sending) {
            this.sendQueue.push({
                data: data,
                success: success,
                failure: failure
            });
            console.log('当前要发的:', this.sendQueue);
        } else {
            this.sending = true;
            console.log(`service: ${this.writeService}, characteristic: ${this.writeCharacteristic}`);
            console.log(`开始发送${data}`);
            // eslint-disable-next-line no-undef
            ble.write(this.id, this.writeService, this.writeCharacteristic, Robot.stringToBytes(data), () => {
                console.log(`发送成功: ${data} 设备: ${this.id}`);
                this.__next();
                success && success();
            }, () => {
                console.log(`发送失败: ${data} 设备: ${this.id}`);
                this.__next();
                failure && failure();
            });
        }
        // eslint-disable-next-line no-undef
    // ble.write(this.id, this.writeService, this.writeCharacteristic, Robot.stringToBytes(data))
    // success && success()
    }

    
    __next () {
        this.sending = false;
        const task = this.sendQueue.shift();
        task && this.__send(task.data, task.success, task.failure);
    }
    __init () {
        console.log(this.profile);
        const characteristics = this.profile.characteristics;
        if (characteristics) {
            for (const c of characteristics) {
                console.log(JSON.stringify(c));
                const s = c.service;
                const cc = c.characteristic.toUpperCase();
                if (Robot.contains(config.UUID_WRITER, cc)) {
                    this.writeCharacteristic = cc.toUpperCase();
                    this.writeService = s;
                } else if (Robot.contains(config.UUID_READER, cc)) {
                    this.readCharacteristic = cc;
                    this.readService = s;
                }
            }
        }
        // eslint-disable-next-line no-undef
        this.readService && ble.startNotification(this.id, this.readService, this.readCharacteristic, buffer => {
            this.__receiveData(Robot.onData(buffer));
        });
    }

    __connectCallback () {
        manager.connectCallback(this);
    }
    __disconnectCallback () {
        manager.disconnectCallback(this.id);
    }
    __receiveData (data) {
        console.log(`robot recive: ${data}`);
        data = data.trim();
        // TODO 如何拼接返回值
        if (this.recData.length === 0 && !data.startsWith('#')) {
            manager.receiveData(this.id, data);
        } else {
            this.recData += data;
            if (data.endsWith('*')) {
                // 该语句结束
                manager.receiveData(this.id, this.recData);
                this.recData = '';
            }
        }
    }
    static contains (arr, obj) {
        let i = arr.length;
        while (i--) {
            if (arr[i] === obj) {
                return true;
            }
        }
        return false;
    }

    static splitData (data) {
        const l = data.length;
        if (l <= config.MAX_LENGTH) {
            return [data];
        }
        const arr = [];
        let i = 0;
        while (i < data.length) {
            let end = i + config.MAX_LENGTH;
            if (end > data.length) {
                end = data.length;
            }
            arr.push(data.substring(i, end));
            i += config.MAX_LENGTH;
        }
        return arr;
    
    }
    static stringToBytes (s) {
        const array = new Uint8Array(s.length);
        for (let i = 0, l = s.length; i < l; i++) {
            array[i] = s.charCodeAt(i);
        }
        return array.buffer;
    }
    static onData (buffer) {
        const data = new Uint8Array(buffer);
        return String.fromCharCode.apply(null, data);
    }
}

export default Robot;
