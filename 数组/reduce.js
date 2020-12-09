//1.求和
[0, 1, 2, 3, 4].reduce((prev, next) => prev + next);

//2.数组对象 prev第一次是0
[({ x: 1 }, { x: 2 }, { x: 3 })].reduce((prev, next) => prev + next.x, 0);

//3.将二维数组变味一维数组
[
    [0, 1],
    [2, 3],
].reduce((prev, next) => (prev = prev.concat(next)), []);

// 4.计算数组中每个元素出现的次数
["a", "b", "c", "a"].reduce((prev, next) => {
    if (next in prev) {
        prev[next]++;
    } else {
        prev[next] = 1;
    }
    return prev;
}, {}); // {a:2,b:1,c:1}

// 5跟进key进行分类
var array = [
    { name: "y", age: 21 },
    { name: "x", age: 20 },
    { name: "z", age: 20 },
];

function groupBy(objectArray, property) {
    return objectArray.reduce((acc, obj) => {
        const key = obj[property];
        if (!acc[key]) {
            acc[key] = [];
        }
        acc[key].push(obj);
        return acc;
    }, {});
}

groupBy(array, "age"); // {20:[{name:'x', age:'20},{name:'z',age:20}], 21:[{name:'y', age:21}]}

//6功能性函数管道
const double = (x) => x + x;
const triple = (x) => 3 * x;
const quadruple = (x) => 4 * x;

const pipe = (...functions) => (input) =>
    functions.reduce((acc, fn) => fn(acc), input);

var test = pipe(double, triple);
test(2); // 12
