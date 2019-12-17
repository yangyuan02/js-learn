//类型断言 ===>可以手动指定一个值的类型
//语法<类型>值 || 值as类型
// function getLength(something: string | number): number {
//     return something.length;  //error不存在公共属性或方法
// };

// function getLength(something: string | number): number {
//     if (something.length) {
//         return something.length; //error
//     } else {
//         return something.toString().length;
//     };
// };

//此时我们可以用断言
// function getLength(something: string | number): number {
//     if((<string>something).length) {
//         return (<string>something).length;
//     } else {
//         return something.toString().length;
//     }
// };

// function toBoolean(something: string | number): boolean {
//     return <boolean>something;//error 断言得是上面函数中的其中一种
// };