import bindAll from 'lodash.bindall';
import debounce from 'lodash.debounce';
import defaultsDeep from 'lodash.defaultsdeep';
import makeToolboxXML from '../lib/make-toolbox-xml';
import PropTypes from 'prop-types';
import React from 'react';
import VMScratchBlocks from '../lib/blocks';
import VM from 'scratch-vm';

import analytics from '../lib/analytics';
import Prompt from './prompt.jsx';
import BlocksComponent from '../components/blocks/blocks.jsx';
import ExtensionLibrary from './extension-library.jsx';
import CustomProcedures from './custom-procedures.jsx';

import {connect} from 'react-redux';
import {updateToolbox} from '../reducers/toolbox';
import {activateColorPicker} from '../reducers/color-picker';
import {closeExtensionLibrary} from '../reducers/modals';
import {activateCustomProcedures, deactivateCustomProcedures} from '../reducers/custom-procedures';

const LuaToolboxXML = `<xml id="toolbox-categories" style="display: none">
<category name="robot" colour="#4C97FF" secondaryColour="#3373CC">
<block type="blockly_io_write"></block>
<block type="blockly_io_read"></block>
<block type="blockly_io_delayms">
  <value name="blockly_io_delay_time">
    <shadow type="math_number">
      <field name="NUM">1</field>
    </shadow>
  </value>
</block>
<block type="blockly_io_read_u1tra"></block>
<block type="blockly_io_read_humi"></block>
<block type="blockly_io_initdht11"></block>
<block type="blockly_io_read_temp"></block>
<block type="blockly_io_tube_all">
  <value name="blockly_io_tube_data">
    <shadow type="math_number">
      <field name="NUM">1</field>
    </shadow>
  </value>
</block>
<block type="blockly_io_led">
  <value name="blockly_io_led_data">
    <shadow type="colour_picker">
      <field name="COLOUR">#3333ff</field>
    </shadow>
  </value>
</block>
<block type="blockly_io_key"></block>
<block type="blockly_io_print">
  <value name="blockly_io_print_content">
    <shadow type="text">
      <field name="TEXT"></field>
    </shadow>
  </value>
</block>
<block type="blockly_io_uart_rec"></block>
<block type="blockly_io_bee"></block>
<block type="blockly_io_read_action"></block>
<block type="blockly_io_play_action"></block>
</category>
  <category name="Motion" colour="#4C97FF" secondaryColour="#3373CC">
    <block type="motion_movesteps" id="motion_movesteps">
      <value name="STEPS">
        <shadow type="math_number">
          <field name="NUM">10</field>
        </shadow>
      </value>
    </block>
    <block type="motion_turnright" id="motion_turnright">
      <value name="DEGREES">
        <shadow type="math_number">
          <field name="NUM">15</field>
        </shadow>
      </value>
    </block>
    <block type="motion_turnleft" id="motion_turnleft">
      <value name="DEGREES">
        <shadow type="math_number">
          <field name="NUM">15</field>
        </shadow>
      </value>
    </block>
    <block type="motion_pointindirection" id="motion_pointindirection">
      <value name="DIRECTION">
        <shadow type="math_angle">
          <field name="NUM">90</field>
        </shadow>
      </value>
    </block>
    <block type="motion_pointtowards" id="motion_pointtowards">
      <value name="TOWARDS">
        <shadow type="motion_pointtowards_menu">
        </shadow>
      </value>
    </block>
    <block type="motion_gotoxy" id="motion_gotoxy">
      <value name="X">
        <shadow id="movex" type="math_number">
          <field name="NUM">0</field>
        </shadow>
      </value>
      <value name="Y">
        <shadow id="movey" type="math_number">
          <field name="NUM">0</field>
        </shadow>
      </value>
    </block>
    <block type="motion_goto" id="motion_goto">
      <value name="TO">
        <shadow type="motion_goto_menu">
        </shadow>
      </value>
    </block>
    <block type="motion_glidesecstoxy" id="motion_glidesecstoxy">
      <value name="SECS">
        <shadow type="math_number">
          <field name="NUM">1</field>
        </shadow>
      </value>
      <value name="X">
        <shadow id="glidex" type="math_number">
          <field name="NUM">0</field>
        </shadow>
      </value>
      <value name="Y">
        <shadow id="glidey" type="math_number">
          <field name="NUM">0</field>
        </shadow>
      </value>
    </block>
    <block type="motion_glideto" id="motion_glideto">
      <value name="SECS">
        <shadow type="math_number">
          <field name="NUM">1</field>
        </shadow>
      </value>
      <value name="TO">
        <shadow type="motion_glideto_menu">
        </shadow>
      </value>
    </block>
    <block type="motion_changexby" id="motion_changexby">
      <value name="DX">
        <shadow type="math_number">
          <field name="NUM">10</field>
        </shadow>
      </value>
    </block>
    <block type="motion_setx" id="motion_setx">
      <value name="X">
        <shadow id="setx" type="math_number">
          <field name="NUM">0</field>
        </shadow>
      </value>
    </block>
    <block type="motion_changeyby" id="motion_changeyby">
      <value name="DY">
        <shadow type="math_number">
          <field name="NUM">10</field>
        </shadow>
      </value>
    </block>
    <block type="motion_sety" id="motion_sety">
      <value name="Y">
        <shadow id="sety" type="math_number">
          <field name="NUM">0</field>
        </shadow>
      </value>
    </block>
    <block type="motion_ifonedgebounce" id="motion_ifonedgebounce"></block>
    <block type="motion_setrotationstyle" id="motion_setrotationstyle"></block>
    <block type="motion_xposition" id="motion_xposition"></block>
    <block type="motion_yposition" id="motion_yposition"></block>
    <block type="motion_direction" id="motion_direction"></block>
  </category>
  <category name="Looks" colour="#9966FF" secondaryColour="#774DCB">
    <block type="looks_show" id="looks_show"></block>
    <block type="looks_hide" id="looks_hide"></block>
    <block type="looks_switchcostumeto" id="looks_switchcostumeto">
      <value name="COSTUME">
        <shadow type="looks_costume"></shadow>
      </value>
    </block>
    <block type="looks_nextcostume" id="looks_nextcostume"></block>
    <block type="looks_nextbackdrop" id="looks_nextbackdrop"></block>
    <block type="looks_switchbackdropto" id="looks_switchbackdropto">
      <value name="BACKDROP">
        <shadow type="looks_backdrops"></shadow>
      </value>
    </block>
    <block type="looks_switchbackdroptoandwait" id="looks_switchbackdroptoandwait">
      <value name="BACKDROP">
        <shadow type="looks_backdrops"></shadow>
      </value>
    </block>
    <block type="looks_changeeffectby" id="looks_changeeffectby">
      <value name="CHANGE">
        <shadow type="math_number">
          <field name="NUM">10</field>
        </shadow>
      </value>
    </block>
    <block type="looks_seteffectto" id="looks_seteffectto">
      <value name="VALUE">
        <shadow type="math_number">
          <field name="NUM">10</field>
        </shadow>
      </value>
    </block>
    <block type="looks_cleargraphiceffects" id="looks_cleargraphiceffects"></block>
    <block type="looks_changesizeby" id="looks_changesizeby">
      <value name="CHANGE">
        <shadow type="math_number">
          <field name="NUM">10</field>
        </shadow>
      </value>
    </block>
    <block type="looks_setsizeto" id="looks_setsizeto">
      <value name="SIZE">
        <shadow type="math_number">
          <field name="NUM">100</field>
        </shadow>
      </value>
    </block>
    <block type="looks_gotofrontback" id="looks_gotofrontback"></block>
    <block type="looks_goforwardbackwardlayers" id="looks_goforwardbackwardlayers">
      <value name="NUM">
        <shadow type="math_integer">
          <field name="NUM">1</field>
        </shadow>
      </value>
    </block>
    <block type="looks_costumenumbername" id="looks_costumenumbername"></block>
    <block type="looks_backdropnumbername" id="looks_backdropnumbername"></block>
    <block type="looks_size" id="looks_size"></block>
  </category>
  <category name="Sound" colour="#D65CD6" secondaryColour="#BD42BD">
    <block type="sound_play" id="sound_play">
      <value name="SOUND_MENU">
        <shadow type="sound_sounds_menu"></shadow>
      </value>
    </block>
    <block type="sound_playuntildone" id="sound_playuntildone">
      <value name="SOUND_MENU">
        <shadow type="sound_sounds_menu"></shadow>
      </value>
    </block>
    <block type="sound_stopallsounds" id="sound_stopallsounds"></block>
    <block type="sound_playdrumforbeats" id="sound_playdrumforbeats">
      <value name="DRUM">
        <shadow type="sound_drums_menu"></shadow>
      </value>
      <value name="BEATS">
        <shadow type="math_number">
          <field name="NUM">0.25</field>
        </shadow>
      </value>
    </block>
    <block type="sound_restforbeats" id="sound_restforbeats">
      <value name="BEATS">
        <shadow type="math_number">
          <field name="NUM">0.25</field>
        </shadow>
      </value>
    </block>
    <block type="sound_playnoteforbeats" id="sound_playnoteforbeats">
      <value name="NOTE">
        <shadow type="math_number">
          <field name="NUM">60</field>
        </shadow>
      </value>
      <value name="BEATS">
        <shadow type="math_number">
          <field name="NUM">0.5</field>
        </shadow>
      </value>
    </block>
    <block type="sound_setinstrumentto" id="sound_setinstrumentto">
      <value name="INSTRUMENT">
        <shadow type="sound_instruments_menu"></shadow>
      </value>
    </block>
    <block type="sound_changeeffectby" id="sound_changeeffectby">
      <value name="VALUE">
        <shadow type="math_number">
          <field name="NUM">10</field>
        </shadow>
      </value>
    </block>
    <block type="sound_seteffectto" id="sound_seteffectto">
      <value name="VALUE">
        <shadow type="math_number">
          <field name="NUM">100</field>
        </shadow>
      </value>
    </block>
    <block type="sound_cleareffects" id="sound_cleareffects"></block>
    <block type="sound_changevolumeby" id="sound_changevolumeby">
      <value name="VOLUME">
        <shadow type="math_number">
          <field name="NUM">-10</field>
        </shadow>
      </value>
    </block>
    <block type="sound_setvolumeto" id="sound_setvolumeto">
      <value name="VOLUME">
        <shadow type="math_number">
          <field name="NUM">100</field>
        </shadow>
      </value>
    </block>
    <block type="sound_volume" id="sound_volume"></block>
    <block type="sound_changetempoby" id="sound_changetempoby">
      <value name="TEMPO">
        <shadow type="math_number">
          <field name="NUM">20</field>
        </shadow>
      </value>
    </block>
    <block type="sound_settempotobpm" id="sound_settempotobpm">
      <value name="TEMPO">
        <shadow type="math_number">
          <field name="NUM">60</field>
        </shadow>
      </value>
    </block>
    <block type="sound_tempo" id="sound_tempo"></block>
  </category>
  <category name="Events" colour="#FFD500" secondaryColour="#CC9900">
    <block type="event_whenflagclicked" id="event_whenflagclicked"></block>
    <block type="event_whenkeypressed" id="event_whenkeypressed">
    </block>
    <block type="event_whenthisspriteclicked" id="event_whenthisspriteclicked"></block>
    <block type="event_whenbackdropswitchesto" id="event_whenbackdropswitchesto">
    </block>
    <block type="event_whengreaterthan" id="event_whengreaterthan">
      <value name="VALUE">
        <shadow type="math_number">
          <field name="NUM">10</field>
        </shadow>
      </value>
    </block>
    <block type="event_whenbroadcastreceived" id="event_whenbroadcastreceived">
    </block>
    <block type="event_broadcast" id="event_broadcast">
      <value name="BROADCAST_INPUT">
        <shadow type="event_broadcast_menu"></shadow>
      </value>
    </block>
    <block type="event_broadcastandwait" id="event_broadcastandwait">
      <value name="BROADCAST_INPUT">
        <shadow type="event_broadcast_menu"></shadow>
      </value>
    </block>
  </category>
  <category name="Control" colour="#FFAB19" secondaryColour="#CF8B17">
    <block type="control_wait" id="control_wait">
      <value name="DURATION">
        <shadow type="math_positive_number">
          <field name="NUM">1</field>
        </shadow>
      </value>
    </block>
    <block type="control_repeat" id="control_repeat">
      <value name="TIMES">
        <shadow type="math_whole_number">
          <field name="NUM">10</field>
        </shadow>
      </value>
    </block>
    <block type="control_forever" id="control_forever"></block>
    <block type="control_if" id="control_if"></block>
    <block type="control_if_else" id="control_if_else"></block>
    <block type="control_wait_until" id="control_wait_until"></block>
    <block type="control_repeat_until" id="control_repeat_until"></block>
    <block type="control_stop" id="control_stop"></block>
    <block type="control_start_as_clone" id="control_start_as_clone"></block>
    <block type="control_create_clone_of" id="control_create_clone_of">
      <value name="CLONE_OPTION">
        <shadow type="control_create_clone_of_menu"></shadow>
      </value>
    </block>
    <block type="control_delete_this_clone" id="control_delete_this_clone"></block>
  </category>
  <category name="Sensing" colour="#4CBFE6" secondaryColour="#2E8EB8">
    <block type="sensing_touchingobject" id="sensing_touchingobject">
      <value name="TOUCHINGOBJECTMENU">
        <shadow type="sensing_touchingobjectmenu"></shadow>
      </value>
    </block>
    <block type="sensing_touchingcolor" id="sensing_touchingcolor">
      <value name="COLOR">
        <shadow type="colour_picker"></shadow>
      </value>
    </block>
    <block type="sensing_coloristouchingcolor" id="sensing_coloristouchingcolor">
      <value name="COLOR">
        <shadow type="colour_picker"></shadow>
      </value>
      <value name="COLOR2">
        <shadow type="colour_picker"></shadow>
      </value>
    </block>
    <block type="sensing_distanceto" id="sensing_distanceto">
      <value name="DISTANCETOMENU">
        <shadow type="sensing_distancetomenu"></shadow>
      </value>
    </block>
    <block type="sensing_keypressed" id="sensing_keypressed">
        <value name="KEY_OPTION">
          <shadow type="sensing_keyoptions"></shadow>
        </value>
    </block>
    <block type="sensing_mousedown" id="sensing_mousedown"></block>
    <block type="sensing_mousex" id="sensing_mousex"></block>
    <block type="sensing_mousey" id="sensing_mousey"></block>
    <block type="sensing_setdragmode" id="sensing_setdragmode"></block>
    <block type="sensing_loudness" id="sensing_loudness"></block>
    <block type="sensing_timer" id="sensing_timer"></block>
    <block type="sensing_resettimer" id="sensing_resettimer"></block>
    <block type="sensing_of" id="sensing_of">
      <value name="OBJECT">
        <shadow type="sensing_of_object_menu"></shadow>
      </value>
    </block>
    <block type="sensing_current" id="sensing_current"></block>
    <block type="sensing_dayssince2000" id="sensing_dayssince2000"></block>
  </category>
  <category name="Pen" colour="#00B295" secondaryColour="#0B8E69">
    <block type="pen_clear" id="pen_clear"></block>
    <block type="pen_stamp" id="pen_stamp"></block>
    <block type="pen_pendown" id="pen_pendown"></block>
    <block type="pen_penup" id="pen_penup"></block>
    <block type="pen_setpencolortocolor" id="pen_setpencolortocolor">
      <value name="COLOR">
        <shadow type="colour_picker">
        </shadow>
      </value>
    </block>
    <block type="pen_changepencolorby" id="pen_changepencolorby">
      <value name="COLOR">
        <shadow type="math_number">
          <field name="NUM">10</field>
        </shadow>
      </value>
    </block>
    <block type="pen_setpencolortonum" id="pen_setpencolortonum">
      <value name="COLOR">
        <shadow type="math_number">
          <field name="NUM">0</field>
        </shadow>
      </value>
    </block>
    <block type="pen_changepenshadeby" id="pen_changepenshadeby">
      <value name="SHADE">
        <shadow type="math_number">
          <field name="NUM">10</field>
        </shadow>
      </value>
    </block>
    <block type="pen_setpenshadeto" id="pen_setpenshadeto">
      <value name="SHADE">
        <shadow type="math_number">
          <field name="NUM">50</field>
        </shadow>
      </value>
    </block>
    <block type="pen_changepensizeby" id="pen_changepensizeby">
      <value name="SIZE">
        <shadow type="math_number">
          <field name="NUM">1</field>
        </shadow>
      </value>
    </block>
    <block type="pen_setpensizeto" id="pen_setpensizeto">
      <value name="SIZE">
        <shadow type="math_number">
          <field name="NUM">1</field>
        </shadow>
      </value>
    </block>
    <block type="pen_changepentransparencyby" id="pen_changepentransparencyby">
      <value name="TRANSPARENCY">
        <shadow type="math_number">
          <field name="NUM">10</field>
        </shadow>
      </value>
    </block>
    <block type="pen_setpentransparencyto" id="pen_setpentransparencyto">
      <value name="TRANSPARENCY">
        <shadow type="math_number">
          <field name="NUM">50</field>
        </shadow>
      </value>
    </block>
  </category>
  <category name="Operators" colour="#40BF4A" secondaryColour="#389438">
    <block type="operator_add" id="operator_add">
      <value name="NUM1">
        <shadow type="math_number">
          <field name="NUM"></field>
        </shadow>
      </value>
      <value name="NUM2">
        <shadow type="math_number">
          <field name="NUM"></field>
        </shadow>
      </value>
    </block>
    <block type="operator_subtract" id="operator_subtract">
      <value name="NUM1">
        <shadow type="math_number">
          <field name="NUM"></field>
        </shadow>
      </value>
      <value name="NUM2">
        <shadow type="math_number">
          <field name="NUM"></field>
        </shadow>
      </value>
    </block>
    <block type="operator_multiply" id="operator_multiply">
      <value name="NUM1">
        <shadow type="math_number">
          <field name="NUM"></field>
        </shadow>
      </value>
      <value name="NUM2">
        <shadow type="math_number">
          <field name="NUM"></field>
        </shadow>
      </value>
    </block>
    <block type="operator_divide" id="operator_divide">
      <value name="NUM1">
        <shadow type="math_number">
          <field name="NUM"></field>
        </shadow>
      </value>
      <value name="NUM2">
        <shadow type="math_number">
          <field name="NUM"></field>
        </shadow>
      </value>
    </block>
    <block type="operator_random" id="operator_random">
      <value name="FROM">
        <shadow type="math_number">
          <field name="NUM">1</field>
        </shadow>
      </value>
      <value name="TO">
        <shadow type="math_number">
          <field name="NUM">10</field>
        </shadow>
      </value>
    </block>
    <block type="operator_lt" id="operator_lt">
      <value name="OPERAND1">
        <shadow type="text">
          <field name="TEXT"></field>
        </shadow>
      </value>
      <value name="OPERAND2">
        <shadow type="text">
          <field name="TEXT"></field>
        </shadow>
      </value>
    </block>
    <block type="operator_equals" id="operator_equals">
      <value name="OPERAND1">
        <shadow type="text">
          <field name="TEXT"></field>
        </shadow>
      </value>
      <value name="OPERAND2">
        <shadow type="text">
          <field name="TEXT"></field>
        </shadow>
      </value>
    </block>
    <block type="operator_gt" id="operator_gt">
      <value name="OPERAND1">
        <shadow type="text">
          <field name="TEXT"></field>
        </shadow>
      </value>
      <value name="OPERAND2">
        <shadow type="text">
          <field name="TEXT"></field>
        </shadow>
      </value>
    </block>
    <block type="operator_and" id="operator_and"></block>
    <block type="operator_or" id="operator_or"></block>
    <block type="operator_not" id="operator_not"></block>
    <block type="operator_join" id="operator_join">
      <value name="STRING1">
        <shadow type="text">
          <field name="TEXT">hello</field>
        </shadow>
      </value>
      <value name="STRING2">
        <shadow type="text">
          <field name="TEXT">world</field>
        </shadow>
      </value>
    </block>
    <block type="operator_letter_of" id="operator_letter_of">
      <value name="LETTER">
        <shadow type="math_whole_number">
          <field name="NUM">1</field>
        </shadow>
      </value>
      <value name="STRING">
        <shadow type="text">
          <field name="TEXT">world</field>
        </shadow>
      </value>
    </block>
    <block type="operator_length" id="operator_length">
      <value name="STRING">
        <shadow type="text">
          <field name="TEXT">world</field>
        </shadow>
      </value>
    </block>
    <block type="operator_contains" id="operator_contains">
      <value name="STRING1">
        <shadow type="text">
          <field name="TEXT">hello</field>
        </shadow>
      </value>
      <value name="STRING2">
        <shadow type="text">
          <field name="TEXT">world</field>
        </shadow>
      </value>
    </block>
    <block type="operator_mod" id="operator_mod">
      <value name="NUM1">
        <shadow type="math_number">
          <field name="NUM"></field>
        </shadow>
      </value>
      <value name="NUM2">
        <shadow type="math_number">
          <field name="NUM"></field>
        </shadow>
      </value>
    </block>
    <block type="operator_round" id="operator_round">
      <value name="NUM">
        <shadow type="math_number">
          <field name="NUM"></field>
        </shadow>
      </value>
    </block>
    <block type="operator_mathop" id="operator_mathop">
      <value name="NUM">
        <shadow type="math_number">
          <field name="NUM"></field>
        </shadow>
      </value>
    </block>
  </category>
  <category name="Data" colour="#FF8C1A" secondaryColour="#DB6E00" custom="VARIABLE">
  </category>
  <category name="More" colour="#FF6680" secondaryColour="#FF4D6A" custom="PROCEDURE">
  </category>
  <category name="Extensions" colour="#FF6680" secondaryColour="#FF4D6A" '
    'iconURI="../media/extensions/wedo2-block-icon.svg">
    <block type="extension_pen_down" id="extension_pen_down"></block>
    <block type="extension_music_drum" id="extension_music_drum">
      <value name="NUMBER">
        <shadow type="math_number">
          <field name="NUM">1</field>
        </shadow>
      </value>
      </block>
    <block type="extension_wedo_motor" id="extension_wedo_motor"></block>
    <block type="extension_wedo_hat" id="extension_wedo_hat"></block>
    <block type="extension_wedo_boolean" id="extension_wedo_boolean"></block>
    <block type="extension_wedo_tilt_reporter" id="extension_wedo_reporter">
      <value name="TILT">
        <shadow type="extension_wedo_tilt_menu"></shadow>
      </value>
    </block>
    <block type="extension_music_reporter" id="extension_music_reporter"></block>
  </category>
  </xml>;`;

