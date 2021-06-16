function count(n) {
    // 终止条件
    if (n === 0) return;
    console.log(n);
    count(n - 1);
}
// 执行了11次,只是最后一次n=0的时候没有打印
count(10); // 当次数太多的时候会出现溢盏

// 尾部调用
function count(n) {
    // 终止条件
    if (n === 0) return;
    console.log(n);
    return count(n - 1); // 尾部调用v8引擎回去缓存一个函数
}
// 执行了11次,只是最后一次n=0的时候没有打印
count(10);
