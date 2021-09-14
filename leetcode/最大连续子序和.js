/**
 * - [-2, 1, -3, 4, -1, 2, 1, -5, 4]
 * [-2]
 * [-2,1]
 * [1]
 * [1, -3]
 * [1, -3, 4]
 * [4]
 * [4, -1]
 * [4, -1, 2]
 * [4, -1, 2, 1] // 最大连续子序和
 */

var maxSubArray = function (nums) {
    const memo = [];
    memo[0] = nums[0];

    for (let i = 1; i < nums.length; i++) {
        memo[i] = Math.max(nums[i] + memo[i - 1], nums[i])
    }

    let max = nums[0];

    console.log(memo)

    for (let i = 1; i < memo.length; i++) {
        max = Math.max(max, memo[i])
    }

    return max
}