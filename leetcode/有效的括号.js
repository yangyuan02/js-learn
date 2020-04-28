/*
 * @Author: yangyuan
 * @Date: 2020-04-28 10:35:42
 * @Email: 1367511704@qq.com
 * @LastEditTime: 2020-04-28 10:39:04
 * @Description:
 */
// () true
// ()[]{}  true
// (] false
//([)] false
// {[]} true

var isValid = function (s) {
    let map = {
        "{": "}",
        "(": ")",
        "[": "]",
    };
    let stack = [];
    for (let i = 0; i < s.length; i++) {
        if (map[s[i]]) {
            stack.push(s[i]);
        } else if (s[i] !== map[stack.pop()]) {
            return false;
        }
    }
    return stack.length === 0;
};
