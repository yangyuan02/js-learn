/*
 * @Author: yangyuan
 * @Date: 2020-05-29 16:40:44
 * @Email: 1367511704@qq.com
 * @LastEditTime: 2020-05-29 16:48:51
 * @Description:
 */

// 在 [1, 2, 3, 4, 5, 6, 7, 8, 9] 中找到 4，若存在则返回下标，不存在返回-1，要求算法复杂度O(logn)

// 第一次
    left    mid     right
    1 2 3 4 5 6 7 8 9

// 第二次
    left    mid     right
    1       2    3     4 5 6 7 8 9

// 第三次
        left mid right
    1 2   3       4    5 6 7 8 9


// 第四次
            left mid right
    1 2   3       4        5 6 7 8 9


function searchNum(target, nums) {
    if(!nums.length) return -1;
    let left = 0;
    let right = nums.length - 1;
    let mid
    while (left <= right) {
        // >> 1 位运算代替 除2 取整 操作
        // 为什么不写成 min = (left + right)/2 ,因为考虑到left + right的溢出边界情况
        mid = left + ((right - left) >> 1)
        if (nums[mid] === target) {
            return mid
        }
        if (nums[mid] < target) {
            left = mid + 1;
        }
        if (nums[mid] > target) {
            right = mid - 1;
        }
    }
    return -1
}