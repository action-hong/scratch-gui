/**
 * 添加所有scratch的模块, 使其可以生成对应代码
 * 这个代码应该是放在scratch-blockly里面的
 * 为了即使看到效果(不然每次都得编译), 暂时放在这里
 */
import Blockly from '../../../../scratch-blocks-develop';


Blockly.Lua.motion_movesteps = function (block) {
    const steps = Blockly.Lua.valueToCode(block, 'STEPS', Blockly.Lua.ORDER_ATOMIC);
    return '\n';
};
  
Blockly.Lua.motion_turnright = function (block) {
    const degrees = Blockly.Lua.valueToCode(block, 'DEGREES', Blockly.Lua.ORDER_ATOMIC);
    return '\n';
};
  
Blockly.Lua.motion_turnleft = function (block) {
    const degrees = Blockly.Lua.valueToCode(block, 'DEGREES', Blockly.Lua.ORDER_ATOMIC);
    return '\n';
};
  
Blockly.Lua.motion_pointindirection = function (block) {
    const direction = Blockly.Lua.valueToCode(block, 'DIRECTION', Blockly.Lua.ORDER_ATOMIC);
    return '\n';
};
  
Blockly.Lua.motion_pointtowards = function (block) {
    const towards = Blockly.Lua.valueToCode(block, 'TOWARDS', Blockly.Lua.ORDER_ATOMIC);
    return '\n';
};
  
Blockly.Lua.motion_gotoxy = function (block) {
    const x = Blockly.Lua.valueToCode(block, 'X', Blockly.Lua.ORDER_ATOMIC);
    const y = Blockly.Lua.valueToCode(block, 'Y', Blockly.Lua.ORDER_ATOMIC);
    return '\n';
};
  
Blockly.Lua.motion_goto = function (block) {
    const to = Blockly.Lua.valueToCode(block, 'TO', Blockly.Lua.ORDER_ATOMIC);
    return '\n';
};
  
Blockly.Lua.motion_glidesecstoxy = function (block) {
    const secs = Blockly.Lua.valueToCode(block, 'SECS', Blockly.Lua.ORDER_ATOMIC);
    const x = Blockly.Lua.valueToCode(block, 'X', Blockly.Lua.ORDER_ATOMIC);
    const y = Blockly.Lua.valueToCode(block, 'Y', Blockly.Lua.ORDER_ATOMIC);
    return '\n';
};
  
Blockly.Lua.motion_glideto = function (block) {
    const secs = Blockly.Lua.valueToCode(block, 'SECS', Blockly.Lua.ORDER_ATOMIC);
    const to = Blockly.Lua.valueToCode(block, 'TO', Blockly.Lua.ORDER_ATOMIC);
    return '\n';
};
  
Blockly.Lua.motion_changexby = function (block) {
    const dx = Blockly.Lua.valueToCode(block, 'DX', Blockly.Lua.ORDER_ATOMIC);
    return '\n';
};
  
Blockly.Lua.motion_setx = function (block) {
    const x = Blockly.Lua.valueToCode(block, 'X', Blockly.Lua.ORDER_ATOMIC);
    return '\n';
};
  
Blockly.Lua.motion_changeyby = function (block) {
    const dy = Blockly.Lua.valueToCode(block, 'DY', Blockly.Lua.ORDER_ATOMIC);
    return '\n';
};
  
Blockly.Lua.motion_sety = function (block) {
    const y = Blockly.Lua.valueToCode(block, 'Y', Blockly.Lua.ORDER_ATOMIC);
    return '\n';
};
  
Blockly.Lua.motion_ifonedgebounce = function (block) {
    return '\n';
};
  
Blockly.Lua.motion_setrotationstyle = function (block) {
    return '\n';
};
  
Blockly.Lua.motion_xposition = function (block) {
    return '\n';
};
  
Blockly.Lua.motion_yposition = function (block) {
    return '\n';
};
  
Blockly.Lua.motion_direction = function (block) {
    return '\n';
};
  
Blockly.Lua.looks_show = function (block) {
    return '\n';
};
  
Blockly.Lua.looks_hide = function (block) {
    return '\n';
};
  
