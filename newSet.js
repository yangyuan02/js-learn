/*
 * @Author: yangyuan
 * @Date: 2020-04-21 16:26:52
 * @Email: 1367511704@qq.com
 * @LastEditTime: 2020-04-21 18:00:02
 * @Description:
 */
add()  //添加某个值,返回Set对象本身
clear() //删除所有的键/值对,没有返回值
delete() //删除某个键,返回true。如果删除失败,返回false
forEach() //对每个元素执行指定操作
has()  // 返回一个布尔值,表示某个键是否在当前Set对象之中
var arr = new Set(); 

arr.add(1) // 添加

arr.clear() // 清除

arr.delete(1) // 删除某个键,返回true，如若删除失败,返回false

arr.forEach(item => console.log(item))

arr.has(1)

// 数组去重
var arr = [1,2,2,4,4];
[...new Set(arr)]

Array.from(new Set(arr));

// 字符串去重
[...new Set('abvcedeaa')].join('') 

// 并集
var a = new Set([1,2,3])
var b = new Set([4,2,3])
var union = new Set([...a, ...b]) // [1,2,3,4]

//交集
var a = new Set([1,2,3])
var b = new Set([4,3,2])
var intersect = new Set([...a].filter(x => b.has(x))) 

// 素组方法实现交集
var a = [1,2,3];
var b = [4,2,3]
var c = a.filter(k => b.find(v => v === k )) // [2,3]

// 补集
var a = new Set([1,2,3])
var b = new Set([4,3,2]);
var difference = new Set([...a].filter(x => !b.has(x))); 

var c = a.filter(k => !b.find(v => v === k )) // [1]