/*
 * @Author: yangyuan
 * @Date: 2019-09-02 14:59:14
 * @Email: 1367511704@qq.com
 * @LastEditTime: 2019-09-02 15:00:23
 * @Description:
 */
import { createStore, combineReducers, applyMiddleware } from 'redux';
import * as reducers from './reducers';
import thunk from 'redux-thunk';

var store = createStore(combineReducers(reducers), applyMiddleware(thunk));

export default store;

// action.js
const addFavor = id => {
  return function(dispatch, getState) {
    reqFavor({ id: id }).then(res => {
      dispatch({
        type: 'FAVOR',
        id: id
      });
    });
  };
};

// component
dispatch(addFavor(id));