Blockly.Lua.looks_switchcostumeto = function (block) {
    const costume = Blockly.Lua.valueToCode(block, 'COSTUME', Blockly.Lua.ORDER_ATOMIC);
    return '\n';
};
  
Blockly.Lua.looks_nextcostume = function (block) {
    return '\n';
};
  
Blockly.Lua.looks_nextbackdrop = function (block) {
    return '\n';
};
  
Blockly.Lua.looks_switchbackdropto = function (block) {
    const backdrop = Blockly.Lua.valueToCode(block, 'BACKDROP', Blockly.Lua.ORDER_ATOMIC);
    return '\n';
};
  
Blockly.Lua.looks_switchbackdroptoandwait = function (block) {
    const backdrop = Blockly.Lua.valueToCode(block, 'BACKDROP', Blockly.Lua.ORDER_ATOMIC);
    return '\n';
};
  
Blockly.Lua.looks_changeeffectby = function (block) {
    const change = Blockly.Lua.valueToCode(block, 'CHANGE', Blockly.Lua.ORDER_ATOMIC);
    return '\n';
};
  
Blockly.Lua.looks_seteffectto = function (block) {
    const value = Blockly.Lua.valueToCode(block, 'VALUE', Blockly.Lua.ORDER_ATOMIC);
    return '\n';
};
  
Blockly.Lua.looks_cleargraphiceffects = function (block) {
    return '\n';
};
  
Blockly.Lua.looks_changesizeby = function (block) {
    const change = Blockly.Lua.valueToCode(block, 'CHANGE', Blockly.Lua.ORDER_ATOMIC);
    return '\n';
};
  
Blockly.Lua.looks_setsizeto = function (block) {
    const size = Blockly.Lua.valueToCode(block, 'SIZE', Blockly.Lua.ORDER_ATOMIC);
    return '\n';
};
  
Blockly.Lua.looks_gotofrontback = function (block) {
    return '\n';
};
  
Blockly.Lua.looks_goforwardbackwardlayers = function (block) {
    const num = Blockly.Lua.valueToCode(block, 'NUM', Blockly.Lua.ORDER_ATOMIC);
    return '\n';
};
  
Blockly.Lua.looks_costumenumbername = function (block) {
    return '\n';
};
  
Blockly.Lua.looks_backdropnumbername = function (block) {
    return '\n';
};
  
Blockly.Lua.looks_size = function (block) {
    return '\n';
};
  
Blockly.Lua.sound_play = function (block) {
    const sound_menu = Blockly.Lua.valueToCode(block, 'SOUND_MENU', Blockly.Lua.ORDER_ATOMIC);
    return '\n';
};
  
Blockly.Lua.sound_playuntildone = function (block) {
    const sound_menu = Blockly.Lua.valueToCode(block, 'SOUND_MENU', Blockly.Lua.ORDER_ATOMIC);
    return '\n';
};
  
Blockly.Lua.sound_stopallsounds = function (block) {
    return '\n';
};
  
Blockly.Lua.sound_playdrumforbeats = function (block) {
    const drum = Blockly.Lua.valueToCode(block, 'DRUM', Blockly.Lua.ORDER_ATOMIC);
    const beats = Blockly.Lua.valueToCode(block, 'BEATS', Blockly.Lua.ORDER_ATOMIC);
    return '\n';
};
  
Blockly.Lua.sound_restforbeats = function (block) {
    const beats = Blockly.Lua.valueToCode(block, 'BEATS', Blockly.Lua.ORDER_ATOMIC);
    return '\n';
};
  
Blockly.Lua.sound_playnoteforbeats = function (block) {
    const note = Blockly.Lua.valueToCode(block, 'NOTE', Blockly.Lua.ORDER_ATOMIC);
    const beats = Blockly.Lua.valueToCode(block, 'BEATS', Blockly.Lua.ORDER_ATOMIC);
    return '\n';
};
  
Blockly.Lua.sound_setinstrumentto = function (block) {
    const instrument = Blockly.Lua.valueToCode(block, 'INSTRUMENT', Blockly.Lua.ORDER_ATOMIC);
    return '\n';
};
  
