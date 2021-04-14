// https://juejin.cn/post/6844903444784873479

// 函数劫持，顾名思义，即在一个函数运行之前把它劫持下来，添加我们想要的功能。
// 当这个函数实际运行的时候，它已经不是原本的函数了，而是带上了被我们添加上去的功能。
// 这也是我们常见的钩子函数的原理之一。

let warn = alert
window.alert = (t) => {
    if (confirm('How are you?')) warn(t)
}

alert('Help me...!!!')

// 封装一个通用函数
const hijack = (obj, method, fun) => {
    let orig = obj[method]
    obj[method] = fun(orig)
}

hijack(window, 'confirm', (orig) => {
    return (text) => {
        alert('HELP ME PLZ!!!')
        orig.call(this, text)
    }
})

confirm('ARE YOU OK?')

  // confirm('OK?')