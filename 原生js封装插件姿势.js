/*
 * @Author: yangyuan
 * @Date: 2019-10-28 15:53:19
 * @Email: 1367511704@qq.com
 * @LastEditTime: 2019-10-28 15:57:20
 * @Description:
 */
(function(global) {
  'use strict';
  function MyPlugin(el, options) {
    // some code
  }
  MyPlugin.prototype = {
    show: function() {
      // some code
    }
  };
  if (typeof module !== 'undefined' && module.exports) {
    // commonjs规范
    module.exports = MyPlugin;
  } else if (typeof define === 'function') {
    // amd/cmd规范
    define(function() {
      return MyPlugin;
    });
  } else {
    global.MyPlugin = MyPlugin;
  }
})(this);
