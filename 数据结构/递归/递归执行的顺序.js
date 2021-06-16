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