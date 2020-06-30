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
function saveToCache(req, res) {
    return caches.open(CACHE_NAME).then((cache) => cache.put(req, res));
}

function fetchAndCache(req) {
    return fetch(req).then(function (res) {
        // res是流,必须复制一份
        saveToCache(req, res.clone());
        return res;
    });
}

// 安装
this.addEventListener("install", function (event) {
    event.waitUntil(precache());
});
// 激活
this.addEventListener("activated", function (event) {
    event.waitUntil(clearCache());
});

this.addEventListener("fetch", function (event) {
    // console.log("request", event.request.url);
    let url = new URL(event.request);
    // 不是同源资源的直接返回,原样直接获取资源
    if (url.origin !== this.origin) {
        return;
    }
    // 有网的情况下,先获取最新资源然后存在本地
    if (event.request.url.includes("/api/movies")) {
        event.respondWith(
            fetchAndCache(event.request).catch(function () {
                // 如果失败了,去从缓存中获取
                return cache.match(event.request);
            })
        );
        return;
    }

    event.respondWith(
        fetch(event.request).catch(function () {
            // 网络请求失败
            return caches.match(event.request); // 缓存中读取
        })
    );
});
