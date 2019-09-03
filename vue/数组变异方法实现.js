const arrayProto = Array.prototype;
const arrayMethods = Object.create(arrayProto);
['push', 'pop', 'shift', 'unshift', 'splice', 'sort'].forEach(item =>
  Object.defineProperty(arrayMethods, item, {
    value: function() {
      // 缓存原生方法,之后调用
      const original = arrayProto[item];
      let args = Array.from(arguments);
      original.apply(this, args);
    }
  })
);

function protoAugment(target, src) {
  target.__proto__ = src;
}

let obarr = [];
protoAugment(obarr, arrayMethods);
