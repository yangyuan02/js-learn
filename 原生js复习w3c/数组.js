// http://www.w3school.com.cn/jsref/jsref_obj_array.asp

// 1.concat方法 连接2个或更多的数组并返回结果
var a = [1, 2];
var b = [3, 4];
var c = a.concat(b); // c [1,2,3,4]

// 2.join方法 把数组的所有元素放入一个字符串。元素通过指定的分隔符进行分割，返回被分割后的字符串
var c = b.join(); // '1,2,3,4'

// 3.pop方法 删除数组最后一个元素并返回改元素
var c = a.pop(); // c 2

// 4.push()方法 向数组末尾添加一个或更多元素，并返回新的长度
var c = a.push(5); // c 3

// 5.reverse()方法 颠倒数组中元素顺序
var c = a.reverse();

// 6.shift()方法 删除并返回数组的第一个元素
var c = a.shift(); // c 1

// 7.slice(start, end)end可选值，不写则为数组后面所有值方法 从某个已有的数组中截取指定的部分

var c = a.slice(1); // c [2]

// 8.sort()方法 ，数组在原数组上进行排序，不生成副本。  若 a 小于 b，在排序后的数组中 a 应该出现在 b 之前，则返回一个小于 0 的值。

// 9.splice() 方法向/从数组中添加/删除项目，然后返回被删除的项目。 arrayObject.splice(index,howmany,item1,.....,itemX) splice() 方法会直接对数组进行修改。
// 必需。整数，规定添加/删除项目的位置，使用负数可从数组结尾处规定位置。
// 必需。要删除的项目数量。如果设置为 0，则不会删除项目。
// 可选。向数组添加的新项目。

var c = a.splice(0, 1); //返回被删除的元素数组

// 10.unshift() 向数组的开头添加一个活更多元素，并返回新的长度

var c = a.unshift(3);

// 会改变原数组的
pop();
push();
reverse();
shift();
sort();
splice();
unshift();
