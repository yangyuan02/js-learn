// http缓存优先级高于sw缓存优先级
// from disk cache ----http缓存
// from service ---sw缓存
const CACHE_VERSION = 0; // 版本号

const CACHE_NAME = "cache_v" + CACHE_VERSION; // 版本名称

const CACHE_URLS = [
    "/",
    "/api/movies",
    "/js/main.js",
    "/js/render.js",
    "/js/ui.js",
    "/css/main.css",
    "/img/logo.png",
];

function precache() {
    return caches.open(CACHE_NAME).then(function (cache) {
        return cache.addAll(CACHE_URLS);
    });
}

function clearCache() {
    return caches.keys().then((keys) => {
        keys.forEach((key) => {
            if (key !== CACHE_NAME) {
                caches.delete(key);
            }
        });
    });
}

this.addEventListener("install", function (event) {
    // 安装
    event.waitUntil(precache());
});

this.addEventListener("activated", function (event) {
    // 激活
    event.waitUntil(clearCache());
});

this.addEventListener("fetch", function (event) {
    // console.log("request", event.request.url);
    event.respondWith(
        fetch(event.request).catch(function () {
            // 网络请求失败
            return caches.match(event.request); // 缓存中读取
        })
    );
});
