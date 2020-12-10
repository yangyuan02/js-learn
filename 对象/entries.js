// 实现entries方法

Object.MyEntries = function (o) {
    var _pool = [];
    if (Object.prototype.toString.call(o) === "[object Object]") {
        for (var k in o) {
            if (o.hasOwnProperty(k)) {
                var _arr = [k, o[k]];
                _pool.push(_arr);
            }
        }
    }
    return _pool;
};

var obj = {
    age: 1,
    name: "yangyuan",
};

Object.MyEntries(obj);

const r = Object.entries(obj); // [["age",1], ["name","yangyuan"]]

const newObj = Object.fromEntries(r); // 还原为原对象-es原生方法

obj === newObj; // false 还原的是一个新对象

Object.MyFromEntries(o) = function (o) {
    var _obj = {};
    for (var item of o) {
        _obj[item[0]] = item[1];
    }
    return _obj;
};
