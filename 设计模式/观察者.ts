// 观察者
class Observer {
    public name: string;
    public fn: (state: string) => void;
    constructor(name: string, fn: (state: string) => void) {
        this.name = name;
        this.fn = fn;
    }
}

// 被观察者
class Subject {
    private state: string;
    private observers: Observer[];
    constructor(state: string) {
        // 初始状态
        this.state = state;
        this.observers = [];
    }
    // 设置状态
    setState(state: string) {
        this.state = state;
        // 通知观察者
        this.observers.forEach((item: Observer) => {
            item.fn(this.state);
        });
    }
    // 新增观察者
    addObserver(obs: Observer) {
        // 过滤掉已经存在的-去重
        this.observers = this.observers.filter(
            (item: Observer) => item !== obs
        );
        this.observers.push(obs);
    }
    // 删除观察者
    removeObserver(obs: Observer) {
        this.observers = this.observers.filter(
            (item: Observer) => item !== obs
        );
    }
}
// 创建观察者
const xiaozhang: Observer = new Observer("校长", (state) => {
    console.log(`因为${state},校长`);
});
const laoshi: Observer = new Observer("老师", (state) => {
    console.log(`因为${state},老师`);
});

//创建被观察者
const xiaoming: Subject = new Subject("学习"); // 初始状态
xiaoming.addObserver(xiaozhang);
xiaoming.addObserver(laoshi);

xiaoming.setState("玩游戏");
