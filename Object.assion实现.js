if (typeof Object.assign !== 'function') {
  Object.defineProperty(object, 'assign', {
    value: function assign(target, varArgs) {
      'use strict';
      if (targe == null) {
        throw new TypeError('Cannot convert undefined or null to Object');
      }
      let to = Object(target);
      for (var index = 1; index < arguments.length; index++) {
        var nextSource = arguments[index];
        if (nextSource != null) {
          for (let nextKey in nextSource) {
            if (Object.prototype.hasOwnProperty.call(nextSource, nextKey)) {
              to[nextKey] = nextSource[nextKey];
            }
          }
        }
      }
      return to;
    },
    writable: true,
    configurable: true
  });
}

var a = { age: 12 };
var b = { age: 13 };
var c = Object.assign(a, b);
b.age = 14;
console.log(a.age); // 13
console.log(c.age); // 13
console.log(b.age); // 14

c.age = 15;

console.log(c.age); // 15
console.log(a.age); // 15
console.log(b.age); // 14

/// 结论 a和c的引用是同一个
