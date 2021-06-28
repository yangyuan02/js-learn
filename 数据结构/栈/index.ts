// 栈是一种遵循后进先出LIFO原则的有序集合，新添加或待删除的元素都保存在栈的一端
// 称做栈顶，另一端就叫做栈底，在栈里，新元素都靠近栈顶，旧元素都接近栈底(如一摞书)

abstract class StackShape<T> {
    public abstract push(element:T)
    public abstract pop()
    public abstract peek()
    public abstract isEmpty():boolean
    public abstract clear()
    public abstract size()
}
class Stack <T> extends StackShape<T>{
    private items :T[]

    constructor() {
        super()
        this.items = []
    }
    /**
     * @description 添加一个(或几个新元素到栈顶)
     * @param element 
     * @returns 
     */
    push<S>(element:S){
        this.items.push(element)
    }
    /**
     * @description 移除栈顶的元素,同时返回被移除的元素
     */
    pop() {}
    /**
     * @description 返回栈顶的元素,不对栈做任何修改(该方法不会移除栈顶元素,仅仅返回它)
     */
    peek() {}
    /**
     * @description 如果栈里面没有任何元素就返回true，否则返回false
     * @returns {Boolean}
     */
    isEmpty():boolean {
        return false
    }
    /**
     * @description 移除栈里的所有元素
     */
    clear() {}
    /**
     * @description 返回栈里的元素个数,该方法和数组的length属性很类似
     */
    size() {}
}