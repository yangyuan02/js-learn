/*
 * @Author: yangyuan
 * @Date: 2019-06-03 14:52:23
 * @Email: 1367511704@qq.com
 * @LastEditTime: 2020-05-09 15:36:12
 * @Description:
 */
// 发布订阅
class EventEmitter {
    constructor() {
        this._events = Object.create(null);
    }
    on(type, handler) {
        (this._events[type] || (this._events[type] = [])).push(handler);
    }
    off(type, handler) {
        if (this._events[type]) {
            this._events[type].splice(
                this._events[type].indexOf(handler) >>> 0,
                1
            );
        }
    }
    once(type, handler) {
        let fired = false;
        function magic() {
            this.off(type, magic);
            if (!fired) {
                fired = true;
                handler.apply(this, arguments);
            }
        }

        this.on(type, magic);
    }
    emit(type) {
        let payload = [].slice.call(arguments, 1);
        let array = this._events[type] || [];
        for (let i = 0; i < array.length; i++) {
            let handler = this._events[type][i];
            handler.apply(this, payload);
        }
    }
}
export default EventEmitter;

const p = new EventEmitter();
p.on("test", () => {
    console.log(1);
});
p.emit("test"); // 打印1

// 观察者
function Observer() {
    this.fns = [];
}
Observer.prototype = {
    //订阅
    subscribe: function (fn) {
        this.fns.push(fn);
    },
    //退订
    unsubscribe: function (fn) {
        this.fns = this.fns.filter(function (el) {
            if (el !== fn) {
                return true;
            }
        });
    },
    //发布
    update: function (o, thisObj) {
        var scope = thisObj || window;
        this.fns.forEach(function (el) {
            el.call(scope, o);
        });
    },
};
var o = new Observer();
var f1 = function (data) {
    console.log("Robbin: " + data + ", 赶紧干活了！");
};
var f2 = function (data) {
    console.log("Randall: " + data + ", 找他加点工资去！");
};
var f3 = function (data) {
    console.log("Li: " + data + ", 我要揍他！");
};
//f1,f2,f3订阅了
o.subscribe(f1);
o.subscribe(f2);
o.subscribe(f3);
//f1取消了订阅
o.unsubscribe(f1);
//发布
o.update("Tom回来了");

//输出结果
//Randall: Tom回来了, 找他加点工资去！
//Li: Tom回来了, 我要揍他！
