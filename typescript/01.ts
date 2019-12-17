function sayHello(parson: string) {
    return 'Hello,' + parson;
}
let user = 'Tom';
// let user = [0,1,2];
console.log(sayHello(user));

//原始数据类型
//Number/Boolean/String/null/undefined/Symbol

let isDone: boolean = false;

// let createdByNewBoolean: boolean = new Boolean(1);
// let createdByNewBoolean: Boolean = new Boolean(1);
let decLiteral: number = 6;
let myName: string = 'Tom';
let sentence: string = `Hello,${myName}`;

//空值
function alertName():void {
    alert('My name is Tom')
}

let unusable: void = undefined;//声明一个空值的变量没有意义

let u: undefined = undefined;
let n: null = null;

//和void的区别是 undefined/null/可以复制给任意类型void不能复制给其他类型变量

//任意值

// let myFavoriteNumber: string = 'seven';
// myFavoriteNumber = 7; //报错

// let myFavoriteNumber: any = 'seven';
// myFavoriteNumber = 7;//any类型可以在复制过程改变类型

//任意值熟悉和方法
// let anyThing: any = 'hello';
// console.log(anyThing.myName);
// console.log(anyThing.myName.firstName);
//调用
let anyThing: any = 'tom';
anyThing.setName('jerry');
anyThing.setName('jerry').sayHello();
anyThing.myName.setFistName('cat');

let something;//没有指定类型的===> let something: any;
something = 'seven';
something = 7;
something.setName('tom')

//类型推论
// let myFavoriteNumber = 'seven';
// myFavoriteNumber = 7;
//等价于
// let myFavoriteNumber: string = 'seven';
// myFavoriteNumber = 7
//联合类型===>取值可以多种类型中的一种
// let myFavoriteNumber: string | number; //两种中的一个不能是其他类型
// myFavoriteNumber = 'seven';
// myFavoriteNumber = 7;

// function getLength(something: string | number): number {
//     return something.length; //error length/不是string/和number共同属性
// }

function getString(something: string | number): string {
    return something.toString(); //toString() string number共同的方法
}

// let myFavoriteNumber: string | number;
// myFavoriteNumber = 'seven';
// console.log(myFavoriteNumber.length);
// myFavoriteNumber = 7;
// console.log(myFavoriteNumber.length);//error


// interface Person {//定义接口首字母大写分号
//     name:string;
//     age:number;
// };
// let tom: Person = {//定义变量它的类型是Person这样就约束了tom形状必须和接口Person一直
//     name: 'tom',
//     age: 25
// };

// let tom: Person = {//error
//     name:'tom'
// }

// let tom: Person = { //error 多一个少一个都不行必须一直
//     name: 'tom',
//     age: 7,
//     gender: 'male'
// }

//有时候我们希望不要完全匹配一个形状，那么可以用可选属性
// interface Person {
//     name: string;
//     age?: number;
// }

// let tom: Person = {
//     name: 'tom',
// }

//任意属性
//有时候我们希望一个接口允许有任意的属性
// interface Person {
//     name: string;
//     age?: number;
//     [propName: string]: any; //定义任意属性取值为sting
// }

//warning 一旦定义了任意属性，那么确定属性和可选属性是它的子集
// let tom: Person = {
//     name: 'tom',
//     gender: 'male'
// }

// interface Person {
//     name: string;
//     age?: number;
//     [propName: string]: string //error必须是子集
// }

//只读属性===>创建的时候被赋值

// interface Person {
//     readonly id: number;
//     name: string;
//     age?: number;
//     [propName: string]: any
// }

// let tom: Person = {
//     id: 11,
//     name: 'tom',
//     gender: 'male'
// }
// tom.id = 9527//error 被readonly修饰过了后面赋值会报错

// interface Person {
//     readonly id: number;
//     name: string;
//     age?: number;
//     [propName: string]: any;
// }
// let tom :Person = {
//     name: 'tom',
//     gender: 'male',
//     //id:1, 应该在这里初始化赋值
// }
// tom.id = 1//后面赋值报错应该在对象初始化赋值

//数组类型===>定义比较灵活
// [类型+方括号]表示法
// let fibonacci: number[] = [1,2,3];
// let fibonacci:number[] = [1,2,3,'1']//error
// let fibonacci: number[] = [1,2,3];
// fibonacci.push('8');//error

//数组泛型 Array<elemType>
// let fibonacci: Array<number> = [1,2,3,4];

//有接口表示数组
interface NumberArray {
    [index: number]: number;//只要index/类型是number/那么类型必须是number
};
let fibonacci: NumberArray = [1,2,3];

//any在数组的应用

let list: any[] = ['1',1,{age:1}];

//类数组
// function sum() {
//     let args: number[] = arguments;//error success==> let args: IArguments = arguments
// }
