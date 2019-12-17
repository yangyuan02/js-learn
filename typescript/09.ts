//泛型
// function creactArray(length: number, value: any): Array<any> {
//     let result = [];
//     for(let i = 0; i < length; i++) {
//         result[i] = value;
//     }
//     return result;
// };
// creactArray(3, 'x')//['x', 'x', 'x']

function creactArray<T>(length: number, value: any): Array<T> {
    let result = [];
    for(let i = 0; i < length; i++) {
        result[i] = value;
    }
    return result;
};
creactArray<string>(3, 'x')// ['x', 'x', 'x'] //指定数组中的每一项为string

//多个类型参数
function swap<T, U>(tuple: [T, U]):[U, T] {
    return [tuple[1], tuple[0]]
};
swap([7, 'seven'])//['seven', 7] //交换输入的位置

//泛型约束
// function loggingIdentity<T>(arg: T): T {
//     console.log(arg.length)//error
//     return arg;
// }
interface Lengthwise {
    length: number
}
function loggingIdentity<T extends Lengthwise>(arg: T): T {
    console.log(arg.length);
    return arg;
}