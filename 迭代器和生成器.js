// https://www.cnblogs.com/xiaohuochai/p/7253466.html

// 循环: 语言层面上的语法 -> 重复执行一段代码
// 遍历: 业务层面上的做法 -> 观察或者获取集合元素的方法
// 迭代: 实现层面上的概念 -> 实现遍历的底层方案是迭代

var arr = [1, 2, 3];

for (var i = 0; i < arr.length; i++) {
    console.log(arr[i], i, arr)
}

// ECMAScript3 没有针对可迭代对象的具体遍历方法
// ECMAScript5 7个专门针对数组遍历的方法
// ECMAScript5 for in 对象的遍历方法

// 类数组
var arr = {
    0: 1,
    1: 2,
    2: 3,
    length: 3,
    slice: Array.prototype.slice,
    splice: Array.prototype.splice,
    push: Array.prototype.push
}
// 类数组是可以用for in 遍历
for (var key in arr) {
    console.log(arr[key])
}

var m = new Map([[{ a: 1 }, 1]])

var s = new Set([1, 2, 3])
// Map 和Set类型不能用for in
for (const key in m) {
    console.log(key)
}

// for in 不应该用于迭代一个关注索引顺利的Array


// for of, 具有iterator接口的可以使用for of,Array,String,Map等具有for of, 对象不能使用for of遍历
// 生成器 -> 生成 -> 返回一个迭代器
function* generator () {
    for (let v of arr) {
        yield v;
    }
}
// 返回迭代器
const iterator = generator([1, 2, 3])
console.log(iterator.next())

// 模拟一个generator
function generator (arr) {
    // 肯定返回一个对象,具有next方法
    let nextIndex = 0;
    return {
        next () {
            return nextIndex < arr.length ? {
                value: arr[nextIndex++], done: false
            } : { value: undefined, done: true }
        }
    }
}

// 让对象也支持for of遍历
Object.prototype[Symbol.iterator] = iterator;

function iterator () {
    const _index = 0;
    const _this = this;
    return {
        next () {
            return _index < this.length ? {
                value: this[_index++], done: false
            } : { value: undefined, done: true }
        }
    }
}

const o = {
    0: 1,
    1: 2,
    2: 3,
    length: 3
}

for (let v of o) {
    console.log(v);
}