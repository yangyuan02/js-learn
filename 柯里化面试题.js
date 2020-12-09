// add(1)(2)(3) = 6;
// add(1, 2, 3, 4)(4) = 10;
// add(1)(2)(3)(4)(5)(6) = 15;

function add() {
    let args = Array.from(arguments); // 转为数组
    let inner = function () {
        args.push(...arguments);
        return inner; // 返回自己达到括号无限加
    };
    inner.toString = function () {
        return args.reduce((prev, next) => prev + next, 0); // 将所有参数累加起来
    };
    return inner;
}

var result = add(1)(2)(3);
result.toString();
