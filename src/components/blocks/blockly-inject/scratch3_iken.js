// 在线模式下的操作
/* eslint-disable */
import BLEManager from '../../../robot/BluetoothManager';
import {
  COLOR,
  ULTRASONIC,
  TRACKING,
  KEY,
  HUMITURE,
  PHOTOSENSITIVE,
  VOICE,
  INFRARED_REC,
  RGB,
  LED,
  BEE,
  INFRARED_SEND,
  SEGMENT_DISPLAYS
} from '../../../robot/BluetoothCallback'
class Scratch3IkenlBlocks {
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
            blockly_io_bee: this.blocklyBee,
            blockly_io_show_number: this.blocklyShowNumber,
            blockly_io_send_infrared_msg: this.blocklySendInfraredMsg,
            blockly_io_key: this.blocklyKey,
            blockly_io_read_temp: this.blocklyReadTemp,
            blockly_io_read_u1tra: this.blocklyReadUltra,
            blockly_io_read_humi: this.blocklyReadHumi,
            blockly_io_read_infrared: this.blocklyReadInfrared,
            blockly_io_read_voice: this.blocklyReadVoice,
            blockly_io_read_rgb: this.blocklyReadRGB,
            blockly_io_read_light: this.blocklyReadLight,
            blockly_io_read_patrol: this.blocklyReadPatrol
        };
    }

    getHats () {
        return {
            control_start_as_clone: {
                restartExistingThreads: false
            }
        };
    }

    blocklyBee (args, util) {
      const number = Number(args.blockly_io_number)
      const noisy = Number(args.blockly_io_noisy)
      this.sendMsgToBLE(BEE, number, [noisy])
    }

    blocklyShowNumber (args, util) {
      const number = Number(args.blockly_io_number)
      const show = Number(args.blockly_io_show_number)
      this.sendMsgToBLE(SEGMENT_DISPLAYS, number, [show])
    }

    blocklySendInfraredMsg (args, util) {
      const number = Number(args.blockly_io_number)
      const msg = Number(args.blockly_io_infrared_msg)
      this.sendMsgToBLE(INFRARED_SEND, number, [msg])
    }

    blocklyKey (args, util) {
      const number = Number(args.blockly_io_number)
      return this.getBLEReciver(KEY, number, 'blocklyKey', [])
    }

    blocklyReadTemp (args, util) {
      const number = Number(args.blockly_io_number)
      return this.getBLEReciver(HUMITURE, number, 'blocklyReadTemp', [])
    }

    blocklyReadUltra (args, util) {
      const number = Number(args.blockly_io_number)
      return this.getBLEReciver(ULTRASONIC, number, 'blocklyReadUltra', [])
    }

    blocklyReadHumi (args, util) {
      const number = Number(args.blockly_io_number)
      return this.getBLEReciver(HUMITURE, number, 'blocklyReadHumi', [])
    }

    blocklyReadInfrared (args, util) {
      const number = Number(args.blockly_io_number)
      return this.getBLEReciver(INFRARED_REC, number, 'blocklyReadInfrared', [])
    }

    blocklyReadVoice (args, util) {
      const number = Number(args.blockly_io_number)
      return this.getBLEReciver(VOICE, number, 'blocklyReadVoice', [])
    }

    blocklyReadLight (args, util) {
      const number = Number(args.blockly_io_number)
      return this.getBLEReciver(PHOTOSENSITIVE, number, 'blocklyReadLight', [])
    }

    blocklyReadRGB (args, util) {
      const number = Number(args.blockly_io_number)
      const type = String(args.blockly_io_rgb_type)
      return this.getBLEReciver(COLOR, number, 'blocklyReadRGB', [type])
    }

    blocklyReadPatrol (args, util) {
      const number = Number(args.blockly_io_number)
      const type = Number(args.blockly_io_patrol_type)
      return this.getBLEReciver(TRACKING, number, 'blocklyReadPatrol', [type])
    }

    getBLEReciver (type, number, methodName, args) {
      return new Promise((resolve, reject) => {
        BLEManager.registerRec(type, msg => {
          let val = msg.vals[0]
          if (methodName === 'blocklyReadHumi') {
            val = msg.vals[1]
          } else if (type === COLOR) {
            val = handReadColor(msg, args, val)
          } else if (type === TRACKING) {
            val = handReadPatrol(msg, args, val)
          }
          resolve(val)
          console.log(type, number, val)
        })
        const cmd = `$$K,${type},${number},**`
        // 失败就返回-1
        BLEManager.send(cmd, () => {}, () => {
          // 失败
          console.log('发送失败', cmd)
          // 清空
          resolve(-10)
          // BLEManager.testSensorCallback(type)
        })        
      });
    }

    sendMsgToBLE (type, number, vals) {
      const val = vals.join(',')
      const cmd = `$$E,${type},${number},${val},**`
    }
    
}

const handReadColor = (msg, args, val) => {
  if (args.length === 0) {
    return val
  }
  let c = args[0]
  if (c === 'R') {
    return msg.vals[0]
  } else if (c === 'G') {
    return msg.vals[1]
  } else if (c === 'B') {
    return msg.vals[2]
  }
  return val
}

const handReadPatrol = (msg, args, val) => {
  if (args.length === 0) {
    return val
  }
  let c = args[0]
  if (c === 2) {
    return msg.vals[1]
  }
  return val
}

export default Scratch3IkenlBlocks;
