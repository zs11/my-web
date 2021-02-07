// // const EventEmitter = require('events');
// // const path = require('path');

const { set } = require("koa/lib/response");

// // // console.log(process.env.PATH.split(path.delimiter));

// // // console.log(path.join('目录1', '目录2', '/目录3/目录4', '目录5'))


// // // console.log(path.join('/目录1', '目录2', '目录3'));
// // // // '/目录1/目录2/目录3

// // // console.log(path.join('/目录1', '目录2', '目录3/目录4', '目录5', '..'));
// // // // '/目录1/目录2/目录3/目录4'



// // console.log(path.resolve('/目录1', '/目录2', '/目录3'));

// // console.log(path.resolve('/目录1', '/目录2', '目录3'));

// // console.log(path.resolve('/目录1', '目录2', '目录3'));

// // console.log(path.resolve('目录1', '目录2', '目录3'));



// // // console.log(path.dirname('/notes/nodejs'), __dirname)

// // // class MyEmitter extends EventEmitter {}

// // // const myEmitter = new MyEmitter();

// // // myEmitter.on('event', () => {
// // //   console.log('event emit!');
// // // })

// // // myEmitter.emit('event');

// // // const myEmitter = new MyEmitter();
// // // myEmitter.on('error', (err) => {
// // //   console.error('error：' + err.message);
// // // });
// // // myEmitter.emit('error', new Error('错误'));

// // // console.log('123')

// // // myEmitter.on('test', () => {
// // //   // num是一个不存在的变量
// // //   console.log(num)
// // // })
// // // myEmitter.emit('test')

// // const fs = require('fs');

// // const rs = fs.createReadStream('./file.txt');
// // const ws = fs.createWriteStream('./copy.txt');

// // rs.on('data', chunk => {
// //   if(!ws.write(chunk)) {
// //     rs.pause();
// //   }
// // }).on('end', () => {
// //   ws.end();
// // })

// // ws.on('drain', () => {
// //   rs.resume();
// // })




// // rs.on('data', chunk => {
// //   console.log(chunk);
// // }).on('end', () => {
// //   console.log('end');
// // })


// // rs.on('readable', () => {
// //   let chunk = null;
// //   while((chunk = rs.read()) !== null) {
// //     console.log(chunk);
// //   }
// // }).on('end', () => {
// //   console.log('end');
// // })


// // const buf = Buffer.from('hello jason', 'utf-8');

// // const hex = buf.toString('hex');
// // console.log(hex); // 68656c6c6f206a61736f6e

// // const base64 = buf.toString('base64');
// // console.log(base64); // aGVsbG8gamFzb24=

// // const len = Buffer.byteLength('hello, 你好', 'utf-8');
// // console.log(len); // 13

// // console.log(process.argv)
// // console.log(process.execArgv)



// // setTimeout(() => {
// //   console.log('first');
// //   process.nextTick(() => {
// //     console.log('first nextTick');
// //   })
// // }, 100);

// // console.log('second');

// // process.nextTick(() => {
// //   console.log('second nextTick')
// // })

// // console.log('thrid');

// const { spawn } = require('child_process');
// const ls = spawn('ls', ['-lh', '/usr']);

// ls.stdout.on('data', (data) => {
//   console.log(`stdout: ${data}`);
// });

// ls.stderr.on('data', (data) => {
//   console.error(`stderr: ${data}`);
// });

// ls.on('close', (code) => {
//   console.log(`子进程退出，退出码 ${code}`);
// });

// const { fork } = require('child_process');

// const childProcess = fork('./son.js');
// childProcess.on('message', (msg) => {
//   console.log('father get messge：', msg);
// })

// childProcess.send('hello, i am father');


// process.on('message', (msg) => {
//   console.log(msg);
// })

// process.send('hello, i am son');

// const cluster = require('cluster');
// const http = require('http');
// const numCPUs = require('os').cpus().length;

// if (cluster.isMaster) {
//   console.log(`主进程 ${process.pid} 正在运行`);

//   // 衍生工作进程。
//   for (let i = 0; i < numCPUs; i++) {
//     cluster.fork();
//   }

//   cluster.on('exit', (worker, code, signal) => {
//     console.log(`工作进程 ${worker.process.pid} 已退出`);
//   });
// } else {
//   // 工作进程可以共享任何 TCP 连接。
//   http.createServer((req, res) => {
//     res.writeHead(200);
//     res.end('你好世界\n');
//   }).listen(8000);

//   console.log(`工作进程 ${process.pid} 已启动`);
// }

// const querystring = require('querystring');

// const parseUrl = querystring.parse('foo=bar&abc=xyz&abc=123');

// console.log(parseUrl)

// const querystring = require('querystring');

// const str = 'foo=bar&abc=xyz&abc=%2F%23';

// const decode = querystring.decode(str);
// console.log(decode);

// const encode = querystring.decode(decode);
// console.log(encode);

// var i = 0;function foo(){
//   i++;  
//   if(i>20){
//         return;
//   } 
//    console.log("foo");
//   setTimeout(()=>{    console.log("setTimeout");
//   },0);
//   process.nextTick(foo);
// }   
// setTimeout(foo, 2);


var obj = {
  get a() {
    console.log(this)
    return this._a;
  },
  set a(val) {
    this._a = a;
  }
}

var newObj = Object.create(obj);

console.log(newObj.__proto__)


