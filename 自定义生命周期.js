// 方法：

// setState
// 生命周期:

// willStateUpdate (nextState): 状态将要改变
// shouldStateUpdate (nextState): 是否要让状态改变，只有返回true才会改变状态
// didStateUpdate (prevState): 状态改变后（要是 shouldStateUpdate 返回的不为true则不会调用

// https://segmentfault.com/a/1190000017892146

class State {
  constructor() {
    this.state = {};
  }
  setState(nextState) {
    this.willStateUpdate(nextState);
    const update = this.shouldStateUpdate(nextState);
    if (update) {
      const preState = this.state;
      this.state = {
        ...preState,
        ...nextState
      };
    }
    this.didStateUpdate();
  }
  willStateUpdate() {
    // 默认什么也不做
  }
  didStateUpdate() {
    // 默认啥也不做
  }
  shouldStateUpdate() {
    // 默认返回true
    return true;
  }
}

class User extends State {
  constructor(name) {
    super();
    this.state = { name };
  }
  willStateUpdate(nextState) {
    // 覆盖同名方法
    console.log('willStateUpdate', nextState);
  }
  // 自定义合适更新
  shouldStateUpdate(nextState) {
    console.log('shouldStateUpdate', nextState);
    if (nextState.name === this.state.name) {
      return false;
    }
    return true;
  }
  didStateUpdate(prevState) {
    console.log('didStateUpdate', prevState);
  }
}

const user = new User('deepred');

user.setState({ name: 'hentai' });
