/*
 * @Author: yangyuan
 * @Date: 2019-09-03 10:30:47
 * @Email: 1367511704@qq.com
 * @LastEditTime: 2019-09-03 11:11:35
 * @Description: vue watch简单实现
 */
// https://www.jianshu.com/p/00502d10ea95
class watcher {
  constructor(opts) {
    this.$data = this.getBaseType(opts.data) === 'Object' ? opts.data : {};
    this.$watch = this.getBaseType(opts.watch) === 'Object' ? opts.watch : {};
    for (let key in opts.data) {
      this.setData(key);
    }
  }
  getBaseType(target) {
    const typeStr = Object.prototype.toString.apply(target);
    return typeStr.slice(8, -1);
  }
  setData(_key) {
    Object.defineProperty(this, _key, {
      get: function() {
        return this.$data[_key];
      },
      set: function(val) {
        const oldVal = this.$data[_key];
        if (oldVal === val) return val;
        this.$data[_key] = val;
        this.$watch[_key] && typeof this.$watch[_key] === 'function' && this.$watch[_key].call(this, val, oldVal);
        return val;
      }
    });
  }
}

let vm = new watcher({
  data: {
    a: 0,
    b: 'Hello'
  },
  watch: {
    a(newVal, oldVal) {
      console.log(this.b);
    }
  }
});

vm.a = 2; // hello
