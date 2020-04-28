/*
 * @Author: yangyuan
 * @Date: 2020-04-28 15:21:24
 * @Email: 1367511704@qq.com
 * @LastEditTime: 2020-04-28 15:25:26
 * @Description:
 */
function indexOf(str, a, start) {
    start = start === undefined ? 0 : start;
    for (var i = start; i < str.length; i++) {
        if (str[i] == a) {
            return i;
        }
    }
    return -1;
}
indexOf("abc", "a");
