import Blockly from '../../../../scratch-blocks-develop';

Blockly.defineBlocksWithJsonArray([
    {
        type: 'blockly_io_write',
        message0: '写I/O操作 P %1 %2 第 %3 个io写操作 %4',
        args0: [
            {
                type: 'field_dropdown',
                name: 'blockly_io_number',
                options: [
                    [
                        '1',
                        '1'
                    ],
                    [
                        '2',
                        '2'
                    ],
                    [
                        '3',
                        '3'
                    ],
                    [
                        '4',
                        '4'
                    ]
                ]
            },
            {
                type: 'input_dummy'
            },
            {
                type: 'field_dropdown',
                name: 'blockly_io_interface',
                options: [
                    [
                        '1',
                        '1'
                    ],
                    [
                        '2',
                        '2'
                    ],
                    [
                        '3',
                        '3'
                    ],
                    [
                        '4',
                        '4'
                    ]
                ]
            },
            {
                type: 'field_input',
                name: 'blockly_io_write_content',
                text: '0'
            }
        ],
        previousStatement: null,
        nextStatement: null,
        colour: '%{BKY_ROBOT_HUE}',
        tooltip: '',
        helpUrl: ''
    },
    {
        type: 'blockly_io_read',
        message0: '读I/O口操作 P %1 %2 第 %3 个io读操作',
        args0: [
            {
                type: 'field_dropdown',
                name: 'blockly_io_number',
                options: [
                    [
                        '1',
                        '1'
                    ],
                    [
                        '2',
                        '2'
                    ],
                    [
                        '3',
                        '3'
                    ],
                    [
                        '4',
                        '4'
                    ]
                ]
            },
            {
                type: 'input_dummy'
            },
            {
                type: 'field_dropdown',
                name: 'blockly_io_interface',
                options: [
                    [
                        '1',
                        '1'
                    ],
                    [
                        '2',
                        '2'
                    ],
                    [
                        '3',
                        '3'
                    ],
                    [
                        '4',
                        '4'
                    ]
                ]
            }
        ],
        output: null,
        colour: '%{BKY_ROBOT_HUE}',
        tooltip: '',
        helpUrl: ''
    },
    {
        type: 'blockly_io_delayms',
        message0: '延时 %1 %2 毫秒',
        args0: [
            {
                type: 'input_dummy'
            },
            {
                type: 'input_value',
                name: 'blockly_io_delay_time',
                check: 'Number'
            }
        ],
        inputsInline: true,
        previousStatement: null,
        nextStatement: null,
        colour: '%{BKY_ROBOT_HUE}',
        tooltip: '',
        helpUrl: ''
    },
    {
        type: 'blockly_io_initdht11',
        message0: '初始化P %1 口的温湿度传感器',
        args0: [
            {
                type: 'field_dropdown',
                name: 'blockly_io_number',
                options: [
                    [
                        '3',
                        '3'
                    ],
                    [
                        '4',
                        '4'
                    ],
                    [
                        '5',
                        '5'
                    ],
                    [
                        '6',
                        '6'
                    ]
                ]
            }
        ],
        previousStatement: null,
        nextStatement: null,
        colour: '%{BKY_ROBOT_HUE}',
        tooltip: '',
        helpUrl: ''
    },
    {
        type: 'blockly_io_read_temp',
        message0: '读第P %1 口的温度',
        args0: [
            {
                type: 'field_dropdown',
                name: 'blockly_io_number',
                options: [
                    [
                        '3',
                        '3'
                    ],
                    [
                        '4',
                        '4'
                    ],
                    [
                        '5',
                        '5'
                    ],
                    [
                        '6',
                        '6'
                    ]
                ]
            }
        ],
        output: null,
        colour: '%{BKY_ROBOT_HUE}',
        tooltip: '',
        helpUrl: ''
    },
    {
        type: 'blockly_io_tube_all',
        message0: '数码管P %1 口的显示 %2 %3',
        args0: [
            {
                type: 'field_dropdown',
                name: 'blockly_io_number',
                options: [
                    [
                        '1',
                        '1'
                    ],
                    [
                        '2',
                        '2'
                    ],
                    [
                        '3',
                        '3'
                    ],
                    [
                        '4',
                        '4'
                    ],
                    [
                        '5',
                        '5'
                    ],
                    [
                        '6',
                        '6'
                    ]
                ]
            },
            {
                type: 'input_dummy'
            },
            {
                type: 'input_value',
                name: 'blockly_io_tube_data',
                check: 'Number'
            }
        ],
        inputsInline: true,
        previousStatement: null,
        nextStatement: null,
        colour: '%{BKY_ROBOT_HUE}',
        tooltip: '',
        helpUrl: ''
    },
    {
        type: 'blockly_io_led',
        message0: 'P %1 口的显示 %2 %3 彩灯',
        args0: [
            {
                type: 'field_dropdown',
                name: 'blockly_io_number',
                options: [
                    [
                        '1',
                        '1'
                    ],
                    [
                        '2',
                        '2'
                    ]
                ]
            },
            {
                type: 'input_dummy'
            },
            {
                type: 'input_value',
                name: 'blockly_io_led_data'
            }
        ],
        inputsInline: true,
        previousStatement: null,
        nextStatement: null,
        colour: '%{BKY_ROBOT_HUE}',
        tooltip: '',
        helpUrl: ''
    },
    {
        type: 'blockly_io_key',
        message0: '按键P %1 口',
        args0: [
            {
                type: 'field_dropdown',
                name: 'blockly_io_number',
                options: [
                    [
                        '3',
                        '3'
                    ],
                    [
                        '4',
                        '4'
                    ],
                    [
                        '5',
                        '5'
                    ],
                    [
                        '6',
                        '6'
                    ]
                ]
            }
        ],
        inputsInline: true,
        output: 'Number',
        colour: '%{BKY_ROBOT_HUE}',
        tooltip: '',
        helpUrl: ''
    },
    {
        type: 'blockly_io_print',
        message0: '串口打印 %1 %2',
        args0: [
            {
                type: 'input_dummy'
            },
            {
                type: 'input_value',
                name: 'blockly_io_print_content'
            }
        ],
        inputsInline: true,
        previousStatement: null,
        nextStatement: null,
        colour: '%{BKY_ROBOT_HUE}',
        tooltip: '',
        helpUrl: ''
    },
    {
        type: 'blockly_io_uart_rec',
        message0: '串口接收',
        inputsInline: true,
        output: 'String',
        colour: '%{BKY_ROBOT_HUE}',
        tooltip: '',
        helpUrl: ''
    },
    {
        type: 'blockly_io_bee',
        message0: '使P %1 口 %2',
        args0: [
            {
                type: 'field_dropdown',
                name: 'blockly_io_number',
                options: [
                    [
                        '3',
                        '3'
                    ],
                    [
                        '4',
                        '4'
                    ],
                    [
                        '5',
                        '5'
                    ],
                    [
                        '6',
                        '6'
                    ]
                ]
            },
            {
                type: 'field_dropdown',
                name: 'blockly_io_noisy',
                options: [
                    [
                        '响',
                        '1'
                    ],
                    [
                        '不响',
                        '0'
                    ]
                ]
            }
        ],
        inputsInline: true,
        previousStatement: null,
        nextStatement: null,
        colour: '%{BKY_ROBOT_HUE}',
        tooltip: '',
        helpUrl: ''
    },
    {
        type: 'blockly_io_read_action',
        message0: '读取第 %1 个动作',
        args0: [
            {
                type: 'field_number',
                name: 'blockly_io_action_number',
                value: 1,
                min: 1,
                max: 50
            }
        ],
        inputsInline: true,
        previousStatement: null,
        nextStatement: null,
        colour: '%{BKY_ROBOT_HUE}',
        tooltip: '',
        helpUrl: ''
    },
    {
        type: 'blockly_io_play_action',
        message0: '运行缓存动作组',
        inputsInline: true,
        previousStatement: null,
        nextStatement: null,
        colour: '%{BKY_ROBOT_HUE}',
        tooltip: '',
        helpUrl: ''
    },
    {
        type: 'blockly_io_read_u1tra',
        message0: '读取P %1 口测到的超声波距离',
        args0: [
            {
                type: 'field_dropdown',
                name: 'blockly_io_number',
                options: [
                    [
                        '3',
                        '3'
                    ],
                    [
                        '4',
                        '4'
                    ],
                    [
                        '5',
                        '5'
                    ],
                    [
                        '6',
                        '6'
                    ]
                ]
            }
        ],
        output: null,
        colour: '%{BKY_ROBOT_HUE}',
        tooltip: '',
        helpUrl: ''
    },
    {
        type: 'blockly_io_read_humi',
        message0: '读第P %1 口的湿度',
        args0: [
            {
                type: 'field_dropdown',
                name: 'blockly_io_number',
                options: [
                    [
                        '3',
                        '3'
                    ],
                    [
                        '4',
                        '4'
                    ],
                    [
                        '5',
                        '5'
                    ],
                    [
                        '6',
                        '6'
                    ]
                ]
            }
        ],
        output: null,
        colour: '%{BKY_ROBOT_HUE}',
        tooltip: '',
        helpUrl: ''
    }
]);

