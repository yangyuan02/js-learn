// 队列是遵循先进先出,原则的一组有序的项,队列在尾部添加元素,并从顶部移除元素,最新添加的元素必须排在队列尾部
// 场景电影院排队,自助餐,打印文档
interface Iitem<T>  {
    [key:number]:T
}

abstract class QueueShape<T> {
    public abstract enqueue(element:T)
    public abstract dequeue():T
    public abstract peek():T
    public abstract isEmpty():boolean
    public abstract size():number
    public abstract clear()
    public abstract toString():string
}

class Queue<T> extends QueueShape<T> {
    private count: number
    private lowestCount: number
    private items: Iitem<T>
    constructor () {
        super()
        this.count = 0;
        this.lowestCount = 0;
        this.items = {}
    }
    /**
     * @description 入队列
     * @param {T} element 
     */
    enqueue(element:T){
        this.items[this.count] = element;
        this.count++;
    }
    /**
     * @description 从队列移除元素
     * @returns 
     */
    dequeue():T {
        if(this.isEmpty()) {
            return undefined
        }
        const result = this.items[this.lowestCount];
        delete this.items[this.lowestCount]
        this.lowestCount++;
        return result
    }
    /**
     * @description 查看队列头元素
     */
    peek():T{
        if (this.isEmpty()) {
            return undefined
        }
        return this.items[this.lowestCount]
    }
    /**
     * @description 返回队列是否为空
     * @returns {Boolean}
     */
    isEmpty():boolean {
        return this.count - this.lowestCount === 0;
    }
    /**
     * @description 返回队列元素个数
     * @returns {Number}
     */
    size():number {
        return this.count - this.lowestCount
    }
    /**
     * @description 清空队列
     */
    clear() {
        this.items = {}
        this.count = 0;
        this.lowestCount = 0;
    }

    toString():string {
        if (this.isEmpty()) {
            return ''
        }
        let objString = `${this.items[this.lowestCount]}`;
        for (let i = this.lowestCount + 1; i < this.count; i++) {
            objString = `${objString},${this.items[i]}`
        }
        return objString;
    }
}