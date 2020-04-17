/*
 * @Author: yangyuan
 * @Date: 2020-03-23 14:44:51
 * @Email: 1367511704@qq.com
 * @LastEditTime: 2020-04-17 11:11:30
 * @Description:
 */

class Mvvm {
    constructor(options) {
        const { el, data } = options;
        this.$el = el;
        this.$data = data;
        this.vm = this;
        new Observer(this.$data);
        new Compiler(this.vm);
    }
}

class Observer {
    // 数据的劫持
    constructor(data) {
        this.observer(data);
    }
    observer(data) {
        if (!data || typeof data !== "object") {
            return;
        }
        for (let key in data) {
            this.defineReactiveProps(data, key, data[key]);
        }
    }
    defineReactiveProps(data, key, value) {
        this.observer(value); // 深层次的递归调用
        Object.defineProperty(data, key, {
            set(newValue) {
                if (newValue === value) {
                    // 值相同节省开销
                    return;
                }
                value = newValue;
                console.log("set");
            },
            get() {
                console.log("get");
                return value;
            },
        });
    }
}

class Dep {
    constructor() {
        this.subs = [];
    }
    addSub(watcher) {
        this.subs.push(watcher);
    }
    notify() {
        this.subs.forEach((watcher) => {
            watcher.update();
        });
    }
}

class Watcher {
    // 一些实列 {{msg}} {{web}}
    constructor(vm, key, cb) {
        this.vm = vm;
        this.key = key;
        this.cb = cb;
        this.oldVal = this.get();
    }
    get() {
        Dep.target = this;
        let oldVal = this.vm.$data[this.key];
        Dep.target = null;
        return oldVal;
    }
    update() {
        let newVal = this.vm.$data[this.key];
        // 老的值和新的值不一样的时候需要调用回调函数
        if (this.oldVal !== newVal) {
            this.cb(newVal, this.oldVal);
        }
    }
}

class Compiler {
    constructor(vm) {
        const { $el } = vm;
        // 获得app节点
        this.el = document.getElementById($el);
        //获得app节点下面的内容,并把它们暂时存在fragment节点中//内存中文档碎片
        let fragment = this.getFragment(this.el);
        //编译fragment节点里面的内容
        this.Compiler(fragment);
        //把fragment添加到app节点中
        this.el.appendChild(fragment);
    }
    getFragment(node) {
        let firstChild;
        let fragment = document.createDocumentFragment();
        while ((firstChild = node.firstChild)) {
            // 递归取节点
            fragment.appendChild(firstChild);
        }
        return fragment;
    }
    compilerElement(node) {
        // 编译元素节点
        let attrs = node.attributes;
        if (attr.length) {
            let vModel = attrs.getNamedItem("v-model");
            if (vModel) {
                let expr = vModel.value; // {{msg}}
                Utils.model(node, expr, this.vm);
            }
        }
    }
    compilerText(node) {
        // 编译文本节点
        let exp = /\{\{.*?\}\}/g;
        let text = node.textContent;
        if (exp.test(text)) {
            Utils.text(node, text, this.vm);
        }
    }
    compiler(fragment) {
        let childNodes = fragment.childNodes;
        [...childNodes].forEach((node) => {
            let nodeType = node.nodeType;
            // 编译元素节点的内容
            if (nodeType === 1) {
                this.compilerElement(node);
            }
            // 编译文本节点内容
            if (nodeType === 3) {
                this.compilerText(node);
            }
        });
    }
}
let Utils = {
    getValue(data, expr) {
        return expr.replace(/\{\{(.*?)\}\}/, (...args) => data[args[1]]);
    },
    model(node, expr, vm) {
        let value = this.getValue(vm.$data, expr);
        this.updater.model(node, value);
    },
    text(node, expr, vm) {
        let textUpdater = this.updater.text;
        // {{msg}}22 {{msg}}
        expr.replace(/\{\{(.*?)\}\}/g, (...args) => {
            let cnt = expr.replace(/\{\{(.*?)\}\}/g, (...args2) => {
                // 是否后面又多个表达式这个硬匹配是不对的
                return vm.$data[args2[1]];
            });
            textContent(node, cnt);
        });
    },
    updater: {
        model: (node, value) => {
            node.value = value;
        },
        text: (node, value) => {
            node.textContent = value;
        },
    },
};
/*
    <div id="app">
        <input type="text" v-model="{{msg}}">
        <div>{{msg}}22{{msg}}</div>
        <div>{{web}}</div>
    </div>
*/
let vm = new Mvvm({
    el: "#app",
    data: {
        msg: "ceshi",
        web: "aaa",
    },
});
