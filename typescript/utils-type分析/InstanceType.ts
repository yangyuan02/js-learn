// InstanceType<T>

// 返回构造函数类型T的实例类型


class C {
    x = 0;
    y = 0;
}

type T0 = InstanceType<typeof C>;  // C

type T1 = InstanceType<any>;  // any

type T2 = InstanceType<never>;  // any

type T3 = InstanceType<string>;  // error:类型“string”不满足约束“new (...args: any) => any”

type T4 = InstanceType<Function>; // error:类型“Function”不满足约束“new (...args: any) => any”。类型“Function”提供的内容与签名“new (...args: any): any”不匹配

type T5 = InstanceType<typeof Date>

