//回顾es6中的类用法
// class Animal {
//     constructor(name) {
//         this.name = name; //ts会error
//     }
//     sayHi() {
//         return `My name is ${this.name}`;
//     }
// }
// let a = new Animal('Jack');
// console.log(a.sayHi());

// class Cat extends Animal {
//     constructor(name) {
//         super(name)//调用父类的constructor(name)
//     }
//     sayHi() {
//         return 'Meow,' + super().sayHi()
//     }
// };
// let c = new Cat('Tom');
// console.log(c.sayHi());

//存取器
// class Animal {
//     constructor(name) {
//         this.name = name;
//     }
//     get name() {
//         return "jack";
//     }
//     set name(value) {
//         console.log('setter' + value);
//     }
// };
// let a = new Animal('kitty'); //setter kitty
// a.name = "tom" //setter :tom
// console.log(a.name)//jack

//静态方法 static 不需要实例化直接通过类调用

// class Animal {
//     static isAnimal(a) {
//         return a instanceof Animal;
//     }
// };
// let a = new Animal('jack');
// Animal.isAnimal(a)//true
// a.isAnimal(a) //TypeError a.isAnimal is not a function

// es7提案
// es6中实列属性只能通过构造函数中的this.xxx定义 es7可以在类里面定义
// class Animal {
//     name = 'jack';
//     constructor() {
//         //
//     }
// };
// let a = new Animal();
// console.log(a.name);//jack
// es7可以使用static定义静态属性 es6可以定义静态方法
// class Animal {
//     static num = 42;
//     constructor() {}
// };
// console.log(Animal.num);

// TypeScript中类的写法
// public private protected
// public 修饰的属性或方法是公有的，可以在任何地方访问到默认所有的属性和方法都是public
// private 修饰的属性或方法私有的，不在在声明它的类的外部访问
// protected 修饰的属性或方法是受保护的，它和private类似，区别是它在子类中也是允许被访问的
// eg:
// class Animal {
//     public name;
//     public constructor(name) {
//         this.name = name;
//     };
// };
// let a = new Animal('jack');
// console.log(a.name);//jack
// a.name = 'tom';
// console.log(a.name) //tom
//期望有点属性是无法访问的的可以用private
// class Animal {
//     private name;
//     public constructor(name) {
//         this.name = name;
//     };
// };
// let a = new Animal('jack');
// console.log(a.name);//error
// a.name = 'tom';//error

// class Animal {
//     private name;
//     public constructor(name) {
//         this.name = name;
//     };
// };

// class Cat extends Animal {
//     constructor(name) {//private修饰的属性或方法子类不允许访问
//         super(name);
//         console.log(this.name);//error
//     }
// };

// class Animal {
//     protected name;
//     public constructor(name) {
//         this.name = name;
//     };
// };

// class Cat extends Animal {//protected修饰的子类可以访问
//     constructor(name) {
//         super(name);
//         console.log(this.name)
//     }
// }

//抽象类abstract用于定义抽象类和其中抽象方法
//抽象类不允许被实例化的
// abstract class Animal { //抽象类
//     public name;
//     public constructor(name) {
//         this.name = name;
//     };
//     public abstract sayHi();//抽象方法
// };
// let a = new Animal('jack');//error

// abstract class Animal {
//     public name;
//     public constructor(name) {
//         this.name = name;
//     }
//     public abstract sayHi()
// };
// class Cat extends Animal {//error/子类必须要有父类的/Animal/中的sayHi方法
//     public eat() {
//         console.log(`${this.name} is eating`)
//     }
// }
// let cat = new cat('tom');

//正确的写法
// abstract class Animal {
//     public name
//     public constructor(name) {
//         this.name = name;
//     };
//     public abstract sayHi();
// };
// class Cat extends Animal {
//     public sayHi() {
//         console.log(`meow, my name is ${this.name}`)
//     }
// };
// let cat = new Cat('tom');

//类的类型判断
// class Animal {
//     name: string;
//     constructor(name: string) {
//         this.name = name;
//     }
//     sayHi(): string {
//         return `my name is ${this.name}`
//     }
// };
// let a: Animal = new Animal('jack');
// console.log(a.sayHi())

//类与接口

interface Alarm {
    alert();
};
class Door {}
class SecurityDoor extends Door implements Alarm {
    alert() {
        console.log('securitydoor alert')
    }
}
class Cat implements Alarm {
    alert() {
        console.log('cat alert')
    }
}

//一个类实现多个接口

// interface Alarm {
//     alert();
// };
// interface Light {
//     lightOn();
//     lightOff();
// };
// class Car implements Alarm, light {
//     alert() {
//         console.log('cat alert')
//     }
//     lightOn() {
//         console.log('car light on')
//     }
//     lightOff() {
//         console.log('car light off')
//     }
// };

//接口继承接口
// interface Alarm {
//     alert()
// };
// interface LightableAlarm extends Alarm {
//     lightOn();
//     lightOff();
// }

class Point {
    x: number;
    y: number;
};
interface Point3d extends Point {
    z: number;
};
let Point3d: Point3d = {x: 1, y: 2, z: 3};

//混合类型

interface SearchFunc {
    (source: string, subString: string): boolean;
};
let mySearch: SearchFunc;
mySearch = function(source: string, subString: string) {
    return source.search(subString) !== -1;
}

//函数还可以有自己的属性和方法

interface Counter {
    (start: number): string;
    interval: number;
    reset(): void;
};
function getCounter(): Counter {
    let counter = <Counter>function (start: number) {}
    counter.interval = 123;
    counter.reset = function () {};
    return counter;
}
let c = getCounter();
c(10);
c.reset();
c.interval = 5.0;