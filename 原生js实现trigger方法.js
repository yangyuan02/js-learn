/*
 * @Author: yangyuan
 * @Date: 2020-01-15 13:47:42
 * @Email: 1367511704@qq.com
 * @LastEditTime : 2020-01-15 14:05:36
 * @Description:
 */
// https://segmentfault.com/a/1190000019253353
// 首先需要将事件绑定至指定dom节点上

let test = document.createElement("div");
test.id = "test";

test.innerHTML = "测试事件";

document.body.appendChild(test);

test.addEventListener(
    "mousedown",
    () => {
        console.log("Hello jTool");
    },
    false
);

// 触发事件

var myEvent = new Event("mousedown");
test.dispatchEvent(myEvent);

// 为了实现在获取的节点上直接调用.trigger()方法
// 1.为Element增加trigger方法
Element.prototype.trigger = function(eventName) {
    this.dispatchEvent(new Event(eventName));
};

let target = document.querySelector("#test");
target.trigger("mousedown"); // 'Hello jTool';

// 2.为NodeList增加trigger方法
target = document.querySelectorAll("#test");
target.trigger("mousedown"); // uncaught TypeError target.trigger is not a function

// .querySelectorAll获取到的是NodeList实例而非Element
NodeList.prototype.trigger = function(eventName) {
    [].forEach.call(this, function(item, index) {
        item.dispatchEvent(new Event(eventName));
    });
};

target = document.querySelectorAll("#test");
target.trigger("mousedown");
