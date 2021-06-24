/**
 *  在数组末尾插入元素
 *  let numbers = [0,1,2,3]
 *  numbers.length 是最后一个空位
 *  numbers[numbers.length] = 4
 *  numbers[numbers.length-1] // 4
 */

/** 单文件扩展原型 */ 
declare interface Array<T> {
    insterFirstPosition<T>(value:T):number
}

interface ArrayUitlsShape {
    insterFirstPosition<T>(value:T):number
}
class ArrayUitls extends Array implements ArrayUitlsShape{
    /**
     * @description 模拟unshift
     * @param value 
     * @returns 
     */
     public insterFirstPosition <T>(value:T):number {
        for (let i = this.length; i >=0; i--) {
            this[i] = this[i-1]
        }
        this[0] = value;
        return this.length;
    }
}