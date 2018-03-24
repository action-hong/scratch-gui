/**
 * Created by kkopite on 2017/8/23.
 */

require('../BlocklyLua');
require('../polyfill');
require('../BlocklyLanguage');

import scratchToolbox from './scratchToolbox';
import luaToolbox from './luaToolbox';

export default {
    normal: scratchToolbox,
    lua: luaToolbox
};