Blockly.Lua.sound_changeeffectby = function (block) {
    const value = Blockly.Lua.valueToCode(block, 'VALUE', Blockly.Lua.ORDER_ATOMIC);
    return '\n';
};
  
Blockly.Lua.sound_seteffectto = function (block) {
    const value = Blockly.Lua.valueToCode(block, 'VALUE', Blockly.Lua.ORDER_ATOMIC);
    return '\n';
};
  
Blockly.Lua.sound_cleareffects = function (block) {
    return '\n';
};
  
Blockly.Lua.sound_changevolumeby = function (block) {
    const volume = Blockly.Lua.valueToCode(block, 'VOLUME', Blockly.Lua.ORDER_ATOMIC);
    return '\n';
};
  
Blockly.Lua.sound_setvolumeto = function (block) {
    const volume = Blockly.Lua.valueToCode(block, 'VOLUME', Blockly.Lua.ORDER_ATOMIC);
    return '\n';
};
  
Blockly.Lua.sound_volume = function (block) {
    return '\n';
};
  
Blockly.Lua.sound_changetempoby = function (block) {
    const tempo = Blockly.Lua.valueToCode(block, 'TEMPO', Blockly.Lua.ORDER_ATOMIC);
    return '\n';
};
  
Blockly.Lua.sound_settempotobpm = function (block) {
    const tempo = Blockly.Lua.valueToCode(block, 'TEMPO', Blockly.Lua.ORDER_ATOMIC);
    return '\n';
};
  
Blockly.Lua.sound_tempo = function (block) {
    return '\n';
};
  
Blockly.Lua.event_whenflagclicked = function (block) {
    return '\n';
};
  
Blockly.Lua.event_whenkeypressed = function (block) {
    return '\n';
};
  
Blockly.Lua.event_whenthisspriteclicked = function (block) {
    return '\n';
};
  
Blockly.Lua.event_whenbackdropswitchesto = function (block) {
    return '\n';
};
  
Blockly.Lua.event_whengreaterthan = function (block) {
    const value = Blockly.Lua.valueToCode(block, 'VALUE', Blockly.Lua.ORDER_ATOMIC);
    return '\n';
};
  
Blockly.Lua.event_whenbroadcastreceived = function (block) {
    return '\n';
};
  
Blockly.Lua.event_broadcast = function (block) {
    const broadcast_input = Blockly.Lua.valueToCode(block, 'BROADCAST_INPUT', Blockly.Lua.ORDER_ATOMIC);
    return '\n';
};
  
Blockly.Lua.event_broadcastandwait = function (block) {
    const broadcast_input = Blockly.Lua.valueToCode(block, 'BROADCAST_INPUT', Blockly.Lua.ORDER_ATOMIC);
    return '\n';
};
  
Blockly.Lua.control_wait = function (block) {
    const duration = Blockly.Lua.valueToCode(block, 'DURATION', Blockly.Lua.ORDER_ATOMIC);
    return `Delayms(${duration});\n`;
};
  
Blockly.Lua.control_repeat = function (block) {
    const times = Blockly.Lua.valueToCode(block, 'TIMES', Blockly.Lua.ORDER_ATOMIC);
    window.testblock = block;
    console.log(times);
    let branch = Blockly.Lua.statementToCode(block, 'SUBSTACK') || '';
    branch = Blockly.Lua.addContinueLabel(branch);
    const loopVar = Blockly.Lua.variableDB_.getDistinctName(
        'count', Blockly.Variables.NAME_TYPE);
    const code = `for ${loopVar} = 1, ${times} do\n${branch}end\n`;
    return code;
};
  
Blockly.Lua.control_forever = function (block) {
    let branch = Blockly.Lua.statementToCode(block, 'SUBSTACK') || '';
    branch = Blockly.Lua.addContinueLabel(branch);
    return `while true do\n${branch}end\n`;
};
  
Blockly.Lua.control_if = function (block) {
    const conditionCode = Blockly.Lua.valueToCode(block, `CONDITION`,
        Blockly.Lua.ORDER_NONE) || 'false';
    let branch = Blockly.Lua.statementToCode(block, 'SUBSTACK') || '';
    branch = Blockly.Lua.addContinueLabel(branch);
    return `if ${conditionCode} then\n${branch}end\n`;
};
  
