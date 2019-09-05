import { relative } from 'path';

/*
 * @Author: yangyuan
 * @Date: 2019-09-05 11:05:32
 * @Email: 1367511704@qq.com
 * @LastEditTime: 2019-09-05 11:11:12
 * @Description:
 */
function createStore(reducer, initialState) {
  var currentReducer = reducer;
  var currentState = initialState;
  var listeners = [];
  function getState() {
    return currentState;
  }
  function subscribe(listener) {
    listeners.push(listener);
    return function unsubscribe() {
      var index = listeners.indexOf(listener);
      listener.splice(index, 1);
    };
  }
  function dispatch(action) {
    currentState = currentReducer(currentState, action);
    listeners.slice().forEach(listeners => listeners());
    return action;
  }
  return {
    getState,
    subscribe,
    dispatch
  };
}
