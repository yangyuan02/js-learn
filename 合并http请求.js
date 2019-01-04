var synchronousFile = function (id) {
    console.log('开始同步文件,id为:' + id)
}
var proxySynchronousFile = (function(){
    var cache = []; // 保存一段时间内需要的同步id
    timer = null;
    return function (id) {
        cache.push(id);
        if (timer) {
            return ; //保证不会覆盖已经启动的定时器
        }
        timer = setTimeout(function(){
            synchronousFile(cache.join(','))
            clearInterval(timer)
            timer = null;
            cache = [];//清空id集合
        },2000)
    }
})()


var checkbox = document.getElementsByName('input');
for(var i = 0,c; c = checkbox[i++];) {
    c.onclick = function() {
        if (this.checked) {
            proxySynchronousFile(this.id)
        }
    }
}