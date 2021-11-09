// Extract<T,U>

// 从T中抽出可分配给U的属性构成新的类型。与Exclude相反, 找到相同的

type T0 = Extract<'a' | 'b' | 'c', 'a'>;  // "a"

// 源码：

// type Extract<T, U> = T extends U ? T : never;