window.Blockly = Blockly;
Blockly.Lua.blockly_io_write = function (block) {
    const number = block.getFieldValue('blockly_io_number');
    const interfaceNumber = block.getFieldValue('blockly_io_interface');
    const content = block.getFieldValue('blockly_io_write_content');
    // TODO: Assemble Lua into code variable.
    const code = `writeP${number}(${interfaceNumber}, ${content})\n`;
    return code;
};

Blockly.Lua.blockly_io_read = function (block) {
    const number = block.getFieldValue('blockly_io_number');
    const interfaceNumber = block.getFieldValue('blockly_io_interface');
    // TODO: Assemble Lua into code variable.
    const code = `readP${number}(${interfaceNumber})`;
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.Lua.ORDER_NONE];
};

Blockly.Lua.blockly_io_delayms = function (block) {
    const time = Blockly.Lua.valueToCode(block, 'blockly_io_delay_time', Blockly.Lua.ORDER_ATOMIC);
    // TODO: Assemble Lua into code variable.
    const code = `Delayms(${time})\n`;
    return code;
};

Blockly.Lua.blockly_io_initdht11 = function (block) {
    const number = block.getFieldValue('blockly_io_number');
    // TODO: Assemble Lua into code variable.
    const code = `initdht11(${number})\n`;
    return code;
};

