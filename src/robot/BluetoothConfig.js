export default {
    MAX_LENGTH: 20,
    UUID_WRITER: ['FFE9', 'FFF1'],
    UUID_READER: ['FFE1', 'FFF4'],
    COLOR_CMDS: [
        '#B0,0,0,*',
        '#B150,0,0,*',
        '#B255,150,0,*',
        '#B255,0,150,*',
        '#B0,0,150,*'
    ],
    BLE_CONNECTED: 2,
    BLE_CONNECTING: 1,
    BLE_DISCONNECT: 0,
    BLE_ITEM_STATE: [
        {
            content: '连接',
            className: 'connect'
        },
        {
            content: '连接中',
            className: 'connecting'
        },
        {
            content: '断开',
            className: 'disconnect'
        }
    ],
    FILTER_BLE_NAME: [
        'RS-BLE', 'PS_BLE', 'TAV'
    ]
};
