// https://www.cnblogs.com/null00/archive/2012/04/27/2473788.html
// https://duola8789.github.io/2019/03/18/01%20%E5%89%8D%E7%AB%AF%E7%AC%94%E8%AE%B0/05%20%E7%AE%97%E6%B3%95/02%20%E7%AE%97%E6%B3%95%E7%BB%83%E4%B9%A0/%E7%AE%97%E6%B3%95%E7%BB%83%E4%B9%A006%20%E4%BB%8E%E6%95%B0%E7%BB%84%E4%B8%AD%E5%8F%96%E5%87%BAn%E4%B8%AA%E5%85%83%E7%B4%A0%E7%9A%84%E6%89%80%E6%9C%89%E7%BB%84%E5%90%88/

/**
 * 从数组中取出n个元素的所有排列组合
 * @param arr       待处理数组
 * @param n         要取出的元素个数
 * @param result    返回的结果
 * @param current   当前已经取出的元素
 * @returns {Array} 返回数组，数组元素是各种排列组合的情况
 */
const getCombine = (arr, n, result = [], current = '') => {
    // 如果只要取出一个元素，那么只需要将数组元素与已取出的元素一一组合即可
    if (n === 1) {
        result.push(...arr.map(v => `${current}${v}`))
            ;
        return result;
    }
    // 对当前数组进行遍历，剩余元素个数i等于要取出的元素个数时停止遍历
    for (let i = 0; i < arr.length - n + 1; i++) {
        // 取出当前的元素与已取出的元素组合
        const temp = `${current}${arr[i]}`;
        // 递归调用，数组剪切（相当于开始的索引前进），取出的个数减一
        getCombine(arr.slice(i + 1), n - 1, result, temp);
    }
    return result;
};

getCombine([1, 2, 3], 2)


const getCombine = (arr, n, result = [], current = '') => {
    // 如果只要取出一个元素，那么只需要将数组元素与已取出的元素一一组合即可
    if (n === 1) {
        result.push(...arr.map(v => [current, v].flat()))
            ;
        return result;
    }
    // 对当前数组进行遍历，剩余元素个数i等于要取出的元素个数时停止遍历
    for (let i = 0; i < arr.length - n + 1; i++) {
        // 取出当前的元素与已取出的元素组合
        const temp = current ? [current, arr[i]] : [arr[i]];
        console.log()
        // 递归调用，数组剪切（相当于开始的索引前进），取出的个数减一
        getCombine(arr.slice(i + 1), n - 1, result, temp.flat());
    }
    return result;
};

function getTest (data) {
    const result = [];
    for (let i = 1; i <= data.length; i++) {
        result.push(...getCombine(data, i))
    }
    return result
}

getTest([1, 2, 3])
