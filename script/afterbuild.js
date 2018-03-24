let path = require('path');
let shell = require('shelljs');
// pc端的地址
const PC_DIRS = path.resolve('../scratch-issac-PC');

// 删除旧的build文件
shell.rm('-rf', path.join(PC_DIRS, 'build'));

// 复制新build的过去
shell.cp('-R', path.resolve('build'), PC_DIRS);
