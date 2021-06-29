// 栈是一种遵循后进先出LIFO原则的有序集合，新添加或待删除的元素都保存在栈的一端
// 称做栈顶，另一端就叫做栈底，在栈里，新元素都靠近栈顶，旧元素都接近栈底(如一摞书)
// 应用场景撤销历史记录
abstract class StackShape<T> {
    public abstract push(element:T)
    public abstract pop():T
    public abstract peek():T
    public abstract isEmpty():boolean
    public abstract clear()
    public abstract size():number
    public abstract toString():string
}
// 数组实现
class Stack <T> extends StackShape<T>{
    private items :T[]

    constructor() {
        super()
        this.items = []
    }
    /**
     * @description 入栈
     * @param {T} element 要入栈的元素 
     */
    push(element:T){
        this.items.push(element)
    }
    /**
     * @description 出栈
     * @return {T} 返回出栈的元素
     */
    pop():T {
        return this.items.pop()
    }
    /**
     * @description 返回栈顶的元素
     * @return {T} 返回出栈的元素
     */
    peek():T {
        return this.items[this.items.length - 1];
    }
    /**
     * @description 返回栈是否为空
     * @returns {Boolean}
     */
    isEmpty():boolean {
        return this.items.length === 0;
    }
    /**
     * @description 清空栈
     */
    clear() {
        this.items = []
    }
    /**
     * @description 返回栈里的元素个数
     * @return {Number}
     */
    size():number {
        return this.items.length;
    }
    toString():string {
        return this.items.toString();
    }
}

// Map 实现，在使用数组时，大部分方法的时间复杂度是 O(n)。找寻某个元素时，在最坏的情况下需要迭代数组的所有位置，所以如果直接使用字典 Map 来存储所有的栈元素能获得更好的性能。

class StackMap<T> {
    private items : Map<number, T>

    constructor() {
        this.items = new Map()
    }
    push(element:T) {
        this.items.set(this.items.size, element)
    }
    pop(): T {
        if (this.isEmpty()) {
          return undefined;
        }
        const result = this.items.get(this.items.size - 1);
        this.items.delete(this.items.size - 1);
        return result;
    }
    isEmpty(): boolean {
        return this.items.size === 0;
    }
    size(): number {
        return this.items.size;
    }
    clear() {
        this.items.clear();
    }
    toString(): string {
        if (this.isEmpty()) {
          return '';
        }
        let result: string = '';
        this.items.forEach((value, key) => {
          result = `${result}${key === 0 ? '' : ', '}${value}`;
        });
        return result;
    }
}

