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

// 8.sort()方法 ，数组在原数组上进行排序，不生成副本。  详细

// 会改变原数组的
pop();
push();
reverse();
shift();
sort();
