/*
 * @Author: yangyuan
 * @Date: 2020-04-28 16:14:21
 * @Email: 1367511704@qq.com
 * @LastEditTime: 2020-04-28 20:43:05
 * @Description:
 */
// 斐波那契指的是这样一个数列：1、1、2、3、5、8、13、21、34......在数学上，斐波纳契数列以如下被以递
// 归的方法定义：F(1)=1，F(2)=1, F(n)=F(n-1)+F(n-2)（n>=2，n∈N*）;随着数列项数的增加，前一项与
// 后一项之比越来越逼近黄金分割的数值0.6180339887..…

function fibonacci(n) {
    if (n == 0 || n == 1) {
        return n;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
}
fibonacci(6); // 8

let fibonacci = (function () {
    let arr = [0, 1];
    return function (n) {
        let result = arr[n];
        if (typeof result != "number") {
            result = fibonacci(n - 1) + fibonacci(n - 2);
            arr[n] = result; // 将每次fibonacci的值都缓存起来
        }
        return result;
    };
})();
