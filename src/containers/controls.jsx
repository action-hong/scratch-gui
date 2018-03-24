import bindAll from 'lodash.bindall';
import PropTypes from 'prop-types';
import React from 'react';
import {connect} from 'react-redux';
import VM from 'scratch-vm';

import analytics from '../lib/analytics';
import ControlsComponent from '../components/controls/controls.jsx';
import bleManager from '../robot/BluetoothManager';
import Blockly from '../../../scratch-blocks-develop';

import {openBLE} from '../reducers/modals';

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
        const code = `--\n${Blockly.Lua.workspaceToCode()}--`;
        console.log(code);
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
                onOpenBLEScan={this.props.onBLEOpen}
                onSendLuaCode={this.handleSendLuaCodeClick}
                onStopAllClick={this.handleStopAllClick}
                onStopSnedLuaCode={this.handleStopSendLuaCodeClick}
            />
        );
    }
}

Controls.propTypes = {
    // 可以该值来判断如何运行当前的blockly
    currentBlocklyMode: PropTypes.string,
    onBLEOpen: PropTypes.func.isRequired,
    vm: PropTypes.instanceOf(VM)
};

const mapStateToProps = state => ({
    currentBlocklyMode: state.toolbox.toolboxMode
});

const mapDispatchToProps = dispatch => ({
    onBLEOpen: () => {
        dispatch(openBLE());
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Controls);
