// https://juejin.im/post/5bfc9e4ee51d451dca4794af  es6实现promise对象

class MyPromise { // v1
    constructor (callback) {
        this._succ_res = null; // 保存成功的返回结果
        this._err_res = null; //保存失败的返回结果
        this.status = 'pending'; //标记处理的状态
        callback((...arg) => {
            this._succ_res = arg;
            this.status = 'success'
        }, (...arg) => {
            this._err_res = arg;
            this.status = 'error';
        })
    }
    then(onFulfilled, onRejected) {
        if (this.status === 'success') {
            onFulfilled(...this._succ_res);
        } else if(this.status === 'error') {
            onRejected(...this._err_res);
        }
    }
};
//调用
new MyPromise((resolve,reject) => {
    resolve(1);
}).then(res => {
    console.log(res)
})

// 加入异步处理 v2
class MyPromise { // v1
    constructor (callback) {
        this._succ_res = null; // 保存成功的返回结果
        this._err_res = null; //保存失败的返回结果
        this.status = 'pending'; //标记处理的状态
        this._queue = []; //事件队列 
        fn((...arg) => {
            this._succ_res = arg;
            this.status = 'success';
            this._queue.forEach(json => { //++
                json.resolve(...arg);
            })
        }, (...arg) => {      //++
            this._err_res = arg;
            this.status = 'error';
            this._queue.forEach(json => {
                json.reject(...arg);
            })
        })
    }
    then(onFulfilled, onRejected) {
        if (this.status === 'success') {
            onFulfilled(...this._succ_res);
        } else if(this.status === 'error') {
            onRejected(...this._err_res);
        } else {
            this._queue.push({resolve: onFulfilled, reject: onRejected})
        };
    }
};

//加入链式调用 //v3
class MyPromise { // v1
    constructor (callback) {
        this._succ_res = null; // 保存成功的返回结果
        this._err_res = null; //保存失败的返回结果
        this.status = 'pending'; //标记处理的状态
        this._queue = []; //事件队列 
        fn((...arg) => {
            this._succ_res = arg;
            this.status = 'success';
            this._queue.forEach(json => { //++
                json.resolve(...arg);
            })
        }, (...arg) => {      //++
            this._err_res = arg;
            this.status = 'error';
            this._queue.forEach(json => {
                json.reject(...arg);
            })
        })
    }
    then(onFulfilled, onRejected) {
        if (this.status === 'success') {
            onFulfilled(...this._succ_res);
        } else if(this.status === 'error') {
            onRejected(...this._err_res);
        } else {
            this._queue.push({resolve: handle, reject: errBack}) //-+
        };
        function handle(value) {
            //then方法的onFulfilled有return时，使用return的值，没有则使用保存的值
            let returnVal = onFulfilled instanceof Function && onFulfilled(value) || value;
            if (returnVal && returnVal['then'] instanceof Function) {
                returnVal.then(res => {
                    resFn(res);
                }, err => {
                    rejFn(err);
                })
            } else {//其他值
                resFn(returnVal);
            };
        };
        function errBack(reason) {
            if (onRejected instanceof Function) {
                //如果有onRejected回调，执行一遍
                let returnVal = onRejected(reason);
                //执行onRejected回调有返回，判断是否thenable对象
                if (typeof returnVal !== 'undefined' && returnVal['then'] instanceof Function) {
                    returnVal.then(res => {
                        resFn(res);
                    }, err => {
                        rejFn(err);
                    })
                } else { //无返回或不是thenable的直接丢给新的对象resFn回调
                    resFn(returnVal);
                };
            } else {//传给下一个reject回调
                resFn(reason);
            };
        };
    }
};

// 加入MyPromise.resolve()和MyPromise.reject()方法 v4
MyPromise.resolve = (arg) => {
    if (typeof arg ==='undefined' || arg === null) {
        return new MyPromise((resolve) => {
            resolve(arg);
        })
    } else if (arg instanceof MyPromise) {
        return arg;
    } else if (arg['then'] instanceof Function) {
        return new MyPromise((resolve, reject) => {
            arg.then((res) => {
                resolve(res)
            }, err => {
                reject(err)
            })
        })
    } else {
        return new MyPromise(resolve => {
            resolve(arg);
        })
    };
};
MyPromise.reject = (arg) => {
    return new MyPromise((resolve, reject) => {
        reject(arg)
    })
}

// 加入MyPromise.all()和MyPromise.race() v5
MyPromise.all = (arr) => {
    if(!Array.isArray(arr)) {
        throw new TypeError('参数应该是一个数组');
    };
    return new MyPromise((resolve, reject) => {
        let i = 0; result = [];
        next();
        function next() {
            MyPromise.resolve(arr[i]).then(res => {
                result.push(res);
                i++;
                if (i === arr.length) {
                    resolve(result);
                } else {
                    next()
                };
            });
        };
    })
};

MyPromise.rece = arr => {
    if (!Array.isArray(arr)) {
        throw new TypeError('参数应该是一个数组');
    };
    return new MyPromise((resolve,reject) => {
        let done = false;
        arr.forEach(item => {
            MyPromise.resolve(item).then(res => {
            if (!done) {
                resolve(res);
                done = true;
            }
            }, err => {
                if (!done) {
                    reject(err);
                    done = true;
                }
            })
        })
    })
};

// Promise.prototype.catch()和Promise.prototype.finally()方法实现 v6
class MyPromise { // v1
    constructor (callback) {
        this._succ_res = null; // 保存成功的返回结果
        this._err_res = null; //保存失败的返回结果
        this.status = 'pending'; //标记处理的状态
        this._queue = []; //事件队列 
        fn((...arg) => {
            this._succ_res = arg;
            this.status = 'success';
            this._queue.forEach(json => { //++
                json.resolve(...arg);
            })
        }, (...arg) => {      //++
            this._err_res = arg;
            this.status = 'error';
            this._queue.forEach(json => {
                json.reject(...arg);
            })
        })
    }
    then(onFulfilled, onRejected) {
        if (this.status === 'success') {
            onFulfilled(...this._succ_res);
        } else if(this.status === 'error') {
            onRejected(...this._err_res);
        } else {
            this._queue.push({resolve: handle, reject: errBack}) //-+
        };
        function handle(value) {
            //then方法的onFulfilled有return时，使用return的值，没有则使用保存的值
            let returnVal = onFulfilled instanceof Function && onFulfilled(value) || value;
            if (returnVal && returnVal['then'] instanceof Function) {
                returnVal.then(res => {
                    resFn(res);
                }, err => {
                    rejFn(err);
                })
            } else {//其他值
                resFn(returnVal);
            };
        };
        function errBack(reason) {
            if (onRejected instanceof Function) {
                //如果有onRejected回调，执行一遍
                let returnVal = onRejected(reason);
                //执行onRejected回调有返回，判断是否thenable对象
                if (typeof returnVal !== 'undefined' && returnVal['then'] instanceof Function) {
                    returnVal.then(res => {
                        resFn(res);
                    }, err => {
                        rejFn(err);
                    })
                } else { //无返回或不是thenable的直接丢给新的对象resFn回调
                    resFn(returnVal);
                };
            } else {//传给下一个reject回调
                resFn(reason);
            };
        };
    }
    catch(errHander) {
        return this.then(undefined, errHander);
    }
    finally(finallyHandler) {
        return this.then(finallyHandler, finallyHandler)
    }
};

// v7代码错误捕获  未完待续
