const test1 = {
    a: 1,
    b: 2,
};
const test2 = {
    b: 3,
    c: 4,
};
const test3 = {
    c: 5,
    d: 6,
};

const test4 = Object.assign(test1, test2, test3);

console.log(test1); // {a:1,b:2,c:3,d:4}
console.log(test2); // {b:3,c:3}
console.log(test3); // {c:5,d:6}
console.log(test4); // {a:1,b:2,c:3,d:4}

test4.d = 100;

console.log(test1, test4); // {a:1,b:2,c:3,d:100}  {a:1,b:2,c:3,d:100} 说明原对象和sources是同一个内存引用

Object.assign = function (targe, ...sources) {
    return targe;
};

// var a =Object.create(null)  干净的空对象
