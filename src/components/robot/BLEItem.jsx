import React from 'react';
import PropTypes from 'prop-types';
const BLEItem = function (props) {
    const {
        id,
        name,
        state,
        onHandleClick,
        onHandleDivClick
    } = props;

    let content = '连接';
    if (state === 1) {
        content = '连接中';
    } else if (state === 2) {
        content = '断开';
    }

    return (
        <div
            onClick={e => onHandleDivClick(e, id)}
        >
            <span>{id}  </span>
            <span>{name}  </span>
            <button
                onClick={e => onHandleClick(e, id)}
            >
                {content}
            </button>
        </div>
    );
};

BLEItem.propTypes = {
    id: PropTypes.bool,
    name: PropTypes.string,
    onHandleClick: PropTypes.func.isRequired,
    onHandleDivClick: PropTypes.func.isRequired,
    state: PropTypes.func.isRequired
};

export default BLEItem;
