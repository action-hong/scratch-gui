import PropTypes from 'prop-types';
import React from 'react';

import Box from '../box/box.jsx';

import languageIcon from './language-icon.svg';
import styles from './language-selector.css';

import toolboxs from '../blocks/toolbox';

const ToolboxSelector = ({
    currentToolboxMode,
    onChange,
    ...props
}) => (
    <Box {...props}>
        <div className={styles.group}>
            <img
                className={styles.languageIcon}
                src={languageIcon}
            />
            <select
                aria-label="language selector"
                className={styles.languageSelect}
                value={currentToolboxMode}
                onChange={onChange}
            >
                {Object.keys(toolboxs).map(val => (
                    <option
                        key={val}
                        value={val}
                    >
                        {val}
                    </option>
                ))}
            </select>
        </div>
    </Box>
);


ToolboxSelector.propTypes = {
    currentToolboxMode: PropTypes.string,
    onChange: PropTypes.func
};

export default ToolboxSelector;
