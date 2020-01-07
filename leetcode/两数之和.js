/*
 * @Author: yangyuan
 * @Date: 2020-01-07 13:30:47
 * @Email: 1367511704@qq.com
 * @LastEditTime : 2020-01-07 15:33:14
 * @Description:
 */

// https://www.jianshu.com/p/c7fe9e98f8d1
// 两次循环,时间复杂度为O(N*N)
const twoSum = (nums, target) => {
  let arr = [];
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        arr = [i, j];
        break;
      }
    }
  }
  return arr;
};
// twoSum([1,2,3,4],5)  [1, 2]

// 我们只要寻找目标值是否在数组中,因此可想到indexOf(), indexOf()实际上还是对数组再遍历,只是写法优化了下
// 时间复杂度还是O(N*N)
const twoSum = (nums, target) => {
  let a, b;
  for (let i = 0; i < nums.length; i++) {
    b = nums.indexOf(target - nums[i]);
    if (b > -1 && b !== i) {
      a = i;
      break;
    }
  }
  return [a, b];
};
// twoSum([1,2,3,4],5)  [0, 3]

// 时间复杂度上做优化,hash表可以帮助我们

const towSum = (nums, target) => {
  let map = {};
  let res = [];
  nums.forEach((i, v) => {
    map[i] = v;
  });
  for (let i = 0; i < nums.length; i++) {
    let j = map[target - nums[i]];
    if (j && j !== i) {
      res = [i, j];
      break;
    }
  }
  return res;
};
// towSum([1,2,3,4],5)  [0, 3]

// 使用es6 map对象
const towSum = (nums, target) => {
  let map = new Map();
  let res = [];
  nums.forEach((i, v) => {
    map.set(i, v);
  });
  for (let i = 0; i < nums.length; i++) {
    let j = map.get(target - nums[i]);
    if (j && j !== i) {
      res = [i, j];
      break;
    }
  }
  return res;
};
// towSum([1,2,3,4],5)  [0, 3]
