function foo (i) {
    if (i == 4) {
        return;
    }
    console.log("fb:" + i);
    foo(i + 1);
    console.log("fe:" + i);
}
foo(1);

// 执行过程
function foo (i) {
    if (i == 4) {
        return
    }

    console.log('fb:' + i)

    function foo (i) { // 参数等于2
        if (i == 4) {
            return
        }

        console.log('fb:' + i)

        function foo (i) {  // 参数等于3
            if (i == 4) {
                return
            }

            console.log('fb:' + i)

            function foo (i) { // 参数等于4
                if (i == 4) {
                    return
                }
            }

            console.log('fe' + i)
        }

        console.log('fe' + i)

    }

    console.log('fe' + i)

}


// 在我还没有执行这段代码前，我想当然的打印输出顺序是：

//    打印输出：
fb: 1
fe: 1
fb: 2
fe: 2
fb: 3
fe: 3
// 实际执行
fb: 1
fb: 2
fb: 3
fe: 3
fe: 2
fe: 1

// 总结：始终记住js是 “解释执行”的这个特点，执行是从上到下的。在没有异步的情况下，js代码是不能跳过前面的代码 去执行后面的代码的。
var tree = {
    name: 'a',
    checked: true,
    children: [{
        name: 'b',
        checked: false,
        children: [{
            name: 'c',
            checked: true,
            children: [{
                name: 'd',
                checked: true
            }]
        }]
    }]
}
const result = [];
function test (data, aaaa) {
    if (!data.children) {
        return true;
    }
    console.log("a", data)
    let tmp = {};
    const temp = test(data.children[0], tmp)

    if (temp) {
        if (data.checked) {
            const { children, ...outer } = data;
            tmp = outer
        }
        aaaa.children = [];
        aaaa.children.push(tmp)
        console.log("b", data)
        console.log(aaaa)
        return true;
        // const { children, ...outer } = data;
        // result.push(outer)
    }
    console.log(aaaa)
    return false
}
test(tree, {})
let tree = {}
while (result.length) {
    const data = result.shift()
    tree = data;
    data.children = [...data]
}


const aa = {
    name: 'c',
    checked: true
}

const b = {
    name: 'b',
    checked: true,
    children: [aa]
}

const cc = {
    name: 'cc',
    checked: true,
    children: [bb]
}