const addFunctionListener = (object, property, callback) => {
    const oldFn = object[property];
    object[property] = function () {
        const result = oldFn.apply(this, arguments);
        callback.apply(this, result);
        return result;
    };
};

class Blocks extends React.Component {
    constructor (props) {
        super(props);
        this.ScratchBlocks = VMScratchBlocks(props.vm);
        bindAll(this, [
            'attachVM',
            'detachVM',
            'handleCategorySelected',
            'handlePromptStart',
            'handlePromptCallback',
            'handlePromptClose',
            'handleCustomProceduresClose',
            'onScriptGlowOn',
            'onScriptGlowOff',
            'onBlockGlowOn',
            'onBlockGlowOff',
            'handleExtensionAdded',
            'handleBlocksInfoUpdate',
            'onTargetsUpdate',
            'onVisualReport',
            'onWorkspaceUpdate',
            'onWorkspaceMetricsChange',
            'setBlocks'
        ]);
        this.ScratchBlocks.prompt = this.handlePromptStart;
        this.state = {
            workspaceMetrics: {},
            prompt: null
        };
        this.onTargetsUpdate = debounce(this.onTargetsUpdate, 100);
    }
    componentDidMount () {
        this.ScratchBlocks.FieldColourSlider.activateEyedropper_ = this.props.onActivateColorPicker;
        this.ScratchBlocks.Procedures.externalProcedureDefCallback = this.props.onActivateCustomProcedures;

        // const workspaceConfig = defaultsDeep({},
        //     Blocks.defaultOptions,
        //     this.props.options,
        //     {toolbox: this.props.toolboxXML}
        // );

        const workspaceConfig = defaultsDeep({},
            Blocks.defaultOptions,
            this.props.options,
            {toolbox: LuaToolboxXML}
        );
        this.workspace = this.ScratchBlocks.inject(this.blocks, workspaceConfig);

        // @todo change this when blockly supports UI events
        addFunctionListener(this.workspace, 'translate', this.onWorkspaceMetricsChange);
        addFunctionListener(this.workspace, 'zoom', this.onWorkspaceMetricsChange);

        this.attachVM();
        this.props.vm.setLocale(this.props.locale, this.props.messages);

        analytics.pageview('/editors/blocks');
    }
    shouldComponentUpdate (nextProps, nextState) {
        return (
            this.state.prompt !== nextState.prompt ||
            this.props.isVisible !== nextProps.isVisible ||
            this.props.toolboxXML !== nextProps.toolboxXML ||
            this.props.extensionLibraryVisible !== nextProps.extensionLibraryVisible ||
            this.props.customProceduresVisible !== nextProps.customProceduresVisible ||
            this.props.locale !== nextProps.locale
        );
    }
    componentDidUpdate (prevProps) {
        if (prevProps.locale !== this.props.locale) {
            this.props.vm.setLocale(this.props.locale, this.props.messages);
        }

        if (prevProps.toolboxXML !== this.props.toolboxXML) {
            const selectedCategoryName = this.workspace.toolbox_.getSelectedItem().name_;
            this.workspace.updateToolbox(this.props.toolboxXML);
            this.workspace.toolbox_.setSelectedCategoryByName(selectedCategoryName);
        }
        if (this.props.isVisible === prevProps.isVisible) {
            return;
        }
        // @todo hack to resize blockly manually in case resize happened while hidden
        // @todo hack to reload the workspace due to gui bug #413
        if (this.props.isVisible) { // Scripts tab
            this.workspace.setVisible(true);
            this.props.vm.refreshWorkspace();
            window.dispatchEvent(new Event('resize'));
        } else {
            this.workspace.setVisible(false);
        }
    }
    componentWillUnmount () {
        this.detachVM();
        this.workspace.dispose();
    }
    attachVM () {
        this.workspace.addChangeListener(this.props.vm.blockListener);
        this.flyoutWorkspace = this.workspace
            .getFlyout()
            .getWorkspace();
        this.flyoutWorkspace.addChangeListener(this.props.vm.flyoutBlockListener);
        this.flyoutWorkspace.addChangeListener(this.props.vm.monitorBlockListener);
        this.props.vm.addListener('SCRIPT_GLOW_ON', this.onScriptGlowOn);
        this.props.vm.addListener('SCRIPT_GLOW_OFF', this.onScriptGlowOff);
        this.props.vm.addListener('BLOCK_GLOW_ON', this.onBlockGlowOn);
        this.props.vm.addListener('BLOCK_GLOW_OFF', this.onBlockGlowOff);
        this.props.vm.addListener('VISUAL_REPORT', this.onVisualReport);
        this.props.vm.addListener('workspaceUpdate', this.onWorkspaceUpdate);
        this.props.vm.addListener('targetsUpdate', this.onTargetsUpdate);
        this.props.vm.addListener('EXTENSION_ADDED', this.handleExtensionAdded);
        this.props.vm.addListener('BLOCKSINFO_UPDATE', this.handleBlocksInfoUpdate);
    }
    detachVM () {
        this.props.vm.removeListener('SCRIPT_GLOW_ON', this.onScriptGlowOn);
        this.props.vm.removeListener('SCRIPT_GLOW_OFF', this.onScriptGlowOff);
        this.props.vm.removeListener('BLOCK_GLOW_ON', this.onBlockGlowOn);
        this.props.vm.removeListener('BLOCK_GLOW_OFF', this.onBlockGlowOff);
        this.props.vm.removeListener('VISUAL_REPORT', this.onVisualReport);
        this.props.vm.removeListener('workspaceUpdate', this.onWorkspaceUpdate);
        this.props.vm.removeListener('targetsUpdate', this.onTargetsUpdate);
        this.props.vm.removeListener('EXTENSION_ADDED', this.handleExtensionAdded);
        this.props.vm.removeListener('BLOCKSINFO_UPDATE', this.handleBlocksInfoUpdate);
    }
    updateToolboxBlockValue (id, value) {
        const block = this.workspace
            .getFlyout()
            .getWorkspace()
            .getBlockById(id);
        if (block) {
            block.inputList[0].fieldRow[0].setValue(value);
        }
    }
    onTargetsUpdate () {
        if (this.props.vm.editingTarget) {
            ['glide', 'move', 'set'].forEach(prefix => {
                this.updateToolboxBlockValue(`${prefix}x`, Math.round(this.props.vm.editingTarget.x).toString());
                this.updateToolboxBlockValue(`${prefix}y`, Math.round(this.props.vm.editingTarget.y).toString());
            });
        }
    }
    onWorkspaceMetricsChange () {
        const target = this.props.vm.editingTarget;
        if (target && target.id) {
            const workspaceMetrics = Object.assign({}, this.state.workspaceMetrics, {
                [target.id]: {
                    scrollX: this.workspace.scrollX,
                    scrollY: this.workspace.scrollY,
                    scale: this.workspace.scale
                }
            });
            this.setState({workspaceMetrics});
        }
    }
    onScriptGlowOn (data) {
        this.workspace.glowStack(data.id, true);
    }
    onScriptGlowOff (data) {
        this.workspace.glowStack(data.id, false);
    }
    onBlockGlowOn (data) {
        this.workspace.glowBlock(data.id, true);
    }
    onBlockGlowOff (data) {
        this.workspace.glowBlock(data.id, false);
    }
    onVisualReport (data) {
        this.workspace.reportValue(data.id, data.value);
    }
    onWorkspaceUpdate (data) {
        // When we change sprites, update the toolbox to have the new sprite's blocks
        if (this.props.vm.editingTarget) {
            const target = this.props.vm.editingTarget;
            const dynamicBlocksXML = this.props.vm.runtime.getBlocksXML();
            const toolboxXML = makeToolboxXML(target.isStage, target.id, dynamicBlocksXML);
            this.props.updateToolboxState(toolboxXML);
        }

        if (this.props.vm.editingTarget && !this.state.workspaceMetrics[this.props.vm.editingTarget.id]) {
            this.onWorkspaceMetricsChange();
        }

        // Remove and reattach the workspace listener (but allow flyout events)
        this.workspace.removeChangeListener(this.props.vm.blockListener);
        const dom = this.ScratchBlocks.Xml.textToDom(data.xml);
        // @todo This line rerenders toolbox, and the change in the toolbox XML also rerenders the toolbox.
        // We should only rerender the toolbox once. See https://github.com/LLK/scratch-gui/issues/901
        this.ScratchBlocks.Xml.clearWorkspaceAndLoadFromXml(dom, this.workspace);
        this.workspace.addChangeListener(this.props.vm.blockListener);

        if (this.props.vm.editingTarget && this.state.workspaceMetrics[this.props.vm.editingTarget.id]) {
            const {scrollX, scrollY, scale} = this.state.workspaceMetrics[this.props.vm.editingTarget.id];
            this.workspace.scrollX = scrollX;
            this.workspace.scrollY = scrollY;
            this.workspace.scale = scale;
            this.workspace.resize();
        }
    }
    handleExtensionAdded (blocksInfo) {
        this.ScratchBlocks.defineBlocksWithJsonArray(blocksInfo.map(blockInfo => blockInfo.json));
        const dynamicBlocksXML = this.props.vm.runtime.getBlocksXML();
        const target = this.props.vm.editingTarget;
        const toolboxXML = makeToolboxXML(target.isStage, target.id, dynamicBlocksXML);
        this.props.updateToolboxState(toolboxXML);
    }
    handleBlocksInfoUpdate (blocksInfo) {
        // @todo Later we should replace this to avoid all the warnings from redefining blocks.
        this.handleExtensionAdded(blocksInfo);
    }
    handleCategorySelected (categoryName) {
        this.workspace.toolbox_.setSelectedCategoryByName(categoryName);
    }
    setBlocks (blocks) {
        this.blocks = blocks;
    }
    handlePromptStart (message, defaultValue, callback, optTitle) {
        const p = {prompt: {callback, message, defaultValue}};
        p.prompt.title = optTitle ? optTitle : 'New Variable';
        this.setState(p);
    }
    handlePromptCallback (data) {
        this.state.prompt.callback(data);
        this.handlePromptClose();
    }
    handlePromptClose () {
        this.setState({prompt: null});
    }
    handleCustomProceduresClose (data) {
        this.props.onRequestCloseCustomProcedures(data);
        this.workspace.refreshToolboxSelection_();
    }
    render () {
        /* eslint-disable no-unused-vars */
        const {
            customProceduresVisible,
            extensionLibraryVisible,
            options,
            vm,
            isVisible,
            onActivateColorPicker,
            updateToolboxState,
            onActivateCustomProcedures,
            onRequestCloseExtensionLibrary,
            onRequestCloseCustomProcedures,
            toolboxXML,
            ...props
        } = this.props;
        /* eslint-enable no-unused-vars */
        return (
            <div>
                <BlocksComponent
                    componentRef={this.setBlocks}
                    {...props}
                />
                {this.state.prompt ? (
                    <Prompt
                        label={this.state.prompt.message}
                        placeholder={this.state.prompt.defaultValue}
                        title={this.state.prompt.title}
                        onCancel={this.handlePromptClose}
                        onOk={this.handlePromptCallback}
                    />
                ) : null}
                {extensionLibraryVisible ? (
                    <ExtensionLibrary
                        vm={vm}
                        onCategorySelected={this.handleCategorySelected}
                        onRequestClose={onRequestCloseExtensionLibrary}
                    />
                ) : null}
                {customProceduresVisible ? (
                    <CustomProcedures
                        options={{
                            media: options.media
                        }}
                        onRequestClose={this.handleCustomProceduresClose}
                    />
                ) : null}
            </div>
        );
    }
}

