/*
 * @Author: yangyuan
 * @Date: 2020-05-25 15:44:57
 * @Email: 1367511704@qq.com
 * @LastEditTime: 2020-05-25 16:06:01
 * @Description:
 * 经典面试题
 * 函数参数不定回调函数数目不定
 * 编写函数实现:
 * add(1,2,3,4,5)==15
 * add(1,2)(3,4)(5)==15
 */

function add() {
    // 第一次执行时,定义一个数组专门用来存储所以的参数
    var _args = [].slice.call(arguments);
    // 在内部声明一个函数,利用闭包的特性保存_args并收集所有的参数值
    var adder = function () {
        var _adder = function () {
            [].push.apply(_args, [].slice.call(arguments));
            return _adder;
        };
        // 利用隐式转换的特性,当最后执行时隐式转换,并计算最终的值返回
        _adder.toString = function () {
            return _args.reduce((a, b) => {
                return a + b;
            });
        };
        return _adder;
    };
    return adder.apply(null, _args);
}

function sum() {
    var arr = [];
    arr.push(...arguments);
    var tmp = function () {
        arr.push(...arguments);
        return tmp;
    };
    tmp.valueOf = function () {
        return arr.reduce(function (a, b) {
            return a + b;
        }, 0);
    };
    return tmp;
}

sum(1)(2)(3).valueOf();
sum(1, 2, 3).valueOf();
