//函数类===>定义函数方式---函数声明--函数表达式

// function sum(x, y) {//函数声明
//     return x + y;
// };
// let mySum = function (x, y) {//函数表达式
//     return x + y;
// };

//考虑函数输入输出
// function sum(x: number, y: number): number {
//     return x + y;
// };
// sum(1,2,3);//error===>多余参数|少的参数

//函数表达式
// let mySum = function (x: number, y: number): number { //只是对函数定义了没有对mySum定义
//     return x + y;
// };

let mySum: (x: number, y: number) => number = function(x: number, y: number): number {
    return x + y; // ts中的=>表示函数的定义和es6不一样
};

//接口定义函数形状
// interface SearchFunc {
//     (source: string, subString: string): boolean;
// };
// let mySearch: SearchFunc;
// mySearch = function (source: string, subString: string) {
//     return source.search(subString) !== -1;
// };

//可选参数 //warning 可选参数必须接在参数最后面
// function buildName(firstName: string, lastName?: string) {
//     if (lastName) {
//         return firstName + '' + lastName;
//     } else {
//         return firstName;
//     };
// };
// let tomcat = buildName('tom','cat');
// let tom = buildName('tom');

//参数默认值
function buildName(firstName: string, lastName: string = 'cat') {
    return firstName + '' + lastName;
};
let tomcat = buildName('tom','cat');
let tom = buildName(undefined,'tom');

//剩余参数
// function push(array, ...items) {
//     items.forEach(item => {
//         array.push(item)
//     })
// };
// let a = [];
// push(a,1,2,3);
function push(array: any[], ...items: any[]) {
    items.forEach(item => {
        array.push(item)
    })
};

//重载

// function reverse(x: number | string):number | string {
//     if(typeof x === 'number') {
//         return Number(x.toString().split('').reverse().join())
//     } else if (typeof x === 'string') {
//         return x.split('').reverse().join();
//     }
// };

function reverse(x: number): number;
function reverse(x: string): string;
function reverse(x: number | string): number | string{
    if(typeof x === 'number') {
        return Number(x.toString().split('').reverse().join());
    } else if (typeof x === 'string') {
        return x.split('').reverse().join('');
    }
}
