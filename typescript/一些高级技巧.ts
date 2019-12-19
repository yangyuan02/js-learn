/*
 * @Author: yangyuan
 * @Date: 2019-12-19 16:48:55
 * @Email: 1367511704@qq.com
 * @LastEditTime : 2019-12-19 16:55:41
 * @Description:
 */
// https://segmentfault.com/a/1190000019449565?utm_source=tag-newest

// keyof
// keyof与Object.keys略有相似，只不过keyof取interface的键
interface Point {
  x: number;
  y: number;
}
type keys = keyof Point; // type keys = 'x' | 'y' 等价

// 假设有一个object如下所示，我们需要使用typescript实现一个get函数来获取属性值
const data = {
  a: 3,
  hello: 'world'
};

// function get(o: object, name: string) {
//   return o[name];
// }
// 1无法确定返回类型失去ts校验的功能
// 2无法对key做约束，有拼写错误

// object表示非原始类型，也就是除number，string，boolean，symbol，null或undefined之外的类型。
function get<T extends object, K extends keyof T>(o: T, name: K): T[K] {
  return o[name];
}

get(data, 'a'); // 调用

////////////////////////////////////////////////////////////////////////

// 实现Partial和Pick 模拟

type Partial<T> = {
  [P in keyof T]?: T[P];
};

type Pick<T, K extends keyof T> = {
  [P in K]: T[P];
};

interface IUser {
  id: number;
  age: number;
  name: string;
}

type PartialUser = Partial<IUser>;
// 等价 type PartialUser = {id?:number;age?:number;name?:string}

type PickUser = Pick<IUser, 'id' | 'age'>;
// 等价 type PickUser = {id:number;age:number}

////////////////////////////////////////////////////////////////////////

// typeof

const a: number = 3;

// 相当于: const b: number = 4
const b: typeof a;

////////////////////////////////////////////////////////////////////////
// Dictionary & Many

interface Dictionary<T> {
  [index: string]: T;
}

interface NumericDictionary<T> {
  [index: number]: T;
}

const dic: Dictionary<number> = {
  a: 3,
  b: 4
};

////////////////////////////////////////////////////////////////////////
// 使用 const enum 维护常量表
// 使用 object 维护常量
const enum TODO_STATUS {
  TODO = 'TODO',
  DONE = 'DONE',
  DOING = 'DOING'
}
// 使用 const enum 伟华常量
const enum TODO_STATUS {
  TODO = 'TODO',
  DONE = 'DONE',
  DOING = 'DOING'
}

function todos(status: TODO_STATUS): Todo[];

todos(TODO_STATUS.TODO);
