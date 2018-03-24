import React from 'react';
import BLEManager from '../../robot/BluetoothManager';
import Robot from '../../robot/Robot';
import BLEConfig from '../../robot/BluetoothConfig';
import BLEItem from './BLEItem.jsx';
import PropTypes from 'prop-types';
import ReactModal from 'react-modal';
import styles from './ble.css';
import Box from '../box/box.jsx';

import {connect} from 'react-redux';

import {
    closeBLE
} from '../../reducers/modals';
// 生成当前所有蓝牙设备的数据
const generateDevices = () => BLEManager.getArray().map(robot => ({
    id: robot.id,
    name: robot.name,
    state: robot.state
}));

const ROBOTS = new Map();

class BLEContainer extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            devices: generateDevices(),
            scaning: false
        };

        this.handleStartScan = this.handleStartScan.bind(this);
        this.handleStoptScan = this.handleStoptScan.bind(this);
        this.handleBLEClick = this.handleBLEClick.bind(this);
        this.handleBLEConnect = this.handleBLEConnect.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);
    }

    handleStartScan () {
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

            // const newDevices = generateDevices();

            // BLEManager.devices.set(device.id, new Robot(device));

            const newDevices = this.state.devices.slice(0, this.state.devices.length);

            ROBOTS.set(id, new Robot(device));

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

    handleStoptScan () {
        if (!this.state.scaning) {
            return;
        }

        const devices = this.state.devices.slice(0, this.state.devices.length);
        this.setState({
            devices,
            scaning: false
        });

        BLEManager.stopScan();
    }

    handleStateChange (id, state) {
        const devices = this.state.devices.slice(0, this.state.devices.length);

        const device = devices.filter(val => val.id === id)[0];

        device.state = state;

        this.setState({
            devices,
            scaning: this.state.scaning
        });
    }

    handleBLEConnect (e, id) {
        e.preventDefault();
        const robot = ROBOTS.get(id);
        this.handleStateChange(id, 1);
        robot.perform(() => {
            // 连接成功了
            this.handleStateChange(id, 2);
        }, () => {
            // 连接失败了
            this.handleStateChange(id, 0);
        });
    }

    handleBLEClick (e, id) {
        e.preventDefault();
        const robot = ROBOTS.get(id);
        robot.write(BLEConfig.COLOR_CMDS[Math.floor(Math.random() * 5)]);
    }

    handleCloseModal () {
        this.handleStoptScan();
        this.props.onCloseBLE();
    }

    render () {

        const devices = this.state.devices.map(device => (
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
            <ReactModal
                isOpen
                className={styles.modalContent}
                overlayClassName={styles.modalOverlay}
            >
                <Box className={styles.body}>
                    {devices}
                </Box>

                <Box className={styles.buttonRow}>
                    <button
                        className={styles.noButton}
                        onClick={this.handleStartScan}
                    >
                         扫描
                    </button>
                    <button
                        className={styles.noButton}
                        onClick={this.handleStoptScan}
                    >
                        停止扫描
                    </button>
                    <button
                        className={styles.noButton}
                        onClick={this.handleCloseModal}
                    >
                        关闭
                    </button>
                </Box>
            </ReactModal>
        );
    }
}

BLEContainer.propTypes = {
    onCloseBLE: PropTypes.func
};

const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch => ({
    onCloseBLE: () => {
        dispatch(closeBLE());
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(BLEContainer);
