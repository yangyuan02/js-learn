// 注册一个事件
var myEvent = new CustomEvent("mountMicroAppRoutes", {
    detail: { app: "cs", routes },
});
window.dispatchEvent(myEvent);

// 监测一个事件
window.addEventListener("mountMicroAppRoutes", (event) => {
    const microAppRoutes = event.detail.routes;
    const app = event.detail.app;
    this.app = `/${app}`;
    this.routers = microAppRoutes[0].children;
});

// 达到发布订阅，数据通信
