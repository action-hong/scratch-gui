/* eslint-disable */
// 这两个模块时直接在PC端上做的 放在window上
// import five from 'johnny-five';
// import board from 'johnny-five-board';

// 这里用import去导入, 然后再webpack配置直接从global变量拿, 明明照着文档来的, 为毛webpack
// 执行的时候还是去node_modules里面找呀, 有毛病呀 擦擦擦擦擦啊擦擦擦

// 暂时直接拿了
let five = window.five;
let board = window.jonhhyFiveBoard;

// 应该是写在 scratch-vm 好点
class Scratch3ArduinolBlocks {
    constructor (runtime) {
        /**
         * The runtime instantiating this block package.
         * @type {Runtime}
         */
        this.runtime = runtime;
    }

    /**
     * Retrieve the block primitives implemented by this package.
     * @return {object.<string, Function>} Mapping of opcode to Function.
     */
    getPrimitives () {
        return {
            blockly_arduino_led: this.arduinoLed,
            blockly_arduino_servo: this.arduinoServo
        };
    }

    getHats () {
        return {
            control_start_as_clone: {
                restartExistingThreads: false
            }
        };
    }

    arduinoLed (args, util) {
        const number = Number(args.blockly_pin_number);
        const state = Number(args.blockly_arduino_led_state);
        if (!five) {
            return;
        }
        const led = new five.Led({
            pin: number,
            board: board
        });
        if (state === 1) {
            led.on();
        } else {
            led.off();
        }

        console.log(number, state);
    }

    arduinoServo (args, util) {
        const number = Number(args.blockly_pin_number);
        const angle = Number(args.blockly_arduino_servo_state);
        console.log(number, angle);
        if (!five) {
            return;
        }
        const servo = new five.Servo({
            pin: number,
            board: board
        });
        servo.to(angle);
    }
}

export default Scratch3ArduinolBlocks;
