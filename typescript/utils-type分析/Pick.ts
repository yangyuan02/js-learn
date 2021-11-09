// Pick<T,K>

// 通过在T中抽取一组属性K构建一个新类型.

interface Todo {
    title: string;
    description: string;
    done: boolean;
}

type TodoBase = Pick<Todo, 'title' | 'done'>;

const todo: TodoBase = {
    title: 'First Todo',
    done: false
};

// 源码实现

type PickUtils<T, K extends keyof T> = { [P in K]: T[P] } // K是T的属性集合的子集
