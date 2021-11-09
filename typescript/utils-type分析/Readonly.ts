// Readonly<T>

// 将T中所有属性设置为只读

interface Todo {
    title: string;
}

const todo: Readonly<Todo> = { title: 'First Todo' };

todo.title = 'New Title'; // 报错

// 源码实现
type ReadonlyUtils<T> = { readonly [P in keyof T]: T[P] }