Blockly.Lua.blockly_io_read_temp = function (block) {
    const number = block.getFieldValue('blockly_io_number');
    // TODO: Assemble Lua into code variable.
    const code = `readTemp(${number})`;
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.Lua.ORDER_NONE];
};

Blockly.Lua.blockly_io_tube_all = function (block) {
    const number = block.getFieldValue('blockly_io_number');
    const data = Blockly.Lua.valueToCode(block, 'blockly_io_tube_data', Blockly.Lua.ORDER_ATOMIC);
    // TODO: Assemble Lua into code variable.
    const code = `tube_all(${number},${data})\n`;
    return code;
};

Blockly.Lua.blockly_io_led = function (block) {
    const number = block.getFieldValue('blockly_io_number');
    const data = Blockly.Lua.valueToCode(block, 'blockly_io_led_data', Blockly.Lua.ORDER_ATOMIC);
    // TODO: data 需要转换成RGB颜色值, 是整形
    const code = `Led(${number},${data})\n`;
    return code;
};

Blockly.Lua.blockly_io_key = function (block) {
    const number = block.getFieldValue('blockly_io_number');
    // TODO: Assemble Lua into code variable.
    const code = `Key(${number})`;
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.Lua.ORDER_NONE];
};

Blockly.Lua.blockly_io_print = function (block) {
    const content = Blockly.Lua.valueToCode(block, 'blockly_io_print_content', Blockly.Lua.ORDER_ATOMIC);
    // TODO: Assemble Lua into code variable.
    const code = `print(${content})\n`;
    return code;
};

Blockly.Lua.blockly_io_uart_rec = function (block) {
    // TODO: Assemble Lua into code variable.
    const code = 'UartRec()';
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.Lua.ORDER_NONE];
};

Blockly.Lua.blockly_io_bee = function (block) {
    const number = block.getFieldValue('blockly_io_number');
    const noisy = block.getFieldValue('blockly_io_noisy');
    // TODO: Assemble Lua into code variable.
    const code = `Bee(${number},${noisy})\n`;
    return code;
};

Blockly.Lua.blockly_io_read_action = function (block) {
    const number = block.getFieldValue('blockly_io_action_number');
    // TODO: Assemble Lua into code variable.
    const code = `readAction(${number})\n`;
    return code;
};

Blockly.Lua.blockly_io_play_action = function (block) {
    // TODO: Assemble Lua into code variable.
    const code = 'playAction()\n';
    return code;
};

