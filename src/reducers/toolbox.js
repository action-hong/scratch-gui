const UPDATE_TOOLBOX = 'scratch-gui/toolbox/UPDATE_TOOLBOX';
const UPDATE_TOOLBOX_MODE = 'scratch-gui/toolbox/UPDATE_TOOLBOX_MODE';
import makeToolboxXML from '../lib/make-toolbox-xml';

const initialState = {
    toolboxXML: makeToolboxXML(true),
    // 用于判断当前处于什么状态(lua脚本的还是正常的scratch)
    toolboxMode: 'iKern'
};

const reducer = function (state, action) {
    if (typeof state === 'undefined') state = initialState;
    switch (action.type) {
    case UPDATE_TOOLBOX:
        return Object.assign({}, state, {
            toolboxXML: action.toolboxXML
        });
    case UPDATE_TOOLBOX_MODE:
        return Object.assign({}, state, {
            toolboxMode: action.toolboxMode
        });
    default:
        return state;
    }
};

const updateToolbox = function (toolboxXML) {
    return {
        type: UPDATE_TOOLBOX,
        toolboxXML: toolboxXML
    };
};

const updateToolboxMode = function (toolboxMode) {
    return {
        type: UPDATE_TOOLBOX_MODE,
        toolboxMode
    };
};

export {
    reducer as default,
    updateToolbox,
    updateToolboxMode
};
