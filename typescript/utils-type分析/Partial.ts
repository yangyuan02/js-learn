// Partial<T>
// 将T中所有属性转换为可选属性。返回的类型可以是T的任意子集

interface Todo {
    title: string;
    description: string;
    done: boolean;
}

function updateTodo(todo: Todo, newTodo: Partial<Todo>) {
    return { ...todo, ...newTodo };
}
const todo: Todo = {
    title: 'First Todo',
    description: 'this is the first todo',
    done: false
};

updateTodo(todo, { done: true });

// 源码：

type PartialUtils<T> = { [P in keyof T]?: T[P] }

// 解析：

// type todoKeys = keyof Todo; // "title" | "description" | "done"

// keyof 取到 T 中的属性名，in 操作符遍历属性名。可选属性操作符 ? 将所有属性定义为可选属性。



