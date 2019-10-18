/*
 * @Author: yangyuan
 * @Date: 2019-10-18 16:30:32
 * @Email: 1367511704@qq.com
 * @LastEditTime: 2019-10-18 16:30:32
 * @Description:
 */
// once 函数只执行一次
const once = function(func, _this) {
  let flag = false;
  return function() {
    if (!flag) {
      flag = true;
      func.apply(_this, arguments);
    }
  };
};
