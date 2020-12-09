// https://segmentfault.com/a/1190000016832285?utm_source=tag-newest

// 最常用的队列操作就是 Array.prototype.reduce() 了
let result = [1, 2, 5].reduce((accumulator, item) => {
    return accumulator + item;
}, 0); // <-- Our initial value.

console.log(result); // 8

// Promise队列
function runPromiseByQueue(myPromises) {
    myPromises.reduce((previousPromise, nextPromise) => {
        return previousPromise.then(() => nextPromise());
    }, Promise.resolve());
}

const createPromise = (time, id) => () =>
    new Promise((solve) =>
        setTimeout(() => {
            console.log("promise", id);
            solve();
        }, time)
    );

runPromiseByQueue([
    createPromise(3000, 1),
    createPromise(2000, 2),
    createPromise(1000, 3),
]);

// async/await写法
async function runPromiseByQueue(myPromises) {
    for (let value of myPromises) {
        await value();
    }
}
