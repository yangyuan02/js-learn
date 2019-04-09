// https://30secondsofcode.org/index

// 1数组是否全面满足条件
const all = (arr, fn = Boolean) => arr.every(fn);
// eg all([4, 2, 3], x => 1) // true

// 2.检查所有元素是否与第一个元素相等
const allEqual = arr => arr.every(val => val === arr[0]);
// eg allEqual([1,2,3]) // false allEqual([1,1,1]) // true

// 3.数组中只有有一个满足条件
const any = (arr, fn = Boolean) => arr.some(fn);
// eg any([0,1,2,0], x => x >= 2) // true

// 4.数组分为多个chunk
const chunk = (arr, size) => {
  Array.from({ length: Math.ceil(arr.length / size) }, (v, i) => {
    arr.slice(i * size, i * size + size);
  });
};
// eg chunk([1,2,3,4,5], 2) // [[1,2],[3,4],5]

// 5.返回值为真的数组
const compact = arr => arr.filter(Boolean);
// eg compact([0,1,false,'',Nan]) // [0,1]

// 6.统计给定值在数组中出现的次数
const countOccurrences = (arr, val) => arr.reduce((a, v) => (v === val ? a + 1 : a), 0);
// eg countOccurrences([1,2,3,4,1,2,1],1) // 3

// 7.数组多维变一维
const deepFlatten = arr => [].concat(...arr.map(v => (Array.isArray(v) ? deepFlatten(v) : v)));
// deepFlatten([1,2,[3,4,[,5]]]) // [1,2,3,4,5]

// 8.数组b在数组a中的差几
const difference = (a, b) => {
  const s = new Set(b);
  return a.filter(x => !s.has(x));
};
difference([1, 2, 3], [1, 2, 4]); // 3

// 9数组扁平到指定的维度
const flatten = (arr, depth = 1) => arr.reduce((a, v) => a.concat(depth > 1 && Array.isArray(v) ? flatten(v, depth - 1) : v), []);
flatten([1, [2, [3, [4, 5], 6], 7], 8], 2); // [1, 2, 3, [4, 5], 6, 7, 8]
