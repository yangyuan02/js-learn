//枚举
// enum Days {Sun, Mon, Tue, Wed, Thu, Fri, Sat};
// console.log(Days["Sun"]===0)//true
// console.log(Days[0]==="Sun")//true

//手动赋值
enum Days {Sun = 7, Mon = 1, Tue, Wed, Thu, Fri, Sat};
console.log(Days["Sun"] === 7);//true
console.log(Days["Mon"] === 1);//true
console.log(Days["Tue"] === 2)//true 没有手动赋值的接着自动递增
console.log(Days["Sat"] === 6)//true 

//常数项和计算所得项
//典型的计算所得项
// enum Color {Red, Green, Blue = "blue".length};//"blue".length是计算所得项
// enum Color {Red = "red".length, Green, Blue}; //error后面没有手动赋值的初始值报错

//常数枚举
// const enum Directions {
//     Up,
//     Down,
//     Left,
//     Right
// };
// let directions = [Directions.Up, Directions.Down, Directions.Left, Directions.Right];
// const enum Color {Red, Green, Blue = "blue".length}; //error

// 外部枚举 declare enum定义的
declare enum Directions {
    Up,
    Down,
    Left,
    Right
}

