/*
 * @Author: yangyuan
 * @Date: 2019-09-04 16:56:22
 * @Email: 1367511704@qq.com
 * @LastEditTime: 2019-09-04 17:10:50
 * @Description:
 */
// 实现一个 HardMan:
// HardMan("jack") 输出:
// I am jack

// HardMan("jack").rest(10).learn("computer") 输出
// I am jack
// //等待10秒
// Start learning after 10 seconds
// Learning computer

// HardMan("jack").restFirst(5).learn("chinese") 输出
// //等待5秒
// Start learning after 5 seconds
// I am jack
// Learning chinese

const HardMan = function(name) {
  this.queueList = [() => console.log(`I am ${name}`)];
  this.learn = function(subject) {
    this.queueList.push(() => console.log(`Learning ${subject}`));
    return this;
  };
  this.handleTime = function(time) {
    return () =>
      new Promise((resolve, reject) => {
        setTimeout(() => {
          console.log(`Start learning after ${time} second`);
          resolve();
        }, time * 1000);
      });
  };
  this.reset = function(time) {
    this.queueList.push(this.handleTime(time));
    return this;
  };
  this.resetFirst = function(time) {
    this.queueList.unshift(this.queueList(time));
    return this;
  };
  setTimeout(async () => {
    for (let todo of this.queueList) {
      await todo();
    }
  }, 0);
  return this;
};
