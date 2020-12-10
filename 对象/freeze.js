// 对象冻结

function Test() {
    this.a = 1;
    this.b = 2;
}

Test.prototype.c = 3;

const test = new Test();

const newTest = Object.freeze(test);

console.log(newTest === test); // true 返回的是原来的对象

test.d = 4; // 不可新增

test.b = 3; // 不可修改,还是b=2

delete test.a; // 不可删除

Test.prototype.c = 333; // 构造函数上原型属性可以修改

test.__proto__.c = 333; // 也可修改,注意实例上面是没有prototype的是通过__proto__方法的

test.__proto__ = {
    // 报错,只能对某个值修改不能怼整个__proto__整体赋值
    a: 1,
    b: 2,
    c: 3,
};

const obj = {
    a: 1,
    b: 2,
    c: {
        d: 3,
    },
};

Object.freeze(obj);

const res = Object.isFrozen(obj); // 判断是否冻结-返回布尔值

obj.a = 2; //不可修改
obj.c.d = 4; // 可以修改-说明freeze()方法是浅复制

// 说明可以对其他类型进行使用,不会报错
const res = Object.freeze(123); // 123
const res = Object.freeze("123"); // '123'

const arr = [1, 2, 3];
Object.freeze(arr);
arr.push(4); // 报错-冻结了

// 深度递归
Object.deepFreeze = function (o) {
    // Object,keys() 和 Object.getOwnPropertyNames()区别
    var _key = Object.getOwnPropertyNames(o);
    if (_key.length) {
        _key.forEach(function (k) {
            var _value = o[k];
            if (typeof _value === "object" && _value !== null) {
                Object.deepFreeze(_value);
            }
        });
    }
    return Object.freeze(o); // 每次递归冻结一次
};

var a = {
    b: {
        c: 3,
    },
};

Object.deepFreeze(a);
