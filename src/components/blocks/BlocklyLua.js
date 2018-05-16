/**
 * 添加新版控制器的模块
 * Created by kkopite 2018.2.10
 */
import Blockly from '../../../../scratch-blocks-develop';

Blockly.defineBlocksWithJsonArray([
    {
        type: 'blockly_io_write',
        message0: '信号输出 端口 %1 %2 的第 %3 个脚设置为 %4',
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
        message0: '信号输入 端口 %1 %2 的第 %3 个脚的状态',
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
        message0: '温度获取 端口 %1 ',
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
            }
        ],
        output: null,
        colour: '%{BKY_ROBOT_HUE}',
        tooltip: '',
        helpUrl: ''
    },
    {
        type: 'blockly_io_tube_all',
        message0: '数码管 端口 %1 显示 %2 %3',
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
        message0: '彩灯 端口 %1 发光 %2 %3',
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
        message0: '按键状态 端口 %1',
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
        message0: '串口发送 %1 %2',
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
        message0: '串口接收消息',
        inputsInline: true,
        output: 'String',
        colour: '%{BKY_ROBOT_HUE}',
        tooltip: '',
        helpUrl: ''
    },
    {
        type: 'blockly_io_read_pose',
        message0: '缓存姿势加载第 %1 个',
        args0: [
            {
                type: 'field_number',
                name: 'blockly_io_action_number',
                value: 1,
                min: 0,
                max: 49
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
        type: 'blockly_io_save_action',
        message0: '保存动作 %1 到 %2',
        args0: [
            {
                type: 'field_mr_input',
                name: 'blockly_action',
                value: ''
            },
            {
                type: 'field_input',
                name: 'blockly_action_key',
                text: '0'
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
        type: 'blockly_io_play_pose',
        message0: '缓存姿势运行',
        inputsInline: true,
        previousStatement: null,
        nextStatement: null,
        colour: '%{BKY_ROBOT_HUE}',
        tooltip: '',
        helpUrl: ''
    },
    {
        type: 'blockly_io_play_action',
        message0: '缓存 %1 动作组运行',
        args0: [
            {
                type: 'field_input',
                name: 'blockly_io_action_number',
                text: '0'
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
        type: 'blockly_io_read_u1tra',
        message0: '超声波测距离 端口 %1',
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
            }
        ],
        output: null,
        colour: '%{BKY_ROBOT_HUE}',
        tooltip: '',
        helpUrl: ''
    },
    {
        type: 'blockly_io_read_humi',
        message0: '湿度获取 端口 %1',
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
            }
        ],
        output: null,
        colour: '%{BKY_ROBOT_HUE}',
        tooltip: '',
        helpUrl: ''
    },
    {
        type: 'blockly_io_init_infrared',
        message0: '红外线传感器初始化端口 %1',
        args0: [
            {
                type: 'field_dropdown',
                name: 'blockly_io_number',
                options: [
                    [
                        '4',
                        '4'
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
        type: 'blockly_io_read_infrared',
        message0: '红外线传感器读取端口 %1',
        args0: [
            {
                type: 'field_dropdown',
                name: 'blockly_io_number',
                options: [
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
        type: 'blockly_io_read_voice',
        message0: '声音读取 端口 %1',
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
            }
        ],
        output: null,
        colour: '%{BKY_ROBOT_HUE}',
        tooltip: '',
        helpUrl: ''
    },
    {
        type: 'blockly_io_init_read_rgb',
        message0: '颜色识别初始化 端口 %1',
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
            }
        ],
        previousStatement: null,
        nextStatement: null,
        colour: '%{BKY_ROBOT_HUE}',
        tooltip: '',
        helpUrl: ''
    },
    {
        type: 'blockly_io_read_rgb',
        message0: '颜色识别读取 端口 %1, 的 %2',
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
                type: 'field_dropdown',
                name: 'blockly_io_rgb_type',
                options: [
                    [
                        'R',
                        'R'
                    ],
                    [
                        'G',
                        'G'
                    ],
                    [
                        'B',
                        'B'
                    ],
                    [
                        'RGB',
                        'RGB'
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
        type: 'blockly_io_init_light',
        message0: '光敏识别初始化 端口 %1',
        args0: [
            {
                type: 'field_dropdown',
                name: 'blockly_io_number',
                options: [
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
        type: 'blockly_io_read_light',
        message0: '光敏识别读取 端口 %1',
        args0: [
            {
                type: 'field_dropdown',
                name: 'blockly_io_number',
                options: [
                    [
                        '6',
                        '6'
                    ]
                ]
            }
        ],
        output: 'String',
        colour: '%{BKY_ROBOT_HUE}',
        tooltip: '',
        helpUrl: ''
    },
    {
        type: 'blockly_io_read_patrol',
        message0: '寻迹模块读取 端口 %1 口信号 %2',
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
                type: 'field_dropdown',
                name: 'blockly_io_patrol_type',
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
            }
        ],
        output: 'String',
        colour: '%{BKY_ROBOT_HUE}',
        tooltip: '',
        helpUrl: ''
    },
    {
        type: 'blockly_io_read_patrol_js',
        message0: '寻迹模块读取 端口 %1',
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
            }
        ],
        output: 'String',
        colour: '%{BKY_ROBOT_HUE}',
        tooltip: '',
        helpUrl: ''
    },
    {
        type: 'blockly_io_read_array',
        message0: '串口特殊接收',
        output: 'String',
        colour: '%{BKY_ROBOT_HUE}',
        tooltip: '',
        helpUrl: ''
    },
    {
        type: 'blockly_io_led_rgb_control',
        message0: '全彩灯, RGB控制 端口 %1 颜色 %2',
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
                type: 'input_value',
                name: 'blockly_io_rgb'
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
        type: 'blockly_io_led_dot_matrix',
        message0: 'LED发光点阵,显示图形符号数字 端口 %1, %2, %3',
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
                type: 'input_value',
                name: 'blockly_io_a'
            },
            {
                type: 'input_value',
                name: 'blockly_io_b'
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
        type: 'blockly_io_bee',
        message0: '蜂鸣器 端口 %1 状态 %2',
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
        type: 'blockly_io_show_number',
        message0: '4位数字显示 端口%1 数字 %2',
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
                type: 'input_value',
                name: 'blockly_io_show_number',
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
        type: 'blockly_io_send_infrared_msg',
        message0: '发送特定红外信息 端口 %1, 信息 %2',
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
                type: 'input_value',
                name: 'blockly_io_infrared_msg'
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
        type: 'blockly_io_stroke_str',
        message0: '截取 %1 字符的前 %2 个字符',
        args0: [
            {
                type: 'input_value',
                name: 'VALUE',
                check: 'String'
            },
            {
                type: 'input_value',
                name: 'NUM',
                check: 'Number'
            }
        ],
        output: 'String',
        colour: '%{BKY_ROBOT_HUE}',
        tooltip: '',
        helpUrl: ''
    }
]);
Blockly.Lua.blockly_io_write = function (block) {
    const number = block.getFieldValue('blockly_io_number');
    const interfaceNumber = block.getFieldValue('blockly_io_interface');
    const content = block.getFieldValue('blockly_io_write_content');
    const code = `writeP${number}(${interfaceNumber}, ${content})\n`;
    return code;
};

Blockly.Lua.blockly_io_read = function (block) {
    const number = block.getFieldValue('blockly_io_number');
    const interfaceNumber = block.getFieldValue('blockly_io_interface');
    const code = `readP${number}(${interfaceNumber})`;
    return [code, Blockly.Lua.ORDER_NONE];
};

Blockly.Lua.blockly_io_delayms = function (block) {
    const time = Blockly.Lua.valueToCode(block, 'blockly_io_delay_time', Blockly.Lua.ORDER_ATOMIC);
    const code = `Delayms(${time})\n`;
    return code;
};

Blockly.Lua.blockly_io_initdht11 = function (block) {
    const number = block.getFieldValue('blockly_io_number');

    const code = `initdht11(${number})\n`;
    return code;
};

Blockly.Lua.blockly_io_read_temp = function (block) {
    const number = block.getFieldValue('blockly_io_number');

    const code = `readTemp(${number})`;

    return [code, Blockly.Lua.ORDER_NONE];
};

Blockly.Lua.blockly_io_tube_all = function (block) {
    const number = block.getFieldValue('blockly_io_number');
    const data = Blockly.Lua.valueToCode(block, 'blockly_io_tube_data', Blockly.Lua.ORDER_ATOMIC);

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

    const code = `Key(${number})`;

    return [code, Blockly.Lua.ORDER_NONE];
};

Blockly.Lua.blockly_io_print = function (block) {
    const content = Blockly.Lua.valueToCode(block, 'blockly_io_print_content', Blockly.Lua.ORDER_ATOMIC);

    const code = `print(${content})\n`;
    return code;
};

Blockly.Lua.blockly_io_uart_rec = function () {
    const code = 'UartRec()';

    return [code, Blockly.Lua.ORDER_NONE];
};

Blockly.Lua.blockly_io_bee = function (block) {
    const number = block.getFieldValue('blockly_io_number');
    const noisy = block.getFieldValue('blockly_io_noisy');

    const code = `Bee(${number},${noisy})\n`;
    return code;
};

Blockly.Lua.blockly_io_read_pose = function (block) {
    const number = block.getFieldValue('blockly_io_action_number');

    const code = `readAction(${number})\n`;
    return code;
};

Blockly.Lua.blockly_io_play_pose = function () {
    const code = 'playAction()\n';
    return code;
};

Blockly.Lua.blockly_io_read_u1tra = function (block) {
    const number = block.getFieldValue('blockly_io_number');

    const code = `readUltra(${number})`;

    return [code, Blockly.Lua.ORDER_NONE];
};

Blockly.Lua.blockly_io_read_humi = function (block) {
    const number = block.getFieldValue('blockly_io_number');

    const code = `readHumi(${number})`;

    return [code, Blockly.Lua.ORDER_NONE];
};

Blockly.Lua.blockly_io_init_infrared = function () {
    // 红外线默认支持端口4
    // var number = block.getFieldValue('blockly_io_number')

    const code = `irinit()\n`;

    return code;
};

Blockly.Lua.blockly_io_read_infrared = function () {
    // var number = block.getFieldValue('blockly_io_number')

    const code = `readIrKey()`;

    return [code, Blockly.Lua.ORDER_NONE];
};

Blockly.Lua.blockly_io_read_voice = function (block) {
    const number = block.getFieldValue('blockly_io_number');

    const code = `readVoice(${number})`;

    return code;
};

Blockly.Lua.blockly_io_init_read_rgb = function (block) {
    const number = block.getFieldValue('blockly_io_number');

    const code = `rgbinit(${number})\n`;

    return code;
};

Blockly.Lua.blockly_io_read_rgb = function (block) {
    const number = block.getFieldValue('blockly_io_number');
    const type = block.getFieldValue('blockly_io_rgb_type');

    const code = `${type}_value(${number})`;

    return [code, Blockly.Lua.ORDER_NONE];
};

Blockly.Lua.blockly_io_init_light = function () {
    // 光敏只支持 6端口
    // var number = block.getFieldValue('blockly_io_number')

    const code = `lightadcInit()\n`;

    return code;
};

Blockly.Lua.blockly_io_read_light = function () {
    // var number = block.getFieldValue('blockly_io_number')

    const code = `readLight()`;

    return [code, Blockly.Lua.ORDER_NONE];
};

Blockly.Lua.blockly_io_read_patrol = function (block) {
    const number = block.getFieldValue('blockly_io_number');
    const sign = block.getFieldValue('blockly_io_patrol_type');

    const code = `readPatrol(${number}, ${sign})`;

    return [code, Blockly.Lua.ORDER_NONE];
};

Blockly.Lua.blockly_io_read_array = function () {
    const code = `readArray()`;

    return [code, Blockly.Lua.ORDER_NONE];
};

Blockly.Lua.blockly_io_play_action = function (block) {
    const key = block.getFieldValue('blockly_io_action_number');

    // 不能直接在生成代码的函数中去生成运行动作
    // 由于 将动作保存到设备这一过程是一个 asynch函数
    // 因而在代码生成过程中, 并不会等待 saveAction()执行结束才往下执行
    // 故在运行到该函数的时候, 可能前面有执行saveAction函数
    // 但还没执行完, 导致此时的缓存管理中的姿势数仍为0
    // 进而导致下列代码中 action = false
    // 解决办法还是得在运行代码前对 `saveAction('xxx')和 playCacheAction()进行替换`
    // let code = ''
    // let action = getActionNumbersByIndex(number)
    // if (action) {
    //   let {start, end} = action
    //   code = `for count = ${start}, ${end} do\n  readAction(count)\n  playAction()\nend\n`
    // }
    return `playCacheAction('${key}')\n`;
};

Blockly.Lua.blockly_io_save_action = function (block) {
    const name = block.getFieldValue('blockly_action');
    const key = block.getFieldValue('blockly_action_key');
    // 该模块不生成lua代码
    return `saveAction('${name}', '${key}')\n`;
};

Blockly.Lua.blockly_io_stroke_str = function (block) {
    const str = Blockly.Lua.valueToCode(block, 'VALUE', Blockly.Lua.ORDER_ATOMIC);
    const num = Blockly.Lua.valueToCode(block, 'NUM', Blockly.Lua.ORDER_ATOMIC);

    const code = `Lu_strok(${str}, ${num})`;
    return [code, Blockly.Lua.ORDER_NONE];
};

// --------------   LUA --------------------

// -------------  JavaScript ---------------
Blockly.JavaScript.blockly_io_write = function (block) {
    const number = block.getFieldValue('blockly_io_number');
    const interfaceNumber = block.getFieldValue('blockly_io_interface');
    const content = block.getFieldValue('blockly_io_write_content');

    const code = `writeP${number}(${interfaceNumber}, ${content});\n`;
    return code;
};

Blockly.JavaScript.blockly_io_read = function (block) {
    const number = block.getFieldValue('blockly_io_number');
    const interfaceNumber = block.getFieldValue('blockly_io_interface');

    const code = `readP${number}(${interfaceNumber})`;

    return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.blockly_io_delayms = function (block) {
    const time = Blockly.JavaScript.valueToCode(block, 'blockly_io_delay_time', Blockly.JavaScript.ORDER_ATOMIC);

    const code = `Delayms(${time});\n`;
    return code;
};

Blockly.JavaScript.blockly_io_initdht11 = function (block) {
    const number = block.getFieldValue('blockly_io_number');

    const code = `initdht11(${number});\n`;
    return code;
};

Blockly.JavaScript.blockly_io_read_temp = function (block) {
    const number = block.getFieldValue('blockly_io_number');

    const code = `readTemp(${number})`;

    return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.blockly_io_tube_all = function (block) {
    const number = block.getFieldValue('blockly_io_number');
    const data = Blockly.JavaScript.valueToCode(block, 'blockly_io_tube_data', Blockly.JavaScript.ORDER_ATOMIC);

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

    const code = `Key(${number})`;

    return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.blockly_io_print = function (block) {
    const content = Blockly.JavaScript.valueToCode(block, 'blockly_io_print_content', Blockly.JavaScript.ORDER_ATOMIC);

    const code = `print(${content});\n`;
    return code;
};

Blockly.JavaScript.blockly_io_uart_rec = function () {
    const code = 'UartRec()';

    return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.blockly_io_read_pose = function (block) {
    const number = block.getFieldValue('blockly_io_action_number');

    const code = `readAction(${number});\n`;
    return code;
};

Blockly.JavaScript.blockly_io_play_pose = function () {
    const code = 'playAction();\n';
    return code;
};

Blockly.JavaScript.blockly_io_read_u1tra = function (block) {
    const number = block.getFieldValue('blockly_io_number');

    const code = `readUltra(${number})`;

    return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.blockly_io_read_humi = function (block) {
    const number = block.getFieldValue('blockly_io_number');

    const code = `readHumi(${number})`;

    return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.blockly_io_init_infrared = function () {
    // 红外线默认支持端口4
    // var number = block.getFieldValue('blockly_io_number')

    const code = `irinit();\n`;

    return code;
};

Blockly.JavaScript.blockly_io_read_infrared = function (block) {
    const number = block.getFieldValue('blockly_io_number');

    const code = `readIrKey(${number})`;

    return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.blockly_io_read_voice = function (block) {
    const number = block.getFieldValue('blockly_io_number');

    const code = `readVoice(${number});\n`;

    return code;
};

Blockly.JavaScript.blockly_io_init_read_rgb = function (block) {
    const number = block.getFieldValue('blockly_io_number');

    const code = `rgbinit(${number});\n`;

    return code;
};

Blockly.JavaScript.blockly_io_read_rgb = function (block) {
    const number = block.getFieldValue('blockly_io_number');
    // var type = block.getFieldValue('blockly_io_rgb_type')

    const code = `rgb_value(${number})`;

    return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.blockly_io_init_light = function (block) {
    // 光敏只支持 6端口
    const number = block.getFieldValue('blockly_io_number');

    const code = `lightadcInit(${number});\n`;

    return code;
};

Blockly.JavaScript.blockly_io_read_light = function (block) {
    const number = block.getFieldValue('blockly_io_number');

    const code = `readLight(${number})`;

    return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.blockly_io_read_patrol = function (block) {
    const number = block.getFieldValue('blockly_io_number');
    // var sign = block.getFieldValue('blockly_io_patrol_type')

    const code = `readPatrol(${number})`;

    return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.blockly_io_read_patrol_js = function (block) {
    const number = block.getFieldValue('blockly_io_number');
    // var sign = block.getFieldValue('blockly_io_patrol_type')

    const code = `readPatrol(${number})`;

    return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript.blockly_io_led_rgb_control = function (block) {
    const number = block.getFieldValue('blockly_io_number');
    const value = Blockly.JavaScript.valueToCode(block, 'blockly_io_rgb', Blockly.JavaScript.ORDER_ATOMIC);

    const code = `ledRGBControl(${number}, [${value}]);\n`;

    return code;
};

Blockly.JavaScript.blockly_io_led_dot_matrix = function (block) {
    const number = block.getFieldValue('blockly_io_number');
    const a = Blockly.JavaScript.valueToCode(block, 'blockly_io_a', Blockly.JavaScript.ORDER_ATOMIC);
    const b = Blockly.JavaScript.valueToCode(block, 'blockly_io_b', Blockly.JavaScript.ORDER_ATOMIC);

    const code = `ledDotMatrix(${number}, [${a}, ${b}]);\n`;

    return code;
};

Blockly.JavaScript.blockly_io_bee = function (block) {
    const number = block.getFieldValue('blockly_io_number');
    const noisy = block.getFieldValue('blockly_io_noisy');

    const code = `Bee(${number}, [${noisy}]);\n`;
    return code;
};

Blockly.JavaScript.blockly_io_show_number = function (block) {
    const number = block.getFieldValue('blockly_io_number');
    const show = Blockly.JavaScript.valueToCode(block, 'blockly_io_show_number', Blockly.JavaScript.ORDER_ATOMIC);

    // 必须是0 到9999
    // 不能直接在这里做限定
    const code = `showNumber(${number}, [${show}]);\n`;

    return code;
};

Blockly.JavaScript.blockly_io_send_infrared_msg = function (block) {
    const number = block.getFieldValue('blockly_io_number');
    const msg = Blockly.JavaScript.valueToCode(block, 'blockly_io_infrared_msg', Blockly.JavaScript.ORDER_ATOMIC);

    const code = `sendInfrared(${number}, [${msg}]);\n`;

    return code;
};

// 该模块再js模式下不会使用, 不过为避免错误, 仍可以生成对应代码
Blockly.JavaScript.blockly_io_save_action = function (block) {
    const name = block.getFieldValue('blockly_action');
    return `saveAction('${name}')\n`;
};

// 该模块再js模式下不会使用, 不过为避免错误, 仍可以生成对应代码
Blockly.JavaScript.blockly_io_play_action = function (block) {
    const number = block.getFieldValue('blockly_io_action_number');
    return `playCacheAction(${number})\n`;
};

// 该模块再js模式下不会使用, 不过为避免错误, 仍可以生成对应代码
Blockly.JavaScript.blockly_io_read_array = function () {
    const code = `readArray()`;

    return [code, Blockly.JavaScript.ORDER_NONE];
};
// -------------  JavaScript ---------------
