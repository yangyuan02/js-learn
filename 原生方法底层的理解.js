/*
 * @Author: yangyuan
 * @Date: 2020-01-16 10:54:56
 * @Email: 1367511704@qq.com
 * @LastEditTime : 2020-01-16 11:15:02
 * @Description: 
 */
indexOf() // 内部使用的是 ===

{} === {} // false

NaN === NaN // false

null === null // true

undefined === undefined // true

[1,2,NaN, {}].indexOf(NaN) // -1

[1,2, NaN, {}].indexOf({}) // -1

var arr [1,1,'true','true',true,true,15,15,false,false, undefined,undefined, null,null, NaN, NaN,'NaN', 0, 0, 'a', 'a',{},{}];
// 去重的时候最好用 includes() includes(NaN) // true

