// jq
$("selector")
//native
document.querySelectorAll("selector");
document.querySelectorAll(".class");
document.querySelectorAll("#id");

// jq
$(".class")
//native
document.querySelectorAll(".class");
//or
document.getElementsByClassName("class");

//jq
$("#id");
//native
document.querySelector("#id");
//or
document.getElementById("id");

//jq
$("a[target=_blank]");
//native
document.querySelectorAll("a[target=_blank]");

// jq
$el.find("li");
// native
el.querySelectorAll("li");

// 兄弟及上下元素
// jq
$el.siblings();
// native
[...el.parentNode.children].filter(child => {
    child !== el;
})
// or
Array.from(el.parentNode.children).filter(child => {
    child !== el;
})
// or
Array.prototype.filter(el.parentNode.children,child=>{
    child !== el;
})

// 上一个元素
// jq
$el.prev()
// native
el.previousElementSibling;

// 下一个元素
// jq
$el.next()
// native
el.nextElementSibling;

// jq
$el.attr("foo");
//native
$el.getAttribute("foo");
// jq
$el.attr("foo","bar")
// native
$el.setAttribute("foo","bar");

// jq
$el.data("foo");
// native
el.getAttribute("data-foo")
// or
el.dataset("foo");

$el.css("color");
// native
const win = el.ownerDocument.defaultView;
win.getComputedStyle(el, null).color;

// jq
$el.css({color:"#ff0011"});
// native
el.style.color = '#ff0011';

// jq
$el.addClass(className);
// native
el.classList.add(className);

// jq
$el.removeClass(className);
// native
el.classList.remove(className);

// jq
$el.hasClass(className);
// native
el.classList.contains(className);

// jq
$el.toggleClass(className);
// native
el.classList.toggle(className);

// window height
$(window).height();

// 含 scrollbar
window.document.documentElement.clientHeight;

// 不含 scrollbar，与 jQuery 行为一致
window.innerHeight;

// jq
$(window).height();
// native
const body = document.body;
const html = document.documentElement;
const height = Math.max(body.offsetHeight,body.scrollHeight,html.clientHeight,html.offsetHeight,html.scrollHeight);

// jQuery
$el.height();

// Native
function getHeight(el) {
  const styles = this.getComputedStyle(el);
  const height = el.offsetHeight;
  const borderTopWidth = parseFloat(styles.borderTopWidth);
  const borderBottomWidth = parseFloat(styles.borderBottomWidth);
  const paddingTop = parseFloat(styles.paddingTop);
  const paddingBottom = parseFloat(styles.paddingBottom);
  return height - borderBottomWidth - borderTopWidth - paddingTop - paddingBottom;
}

// 精确到整数（border-box 时为 height - border 值，content-box 时为 height + padding 值）
el.clientHeight;

// 精确到小数（border-box 时为 height 值，content-box 时为 height + padding + border 值）
el.getBoundingClientRect().height;

// Position & offset
// jq
$el.position()
// naitve
{left:el.offsetLeft,top:offsetTop};

// jq
$el.offset();
// native
function getOffset(el) {
    const box = el.getBoundingClientRect();
    return {
        top: box.top + window.pageYOffset - document.documentElement.clientTop,
        left: box.top + window.pageXOffset - document.documentElement.clientLeft
    }
}

// scroll Top
// jq
$(window).scrollTop()
(window.document && document.documentElement.scrollTop) || document.body.scrollTop;

// jq
$el.remove()
// native
el.parentNode.removeChild(el);

// jq
$el.text()
// native
el.textContent;

// jq
$el.text(string);
// native
el.textContent = string;

// jq
el.html(htmlString);
// native
el.innerHTML = htmlString;

// jq
$el.append("<div id='container'>hello</div>");

//native
el.appendChild(newEL)

// jQuery
$el.prepend("<div id='container'>hello</div>");

// Native (HTML string)
el.insertAdjacentHTML('afterbegin', '<div id="container">Hello World</div>');

// Native (Element)
el.insertBefore(newEl, el.firstChild);

// jQuery
$newEl.insertBefore(queryString);

// Native (HTML string)
el.insertAdjacentHTML('beforebegin ', '<div id="container">Hello World</div>');

// Native (Element)
const el = document.querySelector(selector);
if (el.parentNode) {
  el.parentNode.insertBefore(newEl, el);
}

// jQuery
$newEl.insertAfter(queryString);

// Native (HTML string)
el.insertAdjacentHTML('afterend', '<div id="container">Hello World</div>');

// Native (Element)
const el = document.querySelector(selector);
if (el.parentNode) {
  el.parentNode.insertBefore(newEl, el.nextSibling);
}

// jq
$el.is(selector);
// native
el.matches(selector);

// jq
$el.clone()
// native
el.cloneNode() //深拷贝添加参数true

// jq
$el.empty()
// native
el.innerHTMl = ''

// jq
$(document).ready(eventHandler);
// native
if (document.readyState !== 'loading') {
    eventHandler()
} else {
    document.addEventListener("DOMContentLocaded",eventHandler);
}

// jq
$el.on(eventName,eventHandler);
// native
el.addEventListener(eventName,eventHandler);

// jq
$(el).trigger('custom-event',{key1:'data'})
// native
if (window.CustomEvent) {
    const event = new CustomEvent('custom-event', {datail: {key1:'data'}})
} else {
    const event = document.createEvent('CustomEvent');
    event.initCustomEvent('custom-event',true,true,{key1:'data'})
}
el.dispatchEvent(event);

// jq
$.isArray(range);
// native
Array.isArray(range)

$.isWindow(obj);
// native
function isWindow(obj) {
    return obj !== null && obj !== undefined && obj.window
}

// jq
$.inArray(item, array)
// native
array.indexOf(item) > -1;
array.includes(item);

// jq
$.isNumeric(item);
// native
function isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n)
}

// jq
$.isFunction(itme);
// native
function isFunction(itme) {
    if (typeof itme === 'function') {
        return true;
    }
    var type = Object.prototype.toString(itme);
    return type === '[object Function]' || type === '[object GeneratorFunction]'
}

// jq
$.isEmptyObject(obj);
// native
function isEmptyObject(obj) {
    return Object.keys(obj).length === 0;
}

// jq
$.trim()
// native
string.trim()

// jq
$.map(array,(value,index) => {

})
//native
array.map((value,index) => {

})

// jq
$.proxy(fn,context);
// native
fn.bind(context)

// jq
$.makeArray(arrayLike);
// native
Array.prototype.slice.call(arrayLike)
Array.from(arrayLike);

// jQuery
$el.show();
$el.hide();

// Native
// 更多 show 方法的细节详见 https://github.com/oneuijs/oui-dom-utils/blob/master/src/index.js#L363
el.style.display = ''|'inline'|'inline-block'|'inline-table'|'block';
el.style.display = 'none';

// jQuery
$el.toggle();

// Native
if (el.ownerDocument.defaultView.getComputedStyle(el, null).display === 'none') {
  el.style.display = ''|'inline'|'inline-block'|'inline-table'|'block';
} else {
  el.style.display = 'none';
}
// jq
$el.fadeIn(3000)
el.style.transition = 'opacity 3s'
el.style.opacity = '1';













