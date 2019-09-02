/*
 * @Author: yangyuan
 * @Date: 2019-09-02 15:09:35
 * @Email: 1367511704@qq.com
 * @LastEditTime: 2019-09-02 15:15:31
 * @Description:
 */
export default function createThunkMiddleware(extraArgument) {
  return function({ dispatch, getState }) {
    return function(next) {
      return function(action) {
        if (typeof action === 'function') {
          return action(dispatch, getState, extraArgument);
        }
      };
    };
  };
}


export function addCount() {
    return {type:ADD_COUNT,data}
}

export function addCountAsync() {
    return dispatch() => {
        setTimeout(() => {
            dispatch(addCount)
        })
    }
}