import React from 'react';
import BLEManager from '../robot/BluetoothManager';
import Robot from '../robot/Robot';
import BLEConfig from '../robot/BluetoothConfig';
import BLEItem from '../components/robot/BLEItem';
// 生成当前所有蓝牙设备的数据
const generateDevices = () => BLEManager.getArray().map(robot => ({
    id: robot.id,
    name: robot.name,
    state: robot.state
}));

const Robots = new Map();

class BLEContainer extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            devices: generateDevices(),
            scaning: false
        };
    }

    startScan () {
        if (this.state.scaning) {
            return;
        }

        const devices = generateDevices();
        this.setState({
            devices,
            scaning: true
        });

        // 开始扫描

        BLEManager.startScan([], device => {
            const name = device.name;
            const id = device.id;
            if (!name) {
                return;
            }
            if (!BLEConfig.FILTER_BLE_NAME.some(val => name.toUpperCase().startsWith(val))) {
                return;
            }

            if (this.state.devices.some(val => val.id === id)) {
                // 已经扫描了
                return;
            }

            Robots.set(device.id, new Robot(device));

            const newDevices = generateDevices();

            this.setState({
                devices: newDevices.concat({
                    id: device.id,
                    name: device.name,
                    state: 0
                }),
                scaning: this.state.scaning
            });
        });

    }

    stopScan () {
        if (!this.state.scaning) {
            return;
        }

        const devices = generateDevices();
        this.setState({
            devices,
            scaning: false
        });
    }

    handleStateChange (id, state) {
        const devices = generateDevices();

        const device = devices.filter(val => val.id === id)[0];

        device.state = state;

        this.setState({
            devices,
            scaning: this.state.scaning
        });
    }

    handleBLEConnect (e, id) {
        e.preventDefault();
        const robot = Robots.get(id);
        this.handleStateChange(id, 1);
        robot.perform(_ => {
            // 连接成功了
            this.handleStateChange(id, 2);
        }, () => {
            // 连接失败了
            this.handleStateChange(id, 0);
        });
    }

    handleBLEClick (e, id) {
        e.preventDefault();
        const robot = Robot.get(id);
        robot.write(BLEConfig.COLOR_CMDS[Math.floor(Math.random() * 5)]);
    }

    render () {

        const devices = this.states.devices.map(device => (
            <BLEItem
                id={device.id}
                key={device.id}
                name={device.name}
                state={device.state}
                onHandleClick={this.handleBLEConnect}
                onHandleDivClick={this.handleBLEClick}
            />
        ));

        return (
            <div>
                {devices}
                <button
                    onClick={() => this.startScan()}
                >
          扫描
                </button>
                <button
                    onClick={() => this.stopScan()}
                >
          停止扫描
                </button>
            </div>
        );
    }
}

export default BLEContainer;
