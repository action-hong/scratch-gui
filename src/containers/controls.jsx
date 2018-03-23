import bindAll from 'lodash.bindall';
import PropTypes from 'prop-types';
import React from 'react';
import VM from 'scratch-vm';

import analytics from '../lib/analytics';
import ControlsComponent from '../components/controls/controls.jsx';
import bleManager from '../robot/BluetoothManager';
import Blockly from '../../../scratch-blocks-develop';
// TODO 在该组件内再添加一个按钮用于发送lua脚本
class Controls extends React.Component {
    constructor (props) {
        super(props);
        bindAll(this, [
            'handleGreenFlagClick',
            'handleStopAllClick',
            'onProjectRunStart',
            'onProjectRunStop'
        ]);
        this.state = {
            projectRunning: false,
            turbo: false
        };
    }
    componentDidMount () {
        this.props.vm.addListener('PROJECT_RUN_START', this.onProjectRunStart);
        this.props.vm.addListener('PROJECT_RUN_STOP', this.onProjectRunStop);
    }
    componentWillUnmount () {
        this.props.vm.removeListener('PROJECT_RUN_START', this.onProjectRunStart);
        this.props.vm.removeListener('PROJECT_RUN_STOP', this.onProjectRunStop);
    }
    onProjectRunStart () {
        this.setState({projectRunning: true});
    }
    onProjectRunStop () {
        this.setState({projectRunning: false});
    }
    handleGreenFlagClick (e) {
        e.preventDefault();
        if (e.shiftKey) {
            this.setState({turbo: !this.state.turbo});
            this.props.vm.setTurboMode(!this.state.turbo);
        } else {
            this.props.vm.greenFlag();
            analytics.event({
                category: 'general',
                action: 'Green Flag'
            });
        }
    }
    handleStopAllClick (e) {
        e.preventDefault();
        this.props.vm.stopAll();
        analytics.event({
            category: 'general',
            action: 'Stop Button'
        });
    }
    handleSendLuaCodeClick (e) {
        e.preventDefault();
        const code = Blockly.Lua.workspaceToCode();
        bleManager.send(code, () => {
            console.log('发送成功');
        }, () => {
            console.log('发送失败');
        });
    }
    handleStopSendLuaCodeClick (e) {
        e.preventDefault();
        bleManager.stop();
    }
    handleScanBLEClick (e) {
        e.preventDefault();
    }
    render () {
        const {
            vm, // eslint-disable-line no-unused-vars
            ...props
        } = this.props;
        return (
            <ControlsComponent
                {...props}
                active={this.state.projectRunning}
                turbo={this.state.turbo}
                onGreenFlagClick={this.handleGreenFlagClick}
                onOpenBLEScan={this.handleScanBLEClick}
                onSendLuaCode={this.handleSendLuaCodeClick}
                onStopAllClick={this.handleStopAllClick}
                onStopSnedLuaCode={this.handleStopSendLuaCodeClick}
            />
        );
    }
}

Controls.propTypes = {
    vm: PropTypes.instanceOf(VM)
};

export default Controls;
