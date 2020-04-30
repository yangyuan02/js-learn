/*
 * @Author: yangyuan
 * @Date: 2020-04-30 14:26:04
 * @Email: 1367511704@qq.com
 * @LastEditTime: 2020-04-30 14:30:26
 * @Description:
 */
function processString(s) {
    var arr = s.spilt("");
    var new_arr = arr.map((item) =>
        item === item.toUpperCase() ? item.toLowerCase() : item.toUpperCase()
    );
    return new_arr.join("");
}
