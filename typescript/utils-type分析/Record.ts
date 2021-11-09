// Record<K,T>

// 构造一个类型，该类型具有一组属性K，每个属性的类型为T。可用于将一个类型的属性映射为另一个类型。

type TodoProperty = 'title' | 'description';

type Todo = Record<TodoProperty, string>;

const todo: Todo = {
    title: 'First Todo',
    description: 'this is the first todo'
};

interface PageInfo {
    title: string;
}

type Page = "home" | "about" | "contact";

const nav: Record<Page, PageInfo> = {
    about: { title: "about" },
    contact: { title: "contact" },
    home: { title: "home" },
};

// 很好理解，Record 后面的泛型就是对象键和值的类型。

// 比如我需要一个对象，有 A,B,C 三个属性，属性的值必须是数字，那么就这么写：
type keys = 'A' | 'B' | 'C'
const result: Record<keys, number> = {
    A: 1,
    B: 2,
    C: 3
}

// 源码实现

type RecordUtils<K extends keyof any, T> = { [P in K]: T; };