Blockly.Lua.control_if_else = function (block) {
    const conditionCode = Blockly.Lua.valueToCode(block, `CONDITION`,
        Blockly.Lua.ORDER_NONE) || 'false';
    let branch1 = Blockly.Lua.statementToCode(block, 'SUBSTACK') || '';
    branch1 = Blockly.Lua.addContinueLabel(branch1);
    let branch2 = Blockly.Lua.statementToCode(block, 'SUBSTACK2') || '';
    branch2 = Blockly.Lua.addContinueLabel(branch2);
    return `if ${conditionCode} then\n${branch1}else\n${branch2}end\n`;
};
  
Blockly.Lua.control_wait_until = function (block) {
    // wait until a condition become true
    // 对于lua脚本来说没有意义,
    return '\n';
};
  
Blockly.Lua.control_repeat_until = function (block) {
    const conditionCode = Blockly.Lua.valueToCode(block, `CONDITION`,
        Blockly.Lua.ORDER_NONE) || 'false';
    let branch = Blockly.Lua.statementToCode(block, 'SUBSTACK') || '';
    branch = Blockly.Lua.addContinueLabel(branch);
    return `while ${conditionCode} do\n${branch}end\n`;
};
  
Blockly.Lua.control_stop = function (block) {
    // 只有一个脚本, 直接break即可
    const option = block.getFieldValue('STOP_OPTION');
    console.log(option);
    return 'break\n';
};
  
Blockly.Lua.control_start_as_clone = function (block) {
    // lua脚本无用
    return '\n';
};
  
Blockly.Lua.control_create_clone_of = function (block) {
    // lua脚本无用
    const clone_option = Blockly.Lua.valueToCode(block, 'CLONE_OPTION', Blockly.Lua.ORDER_ATOMIC);
    return '\n';
};
  
Blockly.Lua.control_delete_this_clone = function (block) {
    // lua脚本无用
    return '\n';
};
  
Blockly.Lua.sensing_touchingobject = function (block) {
    const touchingobjectmenu = Blockly.Lua.valueToCode(block, 'TOUCHINGOBJECTMENU', Blockly.Lua.ORDER_ATOMIC);
    return '\n';
};
  
Blockly.Lua.sensing_touchingcolor = function (block) {
    const color = Blockly.Lua.valueToCode(block, 'COLOR', Blockly.Lua.ORDER_ATOMIC);
    return '\n';
};
  
Blockly.Lua.sensing_coloristouchingcolor = function (block) {
    const color = Blockly.Lua.valueToCode(block, 'COLOR', Blockly.Lua.ORDER_ATOMIC);
    const color2 = Blockly.Lua.valueToCode(block, 'COLOR2', Blockly.Lua.ORDER_ATOMIC);
    return '\n';
};
  
Blockly.Lua.sensing_distanceto = function (block) {
    const distancetomenu = Blockly.Lua.valueToCode(block, 'DISTANCETOMENU', Blockly.Lua.ORDER_ATOMIC);
    return '\n';
};
  
Blockly.Lua.sensing_keypressed = function (block) {
    const key_option = Blockly.Lua.valueToCode(block, 'KEY_OPTION', Blockly.Lua.ORDER_ATOMIC);
    return '\n';
};
  
Blockly.Lua.sensing_mousedown = function (block) {
    return '\n';
};
  
Blockly.Lua.sensing_mousex = function (block) {
    return '\n';
};
  
Blockly.Lua.sensing_mousey = function (block) {
    return '\n';
};
  
Blockly.Lua.sensing_setdragmode = function (block) {
    return '\n';
};
  
Blockly.Lua.sensing_loudness = function (block) {
    return '\n';
};
  
Blockly.Lua.sensing_timer = function (block) {
    return '\n';
};
  
Blockly.Lua.sensing_resettimer = function (block) {
    return '\n';
};
  
Blockly.Lua.sensing_of = function (block) {
    const object = Blockly.Lua.valueToCode(block, 'OBJECT', Blockly.Lua.ORDER_ATOMIC);
    return '\n';
};
  
