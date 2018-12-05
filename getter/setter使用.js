// getter 是一种获得属性值的方法，setter是一种设置属性值的方法。
// getter负责查询值，它不带任何参数，
// setter则负责设置键值，值是以参数的形式传递，在他的函数体中，一切的return都是无效的。
// 和普通属性不同的是，存储器属性在只声明了get或set时，对于读和写是两者不可兼得的，当
// 它只拥有了getter方法，那么它仅仅只读，同样的，当它只有setter方法，那么您读到的永远都是undefined。


// 2.怎么定义？
// 有2种办法
// 在对象初始化的时候定义
// 在对象定义后的时候定义

let test = {
    _name: 'Lilei',
    _age: 20,
    get name() {
        return this._name; //注意属性名字和方法名字不要一样
    },
    set name(name) { //这个时候可以做些操作判断拦截
        this._name = name;
    },
    get age() { //只声明了一个get方法 age属性是只读的
        return this._age;
    }
};

test.name //Lilei 不需要加括号调用
test.name = 'aaaa'