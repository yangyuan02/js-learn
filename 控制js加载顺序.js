
// http://yijiebuyi.com/blog/2b23b571a0d5c94047f7e9c3150ac25d.html

function loadJs(url) {
    var Script = document.createElement("script");
    Script.setAttribute("scr", url);
    Script.setAttribute("type", "text/javascript");
    document.body.append(Script);
    return Script;
}
loadJs("a.js"); // 异步加载，如果b.js比a.js小，可能b.js比a.js先加载 如果b.js依赖a.js会报错
loadJs("b.js");

function loadJs(url, success) {
    var domScript = document.createElement("script");
    domScript.src = url;
    success = success || function() {};
    domScript.onload = domScript.onreadystatechange = function() {
        if (!this.readyState || 'loaded' === this.readyState || 'complete' === this.readyState) {
            success();
            this.onload = this.onreadystatechange = null;
            this.parentNode.removeChild(this);
        }
        document.getElementsByTagName('head')[0].appendChild(domScript);
    }
}

loadJs(getUrl("a.js"),function(){
    loadJs(getUrl(b.js),function(){
        console.log("a.js","b.js加载完成");
    })
})