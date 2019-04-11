// 1.获取类型
const getType = v => {
  v === undefined ? 'undefined' : v === null ? 'null' : v.constructor.name.toLowerCase();
};
getType(new Set([1, 2, 3])); // 'set'

// 2.判断是否属于同一类型
const is = (type, val) => ![, null].includes(val) && val.constructor === type;
is(Array, [1]); // true
is(ArrayBuffer, new ArrayBuffer()); // true
is(Map, new Map()); // true
is(RegExp, /./g); // true
is(Set, new Set()); // true
is(WeakMap, new WeakMap()); // true
is(WeakSet, new WeakSet()); // true
is(String, ''); // true
is(String, new String('')); // true
is(Number, 1); // true
is(Number, new Number(1)); // true
is(Boolean, true); // true
is(Boolean, new Boolean(true)); // true

// 3.判断是否是boolean类型
const isBoolean = val => typeof val === 'boolean';
isBoolean(null); // false
isBoolean(true); // true

// 4.是否为空
const isEmpty = val => val == null || !(Object.keys(val) || val).length;
isEmpty(new Map()); // true
isEmpty(new Set()); // true
isEmpty([]); // true
isEmpty({}); // true
isEmpty(''); // true
isEmpty([1, 2]); // false
isEmpty({ a: 1, b: 2 }); // false
isEmpty('text'); // false
isEmpty(123); // true - type is not considered a collection
isEmpty(true); // true - type is not considered a collectio

const isFunction = val => typeof val === 'function';
isFunction('x'); // false;
isFunction(x => x); // true

//5.是否unll或者undefined
const isNil = val => val === undefined || val === null;
isNil(null); // true
isNil(undefined); // true

//6.是否是unll
const isNull = val => val === null;
isNull(null); //true

//6.是否是数字
const isNumber = val => typeof val === 'number' && val === val;
isNumber(1); // true
isNumber('1'); // false
isNumber(NaN); // false

//7.是否是对象
const isObject = (obj = obj === Object(obj));
isObject([1, 2, 3, 4]); // true
isObject([]); // true
isObject(['Hello!']); // true
isObject({ a: 1 }); // true
isObject({}); // true
isObject(true); // false

//8.是否是字符串
const isString = val => typeof val === 'string';
