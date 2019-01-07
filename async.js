async function f() {
  return "hello world";
}
f().then(v => console.log(v)); // hello world

async function f() {
  throw new Error("出错了");
}
f().then(v => console.log(v), e => console.log(e)); //error 出错了  会变成return throw reject

// async函数返回的Promise对象，必须等到内部所有await命令的Promise对象执行完，才会发生状态改变。也就是说，只有async函数内部的异步操作执行完，才会执行then方法指定的回调函数。著作权归作者所有。
// 商业转载请联系作者获得授权,非商业转载请注明出处。

async function getTitle(url) {
  let response = await fetch(url);
  let html = await response.text();
  return html.match(/<title>([\s\S]+)<\/title>/i)[1];
}
getTitle("https://tc39.github.io/ecma262/").then(console.log); // 

// 正常情况下，await命令后面是一个Promise对象。如果不是，会被转成一个立即resolve的Promise对象。著作权归作者所有。

async function f() {
    return await 123;
}
f().then(v => console.log(v))

// await命令后面的Promise对象如果变为reject状态，则reject的参数会被catch方法的回调函数接收到

async function f() {
    await Promise.reject('出错了')
}
f().then(v => console.log(v)).catch(e => console.log(e))


// 下面第二个await语句是不会执行的，因为第一个await语句状态变成了reject。

async function f() {
    await Promise.reject('出错了');
    await Promise.resolve('hello world') //不会执行
}
// 解决一个出错后面不会执行的问题
async function f() {
    try {
        await Promise.reject('出错了')
    }catch (e) {

    }
    return await Promise.resolve('hello world')
}
f().then(v => console.log(v));

function timeOut(ms) {
    return new Promise((rej) => {
        setTimeout(() => {
            rej
        }, ms);
    })
}

async function asyncPrint(value, ms) {
    await timeOut(ms);
    console.log(value);
}
asyncPrint('hello world', 50) //50秒之后输出 hello world

// 第一点，await命令后面的Promise对象，运行结果可能是rejected，所以最好把await命令放在try...catch代码块中著作权归作者所有


// 第二点，多个await命令后面的异步操作，如果不存在继发关系，最好让它们同时触发。

let foo = await getFoo();
let bar = await getBar();

// 上面代码中，getFoo和getBar是两个独立的异步操作（即互不依赖），被写成继发关系。这样比较耗时，因为只有getFoo完成以后，才会执行getBar，完全可以让它们同时触发。

let [foo, bar] = await Promise.all([getFoo(), getBar()]);

let fooPromise = getFoo();
let barPromise = getBar();
let foo = await fooPromise();
let bar = await barPromise();


async function daFun(db) {
    let docs = [{}, {}, {}];
    for (let doc of docs) {
        await db.post(doc)
    }
}