Blockly.Lua.sensing_current = function (block) {
    return '\n';
};
  
Blockly.Lua.sensing_dayssince2000 = function (block) {
    return '\n';
};
  
Blockly.Lua.pen_clear = function (block) {
    return '\n';
};
  
Blockly.Lua.pen_stamp = function (block) {
    return '\n';
};
  
Blockly.Lua.pen_pendown = function (block) {
    return '\n';
};
  
Blockly.Lua.pen_penup = function (block) {
    return '\n';
};
  
Blockly.Lua.pen_setpencolortocolor = function (block) {
    const color = Blockly.Lua.valueToCode(block, 'COLOR', Blockly.Lua.ORDER_ATOMIC);
    return '\n';
};
  
Blockly.Lua.pen_changepencolorby = function (block) {
    const color = Blockly.Lua.valueToCode(block, 'COLOR', Blockly.Lua.ORDER_ATOMIC);
    return '\n';
};
  
Blockly.Lua.pen_setpencolortonum = function (block) {
    const color = Blockly.Lua.valueToCode(block, 'COLOR', Blockly.Lua.ORDER_ATOMIC);
    return '\n';
};
  
Blockly.Lua.pen_changepenshadeby = function (block) {
    const shade = Blockly.Lua.valueToCode(block, 'SHADE', Blockly.Lua.ORDER_ATOMIC);
    return '\n';
};
  
Blockly.Lua.pen_setpenshadeto = function (block) {
    const shade = Blockly.Lua.valueToCode(block, 'SHADE', Blockly.Lua.ORDER_ATOMIC);
    return '\n';
};
  
Blockly.Lua.pen_changepensizeby = function (block) {
    const size = Blockly.Lua.valueToCode(block, 'SIZE', Blockly.Lua.ORDER_ATOMIC);
    return '\n';
};
  
Blockly.Lua.pen_setpensizeto = function (block) {
    const size = Blockly.Lua.valueToCode(block, 'SIZE', Blockly.Lua.ORDER_ATOMIC);
    return '\n';
};
  
Blockly.Lua.pen_changepentransparencyby = function (block) {
    const transparency = Blockly.Lua.valueToCode(block, 'TRANSPARENCY', Blockly.Lua.ORDER_ATOMIC);
    return '\n';
};
  
Blockly.Lua.pen_setpentransparencyto = function (block) {
    const transparency = Blockly.Lua.valueToCode(block, 'TRANSPARENCY', Blockly.Lua.ORDER_ATOMIC);
    return '\n';
};
  
Blockly.Lua.operator_add = function (block) {
    const num1 = Blockly.Lua.valueToCode(block, 'NUM1', Blockly.Lua.ORDER_ATOMIC) || 0;
    const num2 = Blockly.Lua.valueToCode(block, 'NUM2', Blockly.Lua.ORDER_ATOMIC) || 0;
    const code = `${num1} + ${num2}`;
    return [code, Blockly.Lua.ORDER_ADDITIVE];
};
  
Blockly.Lua.operator_subtract = function (block) {
    const num1 = Blockly.Lua.valueToCode(block, 'NUM1', Blockly.Lua.ORDER_ATOMIC) || 0;
    const num2 = Blockly.Lua.valueToCode(block, 'NUM2', Blockly.Lua.ORDER_ATOMIC) || 0;
    const code = `${num1} - ${num2}`;
    return [code, Blockly.Lua.ORDER_ADDITIVE];
};
  
Blockly.Lua.operator_multiply = function (block) {
    const num1 = Blockly.Lua.valueToCode(block, 'NUM1', Blockly.Lua.ORDER_ATOMIC) || 0;
    const num2 = Blockly.Lua.valueToCode(block, 'NUM2', Blockly.Lua.ORDER_ATOMIC) || 0;
    const code = `${num1} * ${num2}`;
    return [code, Blockly.Lua.ORDER_MULTIPLICATIVE];
};
  
