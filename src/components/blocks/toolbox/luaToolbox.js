export default `<xml id="toolbox-categories" style="display: none">
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
      <field name="NUM">666</field>
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
<block type="blockly_io_bee"></block>
<block type="blockly_io_read_pose"></block>
<block type="blockly_io_play_pose"></block>
<block type="blockly_io_init_infrared"></block>
<block type="blockly_io_read_infrared"></block>
<block type="blockly_io_read_voice"></block>
<block type="blockly_io_init_read_rgb"></block>
<block type="blockly_io_read_rgb"></block>
<block type="blockly_io_init_light"></block>
<block type="blockly_io_read_light"></block>
<block type="blockly_io_read_patrol"></block>
<block type="blockly_io_read_array"></block>
<block type="blockly_io_stroke_str">
  <value name="VALUE">
    <shadow type="text">
      <field name="TEXT"></field>
    </shadow>
  </value>
  <value name="NUM">
    <shadow type="math_number">
      <field name="NUM">1</field>
    </shadow>
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
