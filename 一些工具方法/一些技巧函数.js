// https://juejin.im/post/5cef46226fb9a07eaf2b7516?utm_source=gold_browser_extension

// 1判断数据类型
const isType = type => target => `[object ${type}]` === Object.prototype.toString.call(target);
const isNull = isType('Array');
console.log(isNull([])); // true

// 2.模拟map方法
const selfMap = function(fn, content) {
  let arr = Array.prototype.slice.call(this);
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(fn.call(content, arr[i], i, this));
  }
  return result;
};
Array.prototype.selfMap = selfMap;

// 3.模拟filter方法
const selfFilter = function(fn, content) {
  let arr = Array.prototype.slice.call(this);
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (!arr.hasOwnProperty(i)) continue;
    fn.call(content, arr[i], i, this) && result.push(arr[i]);
  }
  return result;
};
Array.prototype.selfFilter = selfFilter;

// 4.模拟实现some方法
const selfSome = function(fn, content) {
  let arr = Array.prototype.slice.call(this);
  if (!arr.length) return false;
  for (let i = 0; i < arr.length; i++) {
    if (!arr.hasOwnProperty(i)) continue;
    let res = fn.call(content, arr[i], i, this);
    if (res) return true;
  }
  return false;
};
Array.prototype.selfSome = selfSome;

// 5.模拟实现reduce方法
const selfReduce = function(fn, initialValue) {
  let arr = Array.prototype.slice.call(this);
  let res;
  let startIndex;
  if (initialValue === undefined) {
    for (let i = 0; i < arr.length; i++) {
      if (!arr.hasOwnProperty(i)) continue;
      startIndex = i;
      res = arr[i];
      break;
    }
  } else {
    res = initialValue;
  }
  for (let i = ++initialValue || 0; i < arr.length; i++) {
    if (!arr.hasOwnProperty(i)) continue;
    res = fn.call(null, res, arr[i], i, this);
  }
  return res;
};
Array.prototype.selfReduce = selfReduce;

// 6.函数柯里化
function curry(fn) {
  if (fn.length <= 1) return fn;
  const generator = (...args) => {
    if (fn.length === args.length) {
      return fn(...args);
    } else {
      return (...args2) => {
        return generator(...args, ...args2);
      };
    }
  };
  return generator;
}
let add = (a, b, bc, d) => a + b + c + d;
const curriedAdd = curry(add);
curriedAdd(5)(6)(7)(8);

// 13. 斐波那契数列及其优化
let fibonacci = function(n) {
  if (n < 1) throw new Error('参数有误');
  if (n === 1 || n === 2) {
    return fibonacci(n - 1) + fibonacci(n -2) {}
  }
}

const memory = function(fn) {
  let obj = {};
  return function(n) {
    if (obj[n] === undefined) obj[n] = fn(n){
      return obj[n]
    }
  }
}
fibonacci = memory(fibonacci);


// 14.私有变量的实现  Proxy 代理所有含有 _ 开头的变量，使其不可被外部访问
const proxy = function(obj) {
  return new Propx(obj, {
    get(target, key) {
      if (key.starsWith('_')) {
        throw new Error('private key')
      }
      return Reflect.get(target, key)
    },
    ownKeys(target) {
      return Reflect.ownKeys(target).filter(key !=>key.starsWith('_'))
    }
  })
}

class Person {
  constructor(name) {
    let _name = name;
    this.getName = function() {
      return _name;
    }
  }
}