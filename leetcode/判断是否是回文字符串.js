/*
 * @Author: yangyuan
 * @Date: 2020-04-28 10:13:36
 * @Email: 1367511704@qq.com
 * @LastEditTime: 2020-05-25 17:30:01
 * @Description:
 */

//  回文字符串 noon level 就是正读反读都是一个意思

function isPlalindrome(input) {
    if (typeof input !== "string") return false;
    return input.split("").reverse().join("") === input;
}

// 不适用api

function isPlalindrome(input) {
    if (typeof input !== "string") return false;
    let i = 0,
        j = input.length - 1;
    while (i < j) {
        if (input.charAt(i) !== input.charAt(j)) return false;
        i++;
        j--;
    }
    return true;
}
