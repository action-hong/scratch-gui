import React from 'react';
import PropTypes from 'prop-types';

class BLEItem extends React.Component {
  
    constructor (props) {
        super(props);
        this.handleBtnClick = this.handleBtnClick.bind(this);
        this.handleDivClick = this.handleDivClick.bind(this);
    }

    handleBtnClick (e) {
        this.props.onHandleClick(e, this.props.id);
    }

    handleDivClick (e) {
        this.props.onHandleDivClick(e, this.props.id);
    }

    render () {
        const {
            id,
            name,
            state
        } = this.props;

        let content = '连接';
        if (state === 1) {
            content = '连接中';
        } else if (state === 2) {
            content = '断开';
        }

        return (
            <div
                onClick={this.handleDivClick}
            >
                <span>{id}  </span>
                <span>{name}  </span>
                <button
                    onClick={this.handleBtnClick}
                >
                    {content}
                </button>
            </div>
        );
    }
}

BLEItem.propTypes = {
    id: PropTypes.string,
    name: PropTypes.string,
    onHandleClick: PropTypes.func.isRequired,
    onHandleDivClick: PropTypes.func.isRequired,
    state: PropTypes.number
};

export default BLEItem;