Blockly.Lua.operator_divide = function (block) {
    const num1 = Blockly.Lua.valueToCode(block, 'NUM1', Blockly.Lua.ORDER_ATOMIC || 0);
    const num2 = Blockly.Lua.valueToCode(block, 'NUM2', Blockly.Lua.ORDER_ATOMIC) || 1;
    const code = `${num1} / ${num2}`;
    return [code, Blockly.Lua.ORDER_MULTIPLICATIVE];
};
  
Blockly.Lua.operator_random = function (block) {
    const from = Blockly.Lua.valueToCode(block, 'FROM', Blockly.Lua.ORDER_ATOMIC) || 0;
    const to = Blockly.Lua.valueToCode(block, 'TO', Blockly.Lua.ORDER_ATOMIC) || 0;
    const code = `math.random(${from}, ${to})`;
    return [code, Blockly.Lua.ORDER_HIGH];
};
  
Blockly.Lua.operator_lt = function (block) {
    const operand1 = Blockly.Lua.valueToCode(block, 'OPERAND1', Blockly.Lua.ORDER_RELATIONAL) || '0';
    const operand2 = Blockly.Lua.valueToCode(block, 'OPERAND2', Blockly.Lua.ORDER_RELATIONAL) || '0';
    const code = `${operand1} < ${operand2}`;
    // 为什么这边返回的两个参数有引号呀 擦
    return [code, Blockly.Lua.ORDER_RELATIONAL];
};
  
Blockly.Lua.operator_equals = function (block) {
    const operand1 = Blockly.Lua.valueToCode(block, 'OPERAND1', Blockly.Lua.ORDER_RELATIONAL) || '0';
    const operand2 = Blockly.Lua.valueToCode(block, 'OPERAND2', Blockly.Lua.ORDER_RELATIONAL) || '0';
    const code = `${operand1} == ${operand2}`;
    return [code, Blockly.Lua.ORDER_RELATIONAL];
};
  
Blockly.Lua.operator_gt = function (block) {
    const operand1 = Blockly.Lua.valueToCode(block, 'OPERAND1', Blockly.Lua.ORDER_RELATIONAL) || '0';
    const operand2 = Blockly.Lua.valueToCode(block, 'OPERAND2', Blockly.Lua.ORDER_RELATIONAL) || '0';
    const code = `${operand1} > ${operand2}`;
    return [code, Blockly.Lua.ORDER_RELATIONAL];
};
  
Blockly.Lua.operator_and = function (block) {
    let operand1 = Blockly.Lua.valueToCode(block, 'OPERAND1', Blockly.Lua.ORDER_AND);
    let operand2 = Blockly.Lua.valueToCode(block, 'OPERAND2', Blockly.Lua.ORDER_AND);
    if (!operand1 && !operand2) {
        // If there are no arguments, then the return value is false.
        operand1 = 'false';
        operand2 = 'false';
    } else {
        if (!operand1) {
            operand1 = 'true';
        }
        if (!operand2) {
            operand2 = 'true';
        }
    }
    const code = `${operand1} and ${operand2}`;
    return [code, Blockly.Lua.ORDER_AND];
};
  
Blockly.Lua.operator_or = function (block) {
    let operand1 = Blockly.Lua.valueToCode(block, 'OPERAND1', Blockly.Lua.ORDER_OR);
    let operand2 = Blockly.Lua.valueToCode(block, 'OPERAND2', Blockly.Lua.ORDER_OR);
    if (!operand1 && !operand2) {
        // If there are no arguments, then the return value is false.
        operand1 = 'false';
        operand2 = 'false';
    } else {
        if (!operand1) {
            operand1 = 'false';
        }
        if (!operand2) {
            operand2 = 'false';
        }
    }
    const code = `${operand1} or ${operand2}`;
    return [code, Blockly.Lua.ORDER_OR];
};
  
Blockly.Lua.operator_not = function (block) {
    const argument0 = Blockly.Lua.valueToCode(block, 'OPERAND',
        Blockly.Lua.ORDER_UNARY) || 'true';
    const code = `not ${argument0}`;
    return [code, Blockly.Lua.ORDER_UNARY];
};
  
