/*
 * @Author: yangyuan
 * @Date: 2020-01-20 15:34:19
 * @Email: 1367511704@qq.com
 * @LastEditTime : 2020-01-20 15:48:43
 * @Description:
 */

// 创建一个worker
var myWorker = new Worker("worker.js");
// 专用worker中消息的接收和发送
//main.js
first.onchange = function() {
    myWorker.postMessage([first, value, second, value]);
    console.log("Message posted to worker");
};

second.onchange = function() {
    myWorker.postMessage([first, value, second, value]);
    console.log("Message posted to worker");
};

// worker.js
// onmessage允许我们在任何时刻接触,一旦接收消息就可以执行一些代码,代码中消息本身作为事件的data属性进行使用
onmessage = function(e) {
    console.log("Message received from main script");
    var workerResult = "Result:" + e.data[0] * e.data[1];
    console.log("Posting message back to main script");
    postMessage(workerResult);
};

// 回到主线程,我们再次使用onmessage以响应worker回传消息
myWorker.onchange = function(e) {
    result.textContent = e.data;
    console.log("Message received from worker");
};

// 注意： 在主线程中使用时，onmessage和postMessage() 必须挂在worker对象上，而在worker
// 中使用时不用这样做。原因是，在worker内部，worker是有效的全局作用域。

// 终止worker
myWorker.terminate();

// 处理错误