Blockly.Lua.blockly_io_read_u1tra = function (block) {
    const number = block.getFieldValue('blockly_io_number');
    // TODO: Assemble Lua into code variable.
    const code = `readUltra(${number})`;
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.Lua.ORDER_NONE];
};

Blockly.Lua.blockly_io_read_humi = function (block) {
    const number = block.getFieldValue('blockly_io_number');
    // TODO: Assemble Lua into code variable.
    const code = `readHumi(${number})`;
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.Lua.ORDER_NONE];
};
// --------------   LUA --------------------

// -------------  JavaScript ---------------
Blockly.JavaScript.blockly_io_write = function (block) {
    const number = block.getFieldValue('blockly_io_number');
    const interfaceNumber = block.getFieldValue('blockly_io_interface');
    const content = block.getFieldValue('blockly_io_write_content');
    // TODO: Assemble JavaScript into code variable.
    const code = `writeP${number}(${interfaceNumber}, ${content});\n`;
    return code;
};

Blockly.JavaScript.blockly_io_read = function (block) {
    const number = block.getFieldValue('blockly_io_number');
    const interfaceNumber = block.getFieldValue('blockly_io_interface');
    // TODO: Assemble JavaScript into code variable.
    const code = `readP${number}(${interfaceNumber})`;
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.blockly_io_delayms = function (block) {
    const time = Blockly.JavaScript.valueToCode(block, 'blockly_io_delay_time', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    const code = `Delayms(${time});\n`;
    return code;
};

Blockly.JavaScript.blockly_io_initdht11 = function (block) {
    const number = block.getFieldValue('blockly_io_number');
    // TODO: Assemble JavaScript into code variable.
    const code = `initdht11(${number});\n`;
    return code;
};

Blockly.JavaScript.blockly_io_read_temp = function (block) {
    const number = block.getFieldValue('blockly_io_number');
    // TODO: Assemble JavaScript into code variable.
    const code = `readTemp(${number})`;
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.blockly_io_tube_all = function (block) {
    const number = block.getFieldValue('blockly_io_number');
    const data = Blockly.JavaScript.valueToCode(block, 'blockly_io_tube_data', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    const code = `tube_all(${number},${data});\n`;
    return code;
};

Blockly.JavaScript.blockly_io_led = function (block) {
    const number = block.getFieldValue('blockly_io_number');
    const data = Blockly.JavaScript.valueToCode(block, 'blockly_io_led_data', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: data 需要转换成RGB颜色值, 是整形
    const code = `Led(${number},${data});\n`;
    return code;
};

Blockly.JavaScript.blockly_io_key = function (block) {
    const number = block.getFieldValue('blockly_io_number');
    // TODO: Assemble JavaScript into code variable.
    const code = `Key(${number})`;
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.blockly_io_print = function (block) {
    const content = Blockly.JavaScript.valueToCode(block, 'blockly_io_print_content', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    const code = `print(${content});\n`;
    return code;
};

Blockly.JavaScript.blockly_io_uart_rec = function (block) {
    // TODO: Assemble JavaScript into code variable.
    const code = 'UartRec()';
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.blockly_io_bee = function (block) {
    const number = block.getFieldValue('blockly_io_number');
    const noisy = block.getFieldValue('blockly_io_noisy');
    // TODO: Assemble JavaScript into code variable.
    const code = `Bee(${number},${noisy});\n`;
    return code;
};

Blockly.JavaScript.blockly_io_read_action = function (block) {
    const number = block.getFieldValue('blockly_io_action_number');
    // TODO: Assemble JavaScript into code variable.
    const code = `readAction(${number});\n`;
    return code;
};

Blockly.JavaScript.blockly_io_play_action = function (block) {
    // TODO: Assemble JavaScript into code variable.
    const code = 'playAction();\n';
    return code;
};

Blockly.JavaScript.blockly_io_read_u1tra = function (block) {
    const number = block.getFieldValue('blockly_io_number');
    // TODO: Assemble JavaScript into code variable.
    const code = `readUltra(${number})`;
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.blockly_io_read_humi = function (block) {
    const number = block.getFieldValue('blockly_io_number');
    // TODO: Assemble JavaScript into code variable.
    const code = `readHumi(${number})`;
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.JavaScript.ORDER_NONE];
};
// -------------  JavaScript ---------------
