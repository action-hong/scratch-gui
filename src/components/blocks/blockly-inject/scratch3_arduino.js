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
            blockly_arduino_servo: this.arduinoServo,
            blockly_arduino_pin: this.arduinoPinWrite,
            blockly_arduino_pin_read: this.arduinoPinRead,
            blockly_arduino_digist_write: this.arduinoDigistWrite,
            blockly_arduino_digist_read: this.arduinoDigistRead,
            blockly_arduino_analog_write: this.arduinoAnalogWrite,
            blockly_arduino_analog_read: this.arduinoAnalogRead,
            blockly_arduino_sensor: this.arduinoSensor,
            blockly_arduino_rgb: this.arduinoLedRGB,
            blockly_arduino_ultrasonic_read: this.arduinoUltrasonicRead
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

    arduinoPinWrite (args, util) {
        const number = Number(args.blockly_pin_number);
        const val = Number(args.blockly_arduino_pin_state);
        if (!five) {
            return;
        }
        const pin = new five.Pin({
            pin: number,
            board
        })

        pin.write(val)
    }

    arduinoPinRead (args, util) {
        const number = Number(args.blockly_pin_number);
        const val = Number(args.blockly_arduino_pin_state);
        if (!five) {
            return;
        }
        const pin = new five.Pin({
            pin: number,
            board
        })

        return new Promise((resolve, reject) => {
            pin.read((err, val) => {
                if (err) {
                    reject(err)
                } else {
                    resolve(val)
                }
            })
        });
    }

    arduinoSensor (args, util) {
        const number = args.blockly_pin_number;
        const sensor = new five.Sensor({
            pin: number,
            board
        })
        return new Promise((resolve, reject) => {
            sensor.once('change', () => {
                resolve(sensor.value)
            })
        });
        // return new Promise((resolve, reject) => {
        //     resolve(1)
        // });
    }

    arduinoLedRGB (args, util) {
        let red = Number(args.blockly_arduino_red)
        let green = Number(args.blockly_arduino_green)
        let blue = Number(args.blockly_arduino_blue)

        red = Math.min(255, Math.max(0, red))
        green = Math.min(255, Math.max(0, green))
        blue = Math.min(255, Math.max(0, blue))

        const redNumber = args.blockly_arduino_red_number
        const greenNumber = args.blockly_arduino_green_number
        const blueNumber = args.blockly_arduino_blue_number

        let rgb = new five.Led.RGB([redNumber, greenNumber, blueNumber])

        let color = [red, green, blue].map(v => v.toString(16))
                                      .map(v => v.length > 1 ? v : '0' + v)
                                      .join('')

        rgb.color(color)
    }

    arduinoDigistWrite (args, util) {
        const number = Number(args.blockly_pin_number);
        const val = Number(args.blockly_arduino_pin_state);

        board.pinMode(number, five.Pin.OUTPUT);
        board.digitalWrite(number, val);
    }

    arduinoDigistRead (args, util) {
        const number = Number(args.blockly_pin_number);

        board.pinMode(number, five.Pin.INPUT);
        board.digitalRead(number, function(value) {
            resolve(value)
        });
    }

    arduinoAnalogWrite (args, util) {
        const number = Number(args.blockly_pin_number);
        let val = Number(args.blockly_arduino_pwm_val);

        val = Math.min(255, Math.max(0, val))
        // number必须是 PWM
        board.pinMode(number, five.Pin.PWM);

        // val的值 0 到 255
        board.analogWrite(number, val);
    }

    arduinoAnalogRead (args, util) {
        const number = Number(args.blockly_pin_number);

        // number 为1 代表 接的是 A1
        board.pinMode(number, five.Pin.ANALOG);

        return new Promise((resolve, reject) => {
            board.analogRead(number, function(voltage) {
                resolve(voltage);
            });
        });
    }



    arduinoUltrasonicRead (args, util) {
        const number = Number(args.blockly_pin_number);
        const proximity = new five.Proximity({
            controller: "HCSR04",
            pin: number
          });
        return proximity.centimeters
    }
}

export default Scratch3ArduinolBlocks;
