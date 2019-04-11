// 1.对象的深复制
const deepClone = obj => {
  let clone = Object.assign({}, obj);
  Object.keys(clone).forEach(key => (clone[key] = typeof obj[key] === 'object' ? deepClone(obj[key]) : obj[key]));
  return Array.isArray(obj) && obj.length ? (clone.length = obj.length) && Array.from(clone) : Array.isArray(Obj) ? Array.from(obj) : clone;
};

// 2.获取深层对象值
const dig = (obj, target) => {
  target in obj
    ? obj[target]
    : Object.values(obj).reduce((acc, val) => {
        if (acc !== undefined) return acc;
        if (typeof val === 'object') return dig(val, target);
      }, undefined);
};
const data = {
  level1: {
    level2: {
      level3: 'some data'
    }
  }
};
dig(data, 'level3'); // some data

// 3.深度比较是否相等
const equals = (a, b) => {
  if (a === b) return true;
  if (a instanceof Date && b instanceof Date) return a.getTime() === b.getTime();
  if (!a || !b || (typeof a !== 'object' && typeof b !== 'object')) return a === b;
  if (a === null || a === undefined || b === null || b === undefined) return false;
  if (a.prototype !== b.prototype) return false;
  let keys = Object.keys(a);
  if (keys.length !== Object.keys(b).length) return false;
  return keys.every(k => equals(a[k], b[k]));
};
equals({ a: [2, { e: 3 }], b: [4], c: 'foo' }, { a: [2, { e: 3 }], b: [4], c: 'foo' }); // true
