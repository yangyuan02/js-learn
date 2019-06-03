var id = 'window';
var test = function() {
  console.log(this.id);
};

test(); // windows

var obj = {
  id: 'obj',
  hehe: test
};
obj.hehe(); // obj

var test = function() {
  console.log(this.id);
}.bind(window);

obj.hehe(); // window

// 分析 bind方法不会立即执行，需要返回一个待支持的函数 return function() {}
// 作用域绑定,这里可以使用apply或者call
// 传递参数，由于参数的不确定性，需要使用apply传递数组

// v1
Function.prototype.testBind = function(self) {
  var _this = this;
  var slice = Array.prototype.slice;
  var args = slice.apply(arguments, [1]); // self后面的所有参数截取数组
  return function() {
    return _this.apply(that, args);
  };
};

var test = function(a, b) {
  console.log('作用域绑定' + this.value); // 作用域绑定ok
  console.log('testBind参数传递' + a.value2); // testBind参数传递 also ok
  console.log('调用参数传递' + b); // 调用参数传递 undefined
};

var obj = {
  value: 'ok'
};

var funNew = test.testBind(obj, { value: 'also ok' });

funNew('hello bind');

// 不足函数调用参数传递失败

// v2

Function.prototype.testBind = function(self) {
  var _this = this;
  var slice = Array.prototype.slice;
  var args = slice.apply(arguments, [1]);
  return function() {
    return _this.apply(that, args.concat(Array.prototype.slice.apply(arguments, [0])));
  };
};

// funNew('hello bind');  调用参数传递 hello bind

// 绑定函数new之后丢失this 中专函数把原型链传递下去

Function.prototype.testBind = function(that) {
  var _this = this,
    slice = Array.prototype.slice,
    args = slice.apply(arguments, [1]),
    fNOP = function() {},
    bound = function() {
      return _this.apply(this instanceof fNOP ? this : that || window, args.concat(Array.prototype.slice(arguments, [0])));
    };
  fNOP.prototype = _this.prototype;
  bound.prototype = new fNOP();
  return bound;
};



// 模拟new操作符


function objectFactory() {
  var obj = Object.create(null),
  Constructor = [].shift.call(arguments),
  obj._proto_ = Constructor.prototype,
  var ret = Constructor.apply(obj,arguments)
  return typeof ret === 'object' ? ret: obj;
}

// 实现call方法
const selfCall = function(context, ...args) {
  let func = this;
  context || (context = window);
  if (typeof func !== 'function') throw new TypeError('this is not function')
  let caller = Symbol('caller')
  context[caller] = func
  let res = context[caller](...args);
  delete context[caller]
  return res;
}