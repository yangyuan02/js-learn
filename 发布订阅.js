/*
 * @Author: yangyuan
 * @Date: 2019-06-03 14:52:23
 * @Email: 1367511704@qq.com
 * @LastEditTime: 2019-09-17 13:52:43
 * @Description:
 */
// 发布订阅
class EventEmitter {
  constructor() {
    this._events = Object.create(null);
  }
  on(type, handler) {
    (this._events[type] || (this._events[type] = [])).push(handler);
  }
  off(type, handler) {
    if (this._events[type]) {
      this._events[type].splice(this._events[type].indexOf(handler) >>> 0, 1);
    }
  }
  once(type, handler) {
    let fired = false;
    function magic() {
      this.off(type, magic);
      if (!fired) {
        fired = true;
        handler.apply(this, arguments);
      }
    }

    this.on(type, magic);
  }
  emit(type) {
    let payload = [].slice.call(arguments, 1);
    let array = this._events[type] || [];
    for (let i = 0; i < array.length; i++) {
      let handler = this._events[type][i];
      handler.apply(this, payload);
    }
  }
}
export default EventEmitter;

// 观察者
class Subject {
  constructor() {
    this.observer_list = [];
  }
  add_observer(obj) {
    this.add_observer.push(obj);
  }
  remove_boserver(obj) {
    for (let i = 0; i < this.observer_list.length; i++) {
      if (this.observer_list[i] === obj) {
        this.observer_list.splice(i, 1);
      }
    }
  }
  notify() {
    let args = Array.prototype.slice.call(arguments, 0);
    for (let i = 0; i < this.observer_list.length; i++) {
      this.observer_list.update(args);
    }
  }
}