Blockly.Lua.operator_join = function (block) {
    const string1 = Blockly.Lua.valueToCode(block, 'STRING1', Blockly.Lua.ORDER_CONCATENATION) || '\'\'';
    const string2 = Blockly.Lua.valueToCode(block, 'STRING2', Blockly.Lua.ORDER_CONCATENATION) || '\'\'';
    const code = `${string1} .. ${string2}`;
    return [code, Blockly.Lua.ORDER_CONCATENATION];
};
  
Blockly.Lua.operator_letter_of = function (block) {
    const letter = Blockly.Lua.valueToCode(block, 'LETTER', Blockly.Lua.ORDER_NONE) || '1';
    const text = Blockly.Lua.valueToCode(block, 'STRING', Blockly.Lua.ORDER_NONE) || '\'\'';
    const functionName = Blockly.Lua.provideFunction_(
        'text_random_letter',
        [`function ${Blockly.Lua.FUNCTION_NAME_PLACEHOLDER_}(str)`,
            '  local index = math.random(string.len(str))',
            '  return string.sub(str, index, index)',
            'end']);
    const code = `${functionName}(${text})`;
    return [code, Blockly.Lua.ORDER_HIGH];
};
  
Blockly.Lua.operator_length = function (block) {
    const string = Blockly.Lua.valueToCode(block, 'STRING', Blockly.Lua.ORDER_UNARY) || '\'\'';
    return [`#${text}`, Blockly.Lua.ORDER_UNARY];
};
  
Blockly.Lua.operator_contains = function (block) {
    const string1 = Blockly.Lua.valueToCode(block, 'STRING1', Blockly.Lua.ORDER_NONE) || '\'\'';
    const string2 = Blockly.Lua.valueToCode(block, 'STRING2', Blockly.Lua.ORDER_NONE) || '\'\'';
    const functionName = Blockly.Lua.provideFunction_(
        'firstIndexOf',
        [`function ${Blockly.Lua.FUNCTION_NAME_PLACEHOLDER_
        }(str, substr) `,
        '  local i = string.find(str, substr, 1, true)',
        '  if i == nil then',
        '    return false',
        '  else',
        '    return true',
        '  end',
        'end']);
    const code = `${functionName}(${string1}, ${string2})`;
    return [code, Blockly.Lua.ORDER_HIGH];
};
  
Blockly.Lua.operator_mod = function (block) {
    const num1 = Blockly.Lua.valueToCode(block, 'NUM1', Blockly.Lua.ORDER_MULTIPLICATIVE) || '0';
    const num2 = Blockly.Lua.valueToCode(block, 'NUM2', Blockly.Lua.ORDER_MULTIPLICATIVE) || '0';
    const code = `${num1} % ${num2}`;
    return [code, Blockly.Lua.ORDER_MULTIPLICATIVE];
};
  
Blockly.Lua.operator_round = function (block) {
    const num = Blockly.Lua.valueToCode(block, 'NUM', Blockly.Lua.ORDER_NONE) || '0';
    const code = `math.floor(${arg} + .5)`;
    return [code, Blockly.Lua.ORDER_HIGH];
};
  
Blockly.Lua.operator_mathop = function (block) {
    const operator = block.getFieldValue('OPERATOR');
    let code;
    let arg;
    if (operator === 'sin' || operator === 'cos' || operator === 'tan') {
        arg = Blockly.Lua.valueToCode(block, 'NUM',
            Blockly.Lua.ORDER_MULTIPLICATIVE) || '0';
    } else {
        arg = Blockly.Lua.valueToCode(block, 'NUM',
            Blockly.Lua.ORDER_NONE) || '0';
    }
    switch (operator) {
    case 'abs':
        code = `math.abs(${arg})`;
        break;
    case 'sqrt':
        code = `math.sqrt(${arg})`;
        break;
    case 'ln':
        code = `math.log(${arg})`;
        break;
    case 'log':
        code = `math.log10(${arg})`;
        break;
    case 'e ^':
        code = `math.exp(${arg})`;
        break;
    case '10 ^':
        code = `math.pow(10,${arg})`;
        break;
    case 'floor':
        // This rounds up.  Blockly does not specify rounding direction.
        code = `math.floor(${arg} + .5)`;
        break;
    case 'ceiling':
        code = `math.ceil(${arg})`;
        break;
    case 'floor':
        code = `math.floor(${arg})`;
        break;
    case 'sin':
        code = `math.sin(math.rad(${arg}))`;
        break;
    case 'cos':
        code = `math.cos(math.rad(${arg}))`;
        break;
    case 'tan':
        code = `math.tan(math.rad(${arg}))`;
        break;
    case 'asin':
        code = `math.deg(math.asin(${arg}))`;
        break;
    case 'acos':
        code = `math.deg(math.acos(${arg}))`;
        break;
    case 'atan':
        code = `math.deg(math.atan(${arg}))`;
        break;
    default:
        throw `Unknown math operator: ${operator}`;
    }
    return [code, Blockly.Lua.ORDER_HIGH];
};

