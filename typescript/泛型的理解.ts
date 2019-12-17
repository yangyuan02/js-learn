/*
 * @Author: yangyuan
 * @Date: 2019-12-17 16:25:55
 * @Email: 1367511704@qq.com
 * @LastEditTime: 2019-12-17 16:56:11
 * @Description:
 */

// https://zhuanlan.zhihu.com/p/97739742

function makeState<S>() {
  // 可以指定变量的类型并不需要想number|string|boolean
  let state: S;
  function getState() {
    return state;
  }
  function setState(x: S) {
    state = x;
  }
  return { getState, setState };
}

const numState = makeState<number>();

numState.setState(1);

console.log(numState.getState());

// 进一步限定类型，比如我们期望泛型只能传递number活string
// extends 关键字为我们解决这一类问题

function makeState<S extends number | string>() {}

// 从侧面来说调用的过程每次都要指定类型有时候也挺麻烦的，我们可以尝试一下为泛型指定一下默认类型：

function makeState<S extends number | string = number>() {}

// 让我们来看另一个例子，多个泛型的表达：

function makePair<F, S>() {
  let pair: { first: F; second: S };
  function getPair() {
    return pair;
  }
  function setPair(x: F, y: S) {
    pair = {
      first: x,
      second: y
    };
  }
  return { getPair, setPair };
}

const { getPair, setPair } = makePair<number, string>();

// 试想一下，如果这个参数很多，那么对象的描述就很长了，我们可以使用接口或 type 来优化一下：

interface IPair<A, B> {
  first: A;
  second: B;
}
// 接下来我们看一看把 makeState 改造成一个类：
class State<S> {
  state: S;
  getState() {
    return this.state;
  }
  setState(x: S) {
    this.state = x;
  }
}

const numState = new State<number>();
number.setState(1);
