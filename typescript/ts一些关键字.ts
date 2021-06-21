// https://zhuanlan.zhihu.com/p/136254808

// keyof 

// typeof

// extends 

// in

// is

// as 

enum aaaa {
    a,
    b
}

const bbb:aaaa = aaaa.b

type testa = {
    [key in aaaa]: string;
};

const ddd:testa = {
    [aaaa.a]:'1',
    [aaaa.b]:'3'
}