/**
 * 1.createDocumentFragmen()方法,是用来创建一个虚拟的节点对象，或者说，是用来创建文档碎片节点，它可以包含各种类型的节点，在创建之初是空的
 * 2.createDocumentFragmen节点不属于文档树，继承的parentNode属性总是Null，它是一个很实用的特点，当请求吧一个createDocumentFragmen
 * 节点树插入文档时，插入的createDocumentFragmen自身，而是它的所有子孙节点，即插入的是括号里的节点，这个特性使得createDocumentFragmen成了占位符，
 * 暂存放那些一次插入文档的节点，它还有利于实现文档的剪切，复制，粘贴操作
 * 3.另外，当需要添加多个dom树时，如果将这些元素添加到createDocumentFragmen中，再统一将createDocumentFragmen添加页面中会减少页面重新渲染次数，效率明显提示
 */

/**
 * requresAnimationFrame
 * requresAnimationFrame比起setTime,setinterval的优势主要有2点
 * 1.requresAnimationFrame会把每一帧中的所有dom树操作集中起来，再一次重绘或回流中就完成，并且重绘或回流的时间间隔紧紧跟随者浏览器刷新频率，一般每秒60帧
 */

// 插入十万条数据
const total = 100000;
// 每次插入20条数据
const once = 20;
// 插入的数据需要的次数
const loopCount = Math.ceil(total / once);
// 渲染的次数
let countRender = 0;
// 获取插入的父节点
const ul = document.querySelector("ul");

function add() {
    // 创建虚拟节点
    const fragment = document.createDocumentFragment();
    for (let i = 0; i < once; i++) {
        const li = document.createElement("li");
        li.innerHTML = Math.floor(Math.random() * 100000);
        fragment.appendChild(li);
    }
    ul.appendChild(fragment);
    countRender++;
    //递归
    loop();
}

function loop() {
    if (countRender < loopCount) {
        requestAnimationFrame(add);
    }
}

loop();
