// 简单来说 Proxy 是对对象设置一个拦截，直接上代码

// http://es6.ruanyifeng.com/#docs/proxy 阮一峰拦截很多属性可以
let obj = {
    attr: 1
};
obj = new Proxy(obj, {
    get: function (target, key, receiver) {
        if (key in target) {
            return target[key];
        };
        return '没有这个值'
    },
    set: function (target, key, receiver) {
        return true;
    }
})
console.log(obj.attr); //输出1
console.log(obj.abc) //输出 '没有这个值'  不会报错

obj.attr = 2;
console.log(obj.attr) //输出1 不能设置对象属性


// step2 对原生的HTMLElement对象拦截
let div = document.querySelector('div');
let divProxy = new Proxy(div, {
    get: function (targe, key, receiver) {
        return traget[key]
    }
})

let div = document.querySelector('div'); // 随便拿一个页面的 div, 对他进行代理

// 第二种代理方法
let divProxy = new Proxy(div, {
  get: function (target, key, receiver) {
    if( !!target[key] && !!target[key].bind) {
        // 使用 bind 绑定 this 指向
        return target[key].bind(target);
    } else {
        return target[key];
    }
  }
});

const target = {};
const handler = {
    get: function(target, key, receiver) {
        return Reflect.get(target, key, receiver)
    },
    set: function(target, key, value, receiver) {
        return Reflect.set(target, key, value, receiver)
    }
}

const proxy = new Proxy(target, handler);  //
console.log(proxy.name)
proxy.name = '大漠';
console.log(proxy.name)
proxy.count++
console.log(proxy.count)




