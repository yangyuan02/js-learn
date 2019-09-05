/*
 * @Author: yangyuan
 * @Date: 2019-09-05 11:16:38
 * @Email: 1367511704@qq.com
 * @LastEditTime: 2019-09-05 11:24:04
 * @Description:
 */
const combineReducers = reducers => {
  return (state = {}, action) => {
    return Object.keys(reducers).reduce((nextState, key) => {
      nextState[key] = reducers[key](state[key], action);
      return nextState;
    }, {});
  };
};

const reduces = combineReducers({
  //...
});