Blockly.Lua.data_variable = function (block) {
    // Variable getter.
    const code = Blockly.Lua.variableDB_.getName(block.getFieldValue('VARIABLE'),
        Blockly.Variables.NAME_TYPE);
    return [code, Blockly.Lua.ORDER_ATOMIC];
};

Blockly.Lua.data_setvariableto = function (block) {
    // Variable getter.
    const argument0 = Blockly.Lua.valueToCode(block, 'VALUE',
        Blockly.Lua.ORDER_ADDITIVE) || '0';
    const varName = Blockly.Lua.variableDB_.getName(
        block.getFieldValue('VARIABLE'), Blockly.Variables.NAME_TYPE);
    return `${varName} = ${argument0}\n`;
};

Blockly.Lua.data_changevariableby = function (block) {
    // Add to a variable in place.
    const argument0 = Blockly.Lua.valueToCode(block, 'VALUE',
        Blockly.Lua.ORDER_ADDITIVE) || '0';
    const varName = Blockly.Lua.variableDB_.getName(
        block.getFieldValue('VARIABLE'), Blockly.Variables.NAME_TYPE);
    return `${varName} = ${varName} + ${argument0}\n`;
};

  
Blockly.Lua.extension_pen_down = function (block) {
    return '\n';
};
  
Blockly.Lua.extension_music_drum = function (block) {
    const number = Blockly.Lua.valueToCode(block, 'NUMBER', Blockly.Lua.ORDER_ATOMIC);
    return '\n';
};
  
Blockly.Lua.extension_wedo_motor = function (block) {
    return '\n';
};
  
Blockly.Lua.extension_wedo_hat = function (block) {
    return '\n';
};
  
Blockly.Lua.extension_wedo_boolean = function (block) {
    return '\n';
};
  
Blockly.Lua.extension_wedo_tilt_reporter = function (block) {
    const tilt = Blockly.Lua.valueToCode(block, 'TILT', Blockly.Lua.ORDER_ATOMIC);
    return '\n';
};
  
Blockly.Lua.extension_music_reporter = function (block) {
    return '\n';
};
  
Blockly.Lua.math_angle = function (block) {
    const num = Blockly.getFieldValue('NUM');
    return '\n';
};
  
Blockly.Lua.math_integer = function (block) {
    // Numeric value.
    const code = parseInt(block.getFieldValue('NUM'));
    const order = code < 0 ? Blockly.Lua.ORDER_UNARY :
        Blockly.Lua.ORDER_ATOMIC;
    return [code, order];
};
  
Blockly.Lua.math_positive_number = function (block) {
    let code = parseFloat(block.getFieldValue('NUM'));
    code = Math.max(0, code);
    const order = code < 0 ? Blockly.Lua.ORDER_UNARY :
        Blockly.Lua.ORDER_ATOMIC;
    return [code, order];
};
  
Blockly.Lua.math_whole_number = function (block) {
    // Numeric value.
    const code = parseFloat(block.getFieldValue('NUM'));
    const order = code < 0 ? Blockly.Lua.ORDER_UNARY :
        Blockly.Lua.ORDER_ATOMIC;
    return [code, order];
};
  
Blockly.Lua.text = function (block) {
    const code = Blockly.Lua.quote_(block.getFieldValue('TEXT'));
    return [code, Blockly.Lua.ORDER_ATOMIC];
};
