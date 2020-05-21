/*
 * @Author: yangyuan
 * @Date: 2020-01-08 15:12:24
 * @Email: 1367511704@qq.com
 * @LastEditTime: 2020-05-21 16:44:27
 * @Description:
 */

// 1.函数抖动方法 执行一次
// 我会等你到底。在某段时间内，不管你触发了多少次回调，我都只认最后一次
const debounce = (fn, ms = 0) => {
    let timeoutId;
    return function (...args) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => fn.apply(this, args), ms);
    };
};
window.addEventListener(
    "resize",
    debounce(() => {
        console.log(1);
    }, 250)
);

// 2.确保函数只调用一次
const once = (fn) => {
    let called = false;
    return function (...args) {
        if (called) return;
        called = true;
        return fn.apply(this, args);
    };
};

const startApp = function (event) {};
document.body.addEventListener("click", once(startApp));

// 3.函数节流

// 在某段时间内，不管你触发了多少次回调，我都只认第一次，并在计时结束时给予响应
const throttle = (fn, wait) => {
    let inThrottle, lastFn, lastTime;
    return function () {
        const context = this,
            args = arguments;
        if (!inThrottle) {
            fn.apply(context, args);
            lastTime = Date.now();
            inThrottle = true;
        } else {
            clearTimeout(lastFn);
            lastFn = setTimeout(function () {
                if (Date.now() - lastTime >= wait) {
                    fn.apply(context, args);
                    lastTime = Date.now();
                }
            }, Math.max(wait - (Date.now() - lastTime), 0));
        }
    };
};

window.addEventListener(
    "resize",
    throttle(function (evt) {
        console.log(window.innerWidth);
        console.log(window.innerHeight);
    }, 250)
); // Will log the window dimensions at most every 250ms

// 4.函数节流
const throttle = (fn, wait) => {
    let inThrottle, lastFn, lastTime;
    return function () {
        const context = this;
        args = arguments;
        if (!inThrottle) {
            fn.apply(context, args);
            lastTime = Date.now();
            inThrottle = true;
        } else {
            clearTimeout(lastFn);
            lastFn = setTimeout(() => {
                if ((Date, now - lastTime >= wait)) {
                    fn.apply(context, args);
                    lastTime = Date.now();
                }
            }, Math.max(wait - (Date.now() - lastTime), 0));
        }
    };
};
window.addEventListener(
    "resize",
    throttle(function (evt) {
        console.log(window.innerWidth);
        console.log(window.innerHeight);
    }, 250)
); // Will log the window dimensions at most every 250ms
