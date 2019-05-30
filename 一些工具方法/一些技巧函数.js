// https://juejin.im/post/5cef46226fb9a07eaf2b7516?utm_source=gold_browser_extension

// 1判断数据类型
const isType = type => target => `[object ${type}]` === Object.prototype.toString.call(target);
const isNull = isType('Array');
console.log(isNull([])); // true

const selfMap = function(fn, content) {
  let arr = Array.prototype.slice.call(this);
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(fn.call(content, arr[i], i, this));
  }
  return result;
};
