const { fork } = require('child_process');
const path = require('path');


const { fork } = require('child_process');
const path = require('path');

class SubProcess {
    constructor(modulePath, args = []) {
        this.modulePath = path.resolve(__dirname, modulePath);
        this.args = args;
        this.child = null;
    }

    start() {
        if (this.child) {
            throw new Error('Subprocess is already running.');
        }

        this.child = fork(this.modulePath, this.args);

        // 处理子进程的消息  
        this.child.on('message', (message) => {
            console.log('Received message from subprocess:', message);
            // 根据需要处理消息  
        });

        // 处理子进程的错误  
        this.child.on('error', (error) => {
            console.error('Subprocess error:', error);
            // 清理资源，关闭子进程等  
        });

        // 处理子进程的退出  
        this.child.on('exit', (code, signal) => {
            console.log(`Subprocess exited with code ${code} and signal ${signal}`);
            // 清理资源，例如删除对子进程的引用  
            this.child = null;
        });

        // 发送消息给子进程  
        this.sendMessage = (message) => {
            if (this.child) {
                this.child.send(message);
            } else {
                throw new Error('Subprocess is not running.');
            }
        };

        // 结束子进程  
        this.kill = () => {
            if (this.child) {
                this.child.kill();
                this.child = null;
            }
        };
    }

    // 其他可能的方法，比如重启子进程等  
}

// 使用示例  
const subprocess = new SubProcess('./subProcessModule.js', ['arg1', 'arg2']);
subprocess.start();

// 发送消息给子进程  
subprocess.sendMessage({ action: 'doSomething' });

// 在合适的时候结束子进程  
// subprocess.kill();

class SubProcessPool {
    constructor(modulePath, maxProcesses, args = []) {
        this.modulePath = path.resolve(__dirname, modulePath);
        this.maxProcesses = maxProcesses;
        this.args = args;
        this.processes = [];
        this.queue = [];
        this.runningProcesses = 0;
    }

    // 添加任务到队列  
    enqueue(task) {
        this.queue.push(task);
        this.runNext();
    }

    // 运行队列中的下一个任务  
    runNext() {
        if (this.runningProcesses >= this.maxProcesses || this.queue.length === 0) {
            return;
        }

        const task = this.queue.shift();
        const subprocess = new SubProcess(this.modulePath, this.args);
        subprocess.start();

        subprocess.on('exit', () => {
            this.runningProcesses--;
            this.runNext();
        });

        // 处理子进程的结果  
        subprocess.on('message', (result) => {
            task.callback(null, result); // 假设任务对象有callback属性  
        });

        // 发送任务给子进程  
        subprocess.sendMessage(task.data); // 假设任务对象有data属性  

        this.processes.push(subprocess);
        this.runningProcesses++;
    }

    // 结束所有子进程  
    killAll() {
        this.processes.forEach((process) => {
            process.kill();
        });
        this.processes = [];
        this.runningProcesses = 0;
        this.queue = [];
    }
}

// 使用示例  
const pool = new SubProcessPool('./subProcessModule.js', 3, ['arg1', 'arg2']);

// 添加任务  
pool.enqueue({
    data: { action: 'doSomething' },
    callback: (err, result) => {
        if (err) {
            console.error('Error:', err);
        } else {
            console.log('Result:', result);
        }
    }
});

// 当不再需要进程池时，结束所有子进程
// pool.killAll();