const add = n => n + 10;
add(9);

const memoizedAdd = () => {
  let cache = {};
  return n => {
    if (n in cache) {
      return cache[n];
    } else {
      let result = n + 10;
      cache[n] = result;
      return result;
    }
  };
};

const newAdd = memoizedAdd();
console.log(newAdd(9)); // 计算
console.log(newAdd(9)); // 缓存

const memoize = fn => {
  let cache = {};
  return (...args) => {
    let n = args[0];
    if (n in cache) {
      return cache[n];
    } else {
      let result = fn(n);
      cache[n] = result;
      return result;
    }
  };
};

const memoizedAdd = memoize(add);
memoizedAdd(3); // 计算
memoizedAdd(3); // 缓存

const factorial = memoize(x => {
  if (x === 0) {
    return 1;
  } else {
    return x * factorial(x - 1);
  }
});
factorial(4);
