/*
 * @Author: yangyuan
 * @Date: 2019-12-19 20:33:16
 * @Email: 1367511704@qq.com
 * @LastEditTime: 2019-12-19 20:37:51
 * @Description:
 */
class Permutation {
  constructor(arr) {
    this.arr = Array.from(arr);
    this.result = [];
    this.len = 0;
    this.run(0);
  }
  run(index) {
    if (index === this.arr.length - 1) {
      this.result.push(Array.from(this.arr));
      this.len++;
      return;
    }
    for (const i = index; i < this.arr.length; i++) {
      [this.arr[index], this.arr[i]] = [this.arr[i], this.arr[index]];
      this.run(index + 1);
      [this.arr[index], this.arr[i]] = [this.arr[i], this.arr[index]];
    }
  }
}

const p = new Permutation(['a', 'b', 'c']);
