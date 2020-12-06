class SnapshotSandbox {
    constructor() {
        this.proxy = window; // window属性
        this.modifyPropsMap = {}; // 记录在window上的修改
        this.active(); // 激活
    }
    active() {
        this.windowSnapshot = {}; // 拍照
        for (const prop in window) {
            if (window.hasOwnProperty(prop)) {
                this.windowSnapshot[prop] = window[prop];
            }
        }
        Object.keys(this.modifyPropsMap).forEach((p) => {
            window[p] = this.modifyPropsMap[p];
        });
    }
    inactive() {
        // 失活
        for (const prop in window) {
            if (window.hasOwnProperty(prop)) {
                if (window[prop] !== this.windowSnapshot[prop]) {
                    this.modifyPropsMap[prop] = window[prop];
                    window[prop] = this.windowSnapshot[prop];
                }
            }
        }
    }
}

let sandbox = new SnapshotSandbox();

((window) => {
    window.a = 1;
    window.b = 2;
    console.log(window.a, window.b);
    sandbox.inactive();
    console.log(window.a, window.b);
    sandbox.active();
    console.log(window.a, window.b);
})(sandbox.proxy);
