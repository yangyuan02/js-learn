// Omit<T,K>
// 从T中取出除去K的其他所有属性。与Pick相对。

interface Todo {
    title: string;
    description: string;
    done: boolean;
}

type TodoBase = Omit<Todo, 'description'>;

const todo: TodoBase = {
    title: 'First Todo',
    done: false
};

// 结合Exclude和Pick实现

// type Omit<T, K extends keyof any> = Pick<T, Exclude<keyof T, K>>;


