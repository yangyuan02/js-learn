/*
 * @Author: yangyuan
 * @Date: 2020-04-16 13:52:23
 * @Email: 1367511704@qq.com
 * @LastEditTime: 2020-04-16 14:44:59
 * @Description:
 */
//数组去重
function uniq(arr) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        if (result.indexOf(arr[i]) === -1) {
            result.push(arr[i]);
        }
    }
    return result;
}
uniq([1, 2, 3, 4, 2, 1]);

// 根据某一个key去重
function uniqObj(arr) {
    const result = [];
    const onlyKey = [];
    for (let i = 0; i < arr.length; i++) {
        if (onlyKey.indexOf(arr[i].age) === -1) {
            onlyKey.push(arr[i].age);
            result.push(arr[i]);
        }
    }
    return result;
}
uniqObj([
    { name: "yangyuan", age: 1 },
    { name: "zhangsan", age: 2 },
    { name: "lisi ", age: 2 },
]);
// 字符串去重
function uniqStr(str) {
    let s = "";
    for (var i = 0; i < str.length; i++) {
        if (s.indexOf(str[i]) === -1) {
            s += str[i];
        }
    }
    return s;
}
uniqStr("aasfeffe");

// 冒泡排序
function bollSort(arr) {
    var arr = arr;
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                var temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}
bollSort([1, 2, 3, 4, 5, 7, 2]);

//找出字符出现最多次的字符串
function findMaxStr(str) {
    return str.split("").reduce((res, cur) => {
        res[cur] ? res[cur]++ : (res[cur] = 1);
        return res;
    }, {});
}
findMaxStr("afefeafeafe");

//数组扁平
function flatten(arr) {
    while (arr.some((item) => Array.isArray(item))) {
        arr = [].concat(...arr);
    }
    return arr;
}
flatten([1, [2, [3]]]);

// 找出数组中最大的数字
function findMax(arr) {
    return arr.reduce((prev, next) => (prev > next ? prev : next));
}
findMax([1, 2, 3, 4, 6]);

// 两数之和
function towSum(nums, target) {
    const map = new Map();
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
}
towSum([1, 2, 3, 4], 5); // [(0, 3)];

//延迟函数
const sleep = (time) => new Promise((resolve) => setTimeout(resolve, time));
sleep(500).then(() => {
    //要做的事情
});

//将字符串重复n次
function repeatStringNumTimes(string, times) {
    let str = "";
    while (times > 0) {
        str += string;
        times--;
    }
    return str;
}
repeatStringNumTimes("aaa", 4);
