import {connect} from 'react-redux';
import {updateToolbox, updateToolboxMode} from '../reducers/toolbox';

import ToolboxSelectorComponent from '../components/toolbox-selector/toolbox-selector.jsx';

import TOOLBOX_XML from '../components/blocks/toolbox';

const mapStateToProps = state => ({
    currentToolboxMode: state.toolbox.toolboxMode
});

const mapDispatchToProps = dispatch => ({
    onChange: e => {
        e.preventDefault();
        const mode = e.target.value;
        const xml = TOOLBOX_XML[mode];
        dispatch(updateToolboxMode(mode));
        dispatch(updateToolbox(xml));
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ToolboxSelectorComponent);
