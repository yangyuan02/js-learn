// https://www.cnblogs.com/xianyulaodi/p/5827821.html
//设计模式的一个原则：对修改关闭，对扩展开放的原则；
//单体模式
//划分命名空间便于于都和维护暴露一个入口
const Singleton = {
  artribute: true,
  method1() {},
  method2() {}
};

//工厂模式
var XMLHttpFactory = function() {}; //这是一个简单工厂模式
XMLHttpFactory.createXMLHttp = function() {
  var XMLHttp = null;
  if (window.XMLHttpRequest) {
    XMLHttp = new XMLHttpRequest();
  } else if (window.ActiveXObject) {
    XMLHttp = new ActiveXObject("Microsoft.XMLHTTP");
  }
  return XMLHttp;
}; //XMLHttpFactory.createXMLHttp()这个方法根据当前环境的具体情况返回一个XHR对象。
var AjaxHander = function() {
  var XMLHttp = XMLHttpFactory.createXMLHttp();
};

//单例模式

const single = (function(){
    const unique;
    function getInstance(){
        if(unique===undefined){//惰性单例(https://segmentfault.com/a/1190000012842251)
            unique = new Construct()
        }
        return unique
    }
    function Construct(){
        //生成单例构造函数
    }
    return {
        getInstance 
    }
})()

//发布订阅模式

var pubsub = {};   // 定义发布者

(function (q) {

    var list = [],  //回调函数存放的数组，也就是记录有多少人订阅了我们东西
        subUid = -1;

    // 发布消息,遍历订阅者
    q.publish = function (type, content) {
        // type 为文章类型，content为文章内容
        
        // 如果没有人订阅，直接返回
        if (!list[type]) {

            return false;
        }

        setTimeout(function () {
            var subscribers = list[type],
                len = subscribers ? subscribers.length : 0;

            while (len--) {
                // 将内容注入到订阅者那里
                subscribers[len].func(type, content);
            }
        }, 0);

        return true;

    };
    //订阅方法，由订阅者来执行
    q.subscribe = function (type, func) {
        // 如果之前没有订阅过
        if (!list[type]) {
            list[type] = [];
        }

        // token相当于订阅者的id，这样的话如果退订，我们就可以针对它来知道是谁退订了。
        var token = (++subUid).toString();
        // 每订阅一个，就把它存入到我们的数组中去
        list[type].push({
            token: token,
            func: func
        });
        return token;
    };
    //退订方法
    q.unsubscribe = function (token) {
        for (var m in list) {
            if (list[m]) {
                for (var i = 0, j = list[m].length; i < j; i++) {
                    if (list[m][i].token === token) {
                        list[m].splice(i, 1);
                        return token;
                    }
                }
            }
        }
        return false;
    };

} (pubsub));

//将订阅赋值给一个变量，以便退订
var girlA = pubsub.subscribe('js类的文章', function (type, content) {
    console.log('girlA订阅的'+type + ": 内容内容为：" + content);
});
var girlB = pubsub.subscribe('js类的文章', function (type, content) {
    console.log('girlB订阅的'+type + ": 内容内容为：" + content);
});
var girlC = pubsub.subscribe('js类的文章', function (type, content) {
    console.log('girlC订阅的'+type + ": 内容内容为：" + content);
});

//发布通知
pubsub.publish('js类的文章', '关于js的内容');  
// 输出：
// girlC订阅的js类的文章: 内容内容为：关于js的内容
// test3.html:78 girlB订阅的js类的文章: 内容内容为：关于js的内容
// test3.html:75 girlA订阅的js类的文章: 内容内容为：关于js的内容


//girlA退订了关于js类的文章 
setTimeout(function () {
    pubsub.unsubscribe(girlA);
}, 0);

//再发布一次，验证一下是否还能够输出信息
pubsub.publish('js类的文章', "关于js的第二篇文章");
// 输出：
// girlB订阅的js类的文章: 内容内容为：关于js的第二篇文章
// girlC订阅的js类的文章: 内容内容为：关于js的第二篇文章

