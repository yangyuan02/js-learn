/**
 *  在数组末尾插入元素
 *  let numbers = [0,1,2,3]
 *  numbers.length 是最后一个空位
 *  numbers[numbers.length] = 4
 *  numbers[numbers.length-1] // 4
 */

/**
 * 单文件扩展原型
 */
declare interface Array<T> {
    insterFirstPosition<T>(value:T):number
    removeFisrtPosition<T>():T
}
// https://blog.csdn.net/ws9029/article/details/114630423
// 抽象类和接口的区别
/**
 * 抽象类
 */
// abstract class ArrayUitlsShape extends Array {
//     abstract insterFirstPosition<T>(value:T):number
// }

interface ArrayUitlsShape{
    insterFirstPosition<T>(value:T):number
    removeFisrtPosition<T>():T
}

/**
 * 工具方法实现
 */
class ArrayUitls extends Array implements ArrayUitlsShape{
    /**
     * @description 模拟unshift
     * @param value 
     * @returns 新数组的长度
     */
    public insterFirstPosition <T>(value:T):number {
        for (let i = this.length; i >=0; i--) {
            this[i] = this[i-1]
        }
        this[0] = value;
        return this.length;
    }
    private reIndex<T>(array:T[]){
        const newArray = [];
        for (let i = 0; i < array.length; i++) {
            if (array[i] !== undefined) {
                newArray.push(array[i])
            }
        }
        return newArray
    }
    /**
     * @description 模拟shift
     * @returns 被删除的值
     */
    public removeFisrtPosition<T>():T | undefined{
        const oldArray = JSON.parse(JSON.stringify(this))
        for (let i = 0; i < this.length; i++) {
            this[i] = this[i+1]
        }
        this.reIndex(this)
        return oldArray[0]
    }
}

const a =['1', 2].removeFisrtPosition()