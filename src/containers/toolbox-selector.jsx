import {connect} from 'react-redux';
import {updateToolbox, updateToolboxMode} from '../reducers/toolbox';

import ToolboxSelectorComponent from '../components/toolbox-selector/toolbox-selector.jsx';

import DEFAULT_TOOLBOX from '../components/blocks/defaultToolbox';
import LUA_TOOLBOX from '../components/blocks/myBlocks';

const TOOLBOX_XML = {
    normal: DEFAULT_TOOLBOX,
    lua: LUA_TOOLBOX
};

const mapStateToProps = state => ({
    currentToolboxMode: state.toolbox.toolboxMode
});

const mapDispatchToProps = dispatch => ({
    onChange: e => {
        e.preventDefault();
        const mode = e.target.value;
        const xml = TOOLBOX_XML[mode] || DEFAULT_TOOLBOX;
        dispatch(updateToolboxMode(mode));
        dispatch(updateToolbox(xml));
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ToolboxSelectorComponent);