Blocks.propTypes = {
    customProceduresVisible: PropTypes.bool,
    extensionLibraryVisible: PropTypes.bool,
    isVisible: PropTypes.bool,
    locale: PropTypes.string,
    messages: PropTypes.objectOf(PropTypes.string),
    onActivateColorPicker: PropTypes.func,
    onActivateCustomProcedures: PropTypes.func,
    onRequestCloseCustomProcedures: PropTypes.func,
    onRequestCloseExtensionLibrary: PropTypes.func,
    options: PropTypes.shape({
        media: PropTypes.string,
        zoom: PropTypes.shape({
            controls: PropTypes.bool,
            wheel: PropTypes.bool,
            startScale: PropTypes.number
        }),
        colours: PropTypes.shape({
            workspace: PropTypes.string,
            flyout: PropTypes.string,
            toolbox: PropTypes.string,
            toolboxSelected: PropTypes.string,
            scrollbar: PropTypes.string,
            scrollbarHover: PropTypes.string,
            insertionMarker: PropTypes.string,
            insertionMarkerOpacity: PropTypes.number,
            fieldShadow: PropTypes.string,
            dragShadowOpacity: PropTypes.number
        }),
        comments: PropTypes.bool,
        collapse: PropTypes.bool
    }),
    toolboxXML: PropTypes.string,
    updateToolboxState: PropTypes.func,
    vm: PropTypes.instanceOf(VM).isRequired
};

