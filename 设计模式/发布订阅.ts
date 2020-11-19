type Hander = {
    [key: string]: Function[];
};

class Observer {
    public message: Hander;
    constructor() {
        this.message = {};
    }

    public on(type: string, fn: () => void) {
        if (!this.message[type]) {
            this.message[type] = [];
        }
        this.message[type].push(fn);
    }
    public off(type: string, fn?: () => void) {
        // fn不存在的时候，取消的type类型的所有事件
        if (!fn) {
            delete this.message[type];
            return;
        }
        // 是否存在
        if (!this.message[type]) return;
        // 取消类型为type 且事件为fn的
        this.message[type] = this.message[type].filter(
            (item: Function) => item !== fn
        );
    }
    public emit(type: string) {
        // 是否订阅过
        if (!this.message[type]) return;

        this.message[type].forEach((item: Function) => item());
    }
}

const p = new Observer();

//订阅a
p.on("a", handerA);
p.on("a", handerB);

p.off("a"); // 取消a类型所有事件

p.off("a", handerA); // 取消a类型中,handerA事件

p.emit("a"); // 触发a

function handerA() {
    console.log("a");
}

function handerB() {
    console.log("b");
}
