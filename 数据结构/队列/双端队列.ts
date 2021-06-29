// 双端队列是一种允许我们同时从前端和后端添加和移除元素的特殊队列
// 在计算机应用中,双端队列是一系列的撤销操作,每当用户在软件中进行
// 了一个操作,该操作会被存在一个双端队列中(就像一个栈),当用户点击
// 撤销按钮时候最先从双端队列中弹出,表示从后面移除,在进行了预定的
// 一定数量的操作后,最先进行的操作会从双端队列中前端移除,用于双端
// 队列同时遵循了先进先出和后进先出原则,可以说它是把队列和栈相结合在一起的数据结构

interface Iitem<T>  {
    [key:number]:T
}

class Dqueue<T> {
    private count: number
    private lowestCount: number
    private items: Iitem<T>
    constructor() {
        this.count = 0;
        this.lowestCount = 0;
        this.items = {}
    }
    /**
     * @description 双端队列后入队列(队列中的enqueue)
     * @param {T} element 
     */
    addBack(element:T) {
        this.items[this.count] = element;
        this.count++;
    }
    /**
     * @description 双端队列前入队列
     * @param {T} element 
     */
    addFront(element:T) {
        if (this.isEmpty()) {
            this.addBack(element)
        } else if (this.lowestCount > 0) {
            this.lowestCount--;
            this.items[this.lowestCount] = element;
        } else {
            for (let i = this.count; i > 0; i--) {
                this.items[i] = this.items[i - 1];
            }
            this.count++;
            this.lowestCount = 0;
            this.items[0] = element;
        }
    }
    /**
     * @description 队列前删除(队列中dequeue)
     * @returns {T}
     */
    removeFront():T {
        if(this.isEmpty()) {
            return undefined
        }
        const result = this.items[this.lowestCount];
        delete this.items[this.lowestCount]
        this.lowestCount++;
        return result
    }
    /** 
     * @description 队列后移除(栈中pop)
     * @returns 
     */
    removeBack():T {
        if(this.isEmpty()) {
            return undefined
        }
        this.count--;
        const result = this.items[this.count];
        delete this.items[this.count]
        return result
    }
    /**
     * @description 队列前第一个元素(队列中peek)
     * @returns {T}
     */
    peekFront():T {
        if (this.isEmpty()) {
            return undefined
        }
        return this.items[this.lowestCount]
    }
    /**
     * @description 队列后第一个元素(队列中peek)
     * @returns {T}
     */
    peekBack():T {
        if(this.isEmpty()) {
            return undefined
        }
        return this.items[this.count - 1]
    }
    /**
     * @description 返回队列是否为空
     * @returns {Boolean}
     */
    isEmpty():boolean {
        return this.count - this.lowestCount === 0;
    }

    /**
     * @description 清空队列
     */
    clear() {
        this.items = {}
        this.count = 0;
        this.lowestCount = 0;
    }

    /**
     * @description 返回队列元素个数
     * @returns {Number}
     */
    size():number {
        return this.count - this.lowestCount
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