Blocks.defaultOptions = {
    zoom: {
        controls: true,
        wheel: true,
        startScale: 0.675
    },
    grid: {
        spacing: 40,
        length: 2,
        colour: '#ddd'
    },
    colours: {
        workspace: '#F9F9F9',
        flyout: '#F9F9F9',
        toolbox: '#FFFFFF',
        toolboxSelected: '#E9EEF2',
        scrollbar: '#CECDCE',
        scrollbarHover: '#CECDCE',
        insertionMarker: '#000000',
        insertionMarkerOpacity: 0.2,
        fieldShadow: 'rgba(255, 255, 255, 0.3)',
        dragShadowOpacity: 0.6
    },
    comments: false,
    collapse: false
};

Blocks.defaultProps = {
    isVisible: true,
    options: Blocks.defaultOptions
};

const mapStateToProps = state => ({
    extensionLibraryVisible: state.modals.extensionLibrary,
    locale: state.intl.locale,
    messages: state.intl.messages,
    toolboxXML: state.toolbox.toolboxXML,
    customProceduresVisible: state.customProcedures.active
});

const mapDispatchToProps = dispatch => ({
    onActivateColorPicker: callback => dispatch(activateColorPicker(callback)),
    onActivateCustomProcedures: (data, callback) => dispatch(activateCustomProcedures(data, callback)),
    onRequestCloseExtensionLibrary: () => {
        dispatch(closeExtensionLibrary());
    },
    onRequestCloseCustomProcedures: data => {
        dispatch(deactivateCustomProcedures(data));
    },
    updateToolboxState: toolboxXML => {
        dispatch(updateToolbox(toolboxXML));
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Blocks);
