// 通过将T的所有属性设置为必选属性来构造一个新的类型。与Partial相对。

interface Example {
    a?: string;
    b?: string;
}

// const example1: Example = { a: 'aaa' }; // 正确的

// const example2: Required<Example> = { a: 'aaa' }; // 错误的

// 源码实现

type RequiredUtils<T> = { [P in keyof T]-?: T[P] }

// 与partial相似，遍历T中属性，并将所有属性置为必选属性

