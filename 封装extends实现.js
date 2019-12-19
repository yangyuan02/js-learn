/*
 * @Author: yangyuan
 * @Date: 2019-12-19 14:54:53
 * @Email: 1367511704@qq.com
 * @LastEditTime : 2019-12-19 14:57:42
 * @Description:
 */
function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype = {
  eat: function() {
    console.log(this.name + '正在吃饭');
  },
  sang: function() {
    console.log(this.name + '正在唱歌');
  }
};
var liuyu = new Person('liuyu', 26);

function Student(name, age, score) {
  Person.call(this, name, age);
  this.score = score;
}

// 封装一个extends方法

Function.prototype.extends = function(func, options) {
  for (const key in fun.prototype) {
    this.prototype[key] = func.prototype[key];
  }
  for (const name in options) {
    this.prototype[name] = options[name];
  }
};

Student.extends(Person, {
  study: function() {
    console.log(this.name + '正学习...');
  }
});

var can = new Student('can', 21, '良好');
can.eat();
can.study();
