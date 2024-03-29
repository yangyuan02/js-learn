/**
 * 最大回文字符串
 * - babad => bab
 * - cabbad => abba
 */

var longestPalindrome = function (s) {
    if (s.length < 2) {
        return s
    }
    let start = 0;
    let maxLength = 1;

    function expandAroundCenter (left, right) {
        while (left >= 0 && right < s.length && s[left] === s[right]) {
            if (right - left + 1 > maxLength) {
                maxLength = right - left + 1;
                start = left
            }
            left--;
            right++
        }
    }

    for (let i = 0; i < s.length; i++) {
        expandAroundCenter(i - 1, i + 1) // 对应bab情况
        expandAroundCenter(i, i + 1) // 对应abba情况
    }
    return s.substring(start, start + maxLength)
}