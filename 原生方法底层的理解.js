/*
 * @Author: yangyuan
 * @Date: 2020-01-16 10:54:56
 * @Email: 1367511704@qq.com
 * @LastEditTime : 2020-01-16 10:57:10
 * @Description: 
 */
indexOf() // 内部使用的是 ===

{} === {} // false

NaN === NaN // false

null === null // true

undefined === undefined // true

[1,2,NaN, {}].indexOf(NaN) // -1

[1,2, NaN, {}].indexOf({}) // -1

