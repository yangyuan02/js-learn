// Exclude<T,U>
// 从T中排除可分配给U的属性，剩余的属性构成新的类型

// type T0 = Exclude<'a' | 'b' | 'c', 'a'>;  // "b" | "c"

// type T2 = Exclude<string | number | (() => void), Function>;  // string | number

// 感觉有点去重的味道

// 源码：

// type Exclude<T, U> = T extends U ? never : T;


