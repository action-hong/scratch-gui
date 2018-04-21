import Blockly from '../../../../scratch-blocks-develop';

Blockly.defineBlocksWithJsonArray([
    {
        type: 'blockly_arduino_led',
        message0: '使pin %1 的led灯 %2',
        args0: [
            {
                type: 'field_dropdown',
                name: 'blockly_pin_number',
                options: [
                    [
                        '0',
                        '0'
                    ],
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
                    ],
                    [
                        '7',
                        '7'
                    ],
                    [
                        '8',
                        '8'
                    ],
                    [
                        '9',
                        '9'
                    ],
                    [
                        '10',
                        '10'
                    ],
                    [
                        '11',
                        '11'
                    ],
                    [
                        '12',
                        '12'
                    ],
                    [
                        '13',
                        '13'
                    ],
                    [
                        'A1',
                        'A1'
                    ],
                    [
                        'A2',
                        'A2'
                    ],
                    [
                        'A3',
                        'A3'
                    ],
                    [
                        'A4',
                        'A4'
                    ],
                    [
                        'A5',
                        'A5'
                    ]
                ]
            },
            {
                type: 'field_dropdown',
                name: 'blockly_arduino_led_state',
                options: [
                    [
                        '亮',
                        '1'
                    ],
                    [
                        '不亮',
                        '0'
                    ]
                ]
            }
        ],
        inputsInline: true,
        previousStatement: null,
        nextStatement: null,
        colour: `%{BKY_ROBOT_HUE}`,
        tooltip: '',
        helpUrl: ''
    },
    {
        type: 'blockly_arduino_servo',
        message0: '使pin %1 的舵机转到 %2',
        args0: [
            {
                type: 'field_dropdown',
                name: 'blockly_pin_number',
                options: [
                    [
                        '0',
                        '0'
                    ],
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
                    ],
                    [
                        '7',
                        '7'
                    ],
                    [
                        '8',
                        '8'
                    ],
                    [
                        '9',
                        '9'
                    ],
                    [
                        '10',
                        '10'
                    ]
                ]
            },
            {
                type: 'field_number',
                name: 'blockly_arduino_servo_state',
                value: 90,
                min: 0,
                max: 180
            }
        ],
        inputsInline: true,
        previousStatement: null,
        nextStatement: null,
        colour: `%{BKY_ROBOT_HUE}`,
        tooltip: '',
        helpUrl: ''
    },
    {
        type: 'blockly_arduino_pin',
        message0: '向pin %1 写入 %2',
        args0: [
            {
                type: 'field_dropdown',
                name: 'blockly_pin_number',
                options: [
                    [
                        '0',
                        '0'
                    ],
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
                    ],
                    [
                        '7',
                        '7'
                    ],
                    [
                        '8',
                        '8'
                    ],
                    [
                        '9',
                        '9'
                    ],
                    [
                        '10',
                        '10'
                    ]
                ]
            },
            {
                type: 'field_dropdown',
                name: 'blockly_arduino_pin_state',
                options: [
                    [
                        '1',
                        '1'
                    ],
                    [
                        '0',
                        '0'
                    ]
                ]
            }
        ],
        inputsInline: true,
        previousStatement: null,
        nextStatement: null,
        colour: `%{BKY_ROBOT_HUE}`,
        tooltip: '',
        helpUrl: ''
    },
    {
        type: 'blockly_arduino_sensor',
        message0: '读取 %1 传感器的值',
        args0: [
            {
                type: 'field_dropdown',
                name: 'blockly_pin_number',
                options: [
                    [
                        'A0',
                        'A0'
                    ],
                    [
                        'A1',
                        'A1'
                    ],
                    [
                        'A2',
                        'A2'
                    ],
                    [
                        'A3',
                        'A3'
                    ],
                    [
                        'A4',
                        'A4'
                    ],
                    [
                        'A5',
                        'A5'
                    ]
                ]
            }
        ],
        inputsInline: true,
        output: "Number",
        colour: `%{BKY_ROBOT_HUE}`,
        tooltip: '',
        helpUrl: ''
    }
]);

Blockly.JavaScript.blockly_arduino_led = function (block) {
    const number = block.getFieldValue('blockly_pin_number');
    const state = block.getFieldValue('blockly_arduino_led_state');
    // TODO: Assemble JavaScript into code variable.
    const code = `changeArduinoLed(${number}, ${state});\n`;
    return code;
};

Blockly.JavaScript.blockly_arduino_servo = function (block) {
    const number = block.getFieldValue('blockly_pin_number');
    const angle = block.getFieldValue('blockly_arduino_servo_state');
    // TODO: Assemble JavaScript into code variable.
    const code = `changeArduinoServo(${number}, ${angle});\n`;
    return code;
};

Blockly.JavaScript.blockly_arduino_pin = function (block) {
    const number = block.getFieldValue('blockly_pin_number');
    const val = block.getFieldValue('blockly_arduino_pin_state');
    // TODO: Assemble JavaScript into code variable.
    const code = `changeArduinoPin(${number}, ${val});\n`;
    return code;
};
