/*
 * @Author: yangyuan
 * @Date: 2020-05-02 19:46:10
 * @Email: 1367511704@qq.com
 * @LastEditTime: 2020-05-02 19:52:49
 * @Description:
 */
// 获取页面上所有的tagName并去重
// 方法一
var nodeList = document.querySelectorAll("*");
var res = {};
for (let i = 0; i < nodeList.length; i++) {
    if (!(nodeList[i].tagName in res)) {
        res[nodeList[i].tagName] = 1;
    }
}
console.log(Object.keys(res));

// 方法二
var nodeList = document.querySelectorAll("*");
var s = new Set();
nodeList.forEach((x) => s.add(x.tagName));
console.log(Array.from(s));
