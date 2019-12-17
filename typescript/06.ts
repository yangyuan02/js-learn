//类型别名给一个类型起个新名字
type Name = string;
type NameResolver = () => string;
type nameOrResolver = Name | NameResolver;
function getName(n: nameOrResolver): Name {
    if (typeof n === 'string') {
        return n;
    } else {
        return n()
    };
};

//字符串字面量类型
type EventNames = 'click' | 'scroll' | 'mousemove';
function handleEvent(ele: Element, event: EventNames) {
    //
};
handleEvent(document.getElementById('hello'),'scroll');
// handleEvent(document.getElementById('world'),'dbclick')//error 

//元组
// let xcatliu: [string, number] = ['Xcat Liu', 25];
let xcatliu: [string, number];
xcatliu[0] = 'Xcat Liu';
xcatliu[1] = 25;
xcatliu[0].slice(1);
xcatliu[1].toFixed(2);
