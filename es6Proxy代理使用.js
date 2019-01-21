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


// new Proxy构建表单校验器

function validator(target, validator, errorMsg) {
    return new Proxy(target, {
        _validator: validator,
        set(target, key, value, proxy) {
            let errMsg = errorMsg;
            if (value) {
                alert(`${errMsg[key]}不能为空`)
                return target[key] = false;
            }
            let va = this._validator[key]
            if (!!va(value)) {
                return Reflect.set(target, key, value, proxy);
            } else {
                alert(`${errMsg[key]}格式不正确`)
                return target[key] = false;
            }
        }
    })
}

// 负责校验的逻辑代码

const validators = {
    name(value) {
        return value.length > 6;
    },
    password(value) {
        return value.length > 6;
    },
    moblie(value) {
        return /^1(3|5|7|8|9)[0-9]$/.test(value)
    },
    email(value) {
        return /^\w+([+-.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test(value)
    }
}

// 调用逻辑

const errorMsg = {name: '用户名', passwd: '密码', moblie: '手机号码', email: '邮箱地址'}
const vali = validator({}, validators, errorMsg);
let registerForm = document.querySelector("#registerForm");
registerForm.addEventListener('submit', function(){
    let validatorNext = function*() {
        yield vali.name = registerForm.userName.value;
        yield vali.passwd = registerForm.passWord.value;
        yield vali.moblie = registerForm.phoneNumber.value;
        yield vali.email = registerForm.emailAddress.value;
    }
    let validator = validatorNext();
    validator.next();
    !vali.name||validator.next() //上一步的检验通过才执行下一步
    !vali.passwd||validator.next() //上一步的检验通过才执行下一步
    !vali.email||validator.next() //上一步的检验通过才执行下一步
})



