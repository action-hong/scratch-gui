import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import GreenFlag from '../green-flag/green-flag.jsx';
import StopAll from '../stop-all/stop-all.jsx';
import TurboMode from '../turbo-mode/turbo-mode.jsx';

import styles from './controls.css';

const Controls = function (props) {
    const {
        active,
        className,
        onGreenFlagClick,
        onStopAllClick,
        onSendLuaCode,
        onStopSnedLuaCode,
        onOpenBLEScan,
        turbo,
        ...componentProps
    } = props;
    return (
        <div
            className={classNames(styles.controlsContainer, className)}
            {...componentProps}
        >
            <GreenFlag
                active={active}
                onClick={onGreenFlagClick}
            />
            <StopAll
                active={active}
                onClick={onStopAllClick}
            />
            <button
                onClick={onSendLuaCode}
            >
                烧录脚本
            </button>
            <button
                onClick={onStopSnedLuaCode}
            >
                停止
            </button>
            <button
                onClick={onOpenBLEScan}
            >
                蓝牙
            </button>
            {turbo ? (
                <TurboMode />
            ) : null}
        </div>
    );
};

Controls.propTypes = {
    active: PropTypes.bool,
    className: PropTypes.string,
    onGreenFlagClick: PropTypes.func.isRequired,
    onOpenBLEScan: PropTypes.func.isRequired,
    onSendLuaCode: PropTypes.func.isRequired,
    onStopAllClick: PropTypes.func.isRequired,
    onStopSnedLuaCode: PropTypes.func.isRequired,
    turbo: PropTypes.bool
};

Controls.defaultProps = {
    active: false,
    turbo: false
};

export default Controls;