//策略模式
//策略模式指的是定义一些列的算法，把他们一个个封装起来，
//目的就是将算法的使用与算法的实现分离开来。说白了就是以前要很多判断的写法，现在把判断里面的内容抽离开来，变成一个个小的个体。
function Price(personType,price){
    if(personType==='vip'){
        return price * 0.5
    }else if(personType==='old'){
        return price *0.3
    }else{
        return price//
    }
}

//改写为策略模式
//，比如if...else 或者 switch使用
//https://juejin.im/entry/59e565f35188250989512689
function VipPrice(){
    this.discount = 0.5;
}

VipPrice.prototype.getPrice = function(price){
    return price * this.discount;
}

function OldPrice(){
    this.discount = 0.3;
}

OldPrice.prototype.getPrice = function(price){
    return price * this.discount;
}
function Price(){
    this.discount = 1;
}
Price.prototype.getPrice = function(price){
    return price
}
function Context(){
    this.name = '';
    this.strategy = null;
    this.price = 0;
}
Context.prototype.set = function(name,strategy,price){
    this.name = name;
    this.strategy = strategy;
    this.price = price;
}
Context.prototype.getResult = function(){
    console.log(`${this.name}的结账价格为${this.strategy.getPrice(this.price)}`)
}
const context = new Context()
const vip = new VipPrice()
context.set('vip客户',vip,200)
context.getResult()
const old = new OldPrice()
context.set('老客户',old,200)
context.getResult()

//应用场景：
//模板模式主要应用在一些代码刚开要一次性实现不变的部分。但是将来页面有修改，需要更改业务逻辑的部分或者重新添加新业务的情况。主要是通过子类来改写父类的情
//况，其他不需要改变的部分继承父类。
var Interview = function(){};
// 笔试
Interview.prototype.writtenTest = function(){
    console.log("这里是前端笔试题");
};
// 技术面试
Interview.prototype.technicalInterview = function(){
    console.log("这里是技术面试");
}; 
// 领导面试
Interview.prototype.leader = function(){
    console.log("领导面试");
};
// 领导面试
Interview.prototype.HR = function(){
    console.log("HR面试");
};
// 等通知
Interview.prototype.waitNotice = function(){
    console.log("等通知啊，不知道过了没有哦");
};
// 代码初始化
Interview.prototype.init = function(){
    this.writtenTest();
    this.technicalInterview();
    this.leader();
    this.HR();
    this.waitNotice();
};

// 阿里巴巴的笔试和技术面不同，重写父类方法，其他继承父类方法。
var AliInterview = function(){};
AliInterview.prototype = new Interview();

// 子类重写方法 实现自己的业务逻辑
AliInterview.prototype.writtenTest = function(){
    console.log("阿里的技术题就是难啊");
}
AliInterview.prototype.technicalInterview = function(){
    console.log("阿里的技术面就是叼啊");
}
var AliInterview = new AliInterview();
AliInterview.init();

// 阿里的技术题就是难啊
// 阿里的技术面就是叼啊
// 领导面试
// HR面试
// 等通知啊，不知道过了没有哦


// 代理模式
const fillOut = function(lateDate){
    this.lateDate = lateDate;
}
const bigBoss = function(fillOut){
    this.state = function(isSuccess){
        console.log(`忘记打卡的日期${fillOut.lateDate}状态${isSuccess}`)
    }
}
const proxyAssis = function(fillOut){
    this.state = function(isSuccess){
        (new bigBoss(fillOut)).state(isSuccess)
    }
}
//调用
const proxyAssis = new proxyAssis(new fillOut('2018-11-20'))
proxyAssis.state('打卡成功')

//应用
var myImage = (function(){
    var imgNode = document.createElement("img");
    document.body.appendChild(imgNode);
    return function(src){
        imgNode.src = src; 
    }
})();
// 代理模式
var ProxyImage = (function(){
    var img = new Image();
    img.onload = function(){
        myImage(this.src);
    };
    return function(src) {
                // 占位图片loading
                myImage("http://img.lanrentuku.com/img/allimg/1212/5-121204193Q9-50.gif");
        img.src = src;
    }
})();
// 调用方式

ProxyImage("https://img.alicdn.com/tps/i4/TB1b_neLXXXXXcoXFXXc8PZ9XXX-130-200.png"); // 真实要展示的图片