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
            blockly_io_read_patrol_js: this.blocklyReadPatrol
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
      return this.getBLEReciver(KEY, number)
    }

    blocklyReadTemp (args, util) {
      const number = Number(args.blockly_io_number)
      return this.getBLEReciver(HUMITURE, number)
    }

    blocklyReadUltra (args, util) {
      const number = Number(args.blockly_io_number)
      return this.getBLEReciver(ULTRASONIC, number)
    }

    blocklyReadHumi (args, util) {
      const number = Number(args.blockly_io_number)
      return this.getBLEReciver(HUMITURE, number)
    }

    blocklyReadInfrared (args, util) {
      const number = Number(args.blockly_io_number)
      return this.getBLEReciver(INFRARED_REC, number)
    }

    blocklyReadVoice (args, util) {
      const number = Number(args.blockly_io_number)
      return this.getBLEReciver(VOICE, number)
    }

    blocklyReadLight (args, util) {
      const number = Number(args.blockly_io_number)
      return this.getBLEReciver(PHOTOSENSITIVE, number)
    }

    blocklyReadRGB (args, util) {
      const number = Number(args.blockly_io_number)
      return this.getBLEReciver(COLOR, number)
    }

    blocklyReadPatrol (args, util) {
      const number = Number(args.blockly_io_number)
      return this.getBLEReciver(TRACKING, number)
    }

    getBLEReciver (type, number) {
      return new Promise((resolve, reject) => {
        BLEManager.registerRec(type, msg => {
          let val = msg.vals[0]
          if (type === HUMITURE) {
            val = msg.vals[1]
          }
          resolve(val)
        })
        const cmd = `$$K,${type},${number},**`
        // 失败就返回-1
        BLEManager.send(cmd, () => {}, () => {
          // 失败
          console.log('发送失败', cmd)
          // 清空
          resolve(-10)
        })
      });
    }

    sendMsgToBLE (type, number, vals) {
      const val = vals.join(',')
      const cmd = `$$E,${type},${number},${val},**`
    }
    
}

export default Scratch3IkenlBlocks;
