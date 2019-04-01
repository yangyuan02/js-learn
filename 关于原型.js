Array.constructor === Function.constructor; // true
Function.constructor === Object.constructor; // true
String.constructor === Number.constructor; // true
Date.constructor === Function.constructor; // true
Math.constructor === JSON.constructor; // true 都来Function上面
Math.constructor === Function.constructor; // false
JSON.constructor === Function.constructor; // false

Array.__proto__ === Function.prototype; // true

Number.__proto__ === Function.prototype; // true

String.__proto__ === Function.prototype; // true

Object.__proto__ === Function.prototype; // true

Date.__proto__ === Function.prototype; // true

Math.__proto__ === Function.prototype; // false

RegExp.__proto__ === Function.prototype; // true

JSON.__proto__ === Function.prototype; // false

Array.__proto__ === Number.__proto__; // true
