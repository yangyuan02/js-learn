//内置对象 ECMAScript的内置对象
// Boolean/Error/Date/RegExp
let b: Boolean = new Boolean(1);
let e: Error = new Error('Error occurred');
let d: Date = new Date();
let r: RegExp = /[a-z]/;
//DOM or BOM内置对象 
//Document/HTMLElement/Event/NodeList
let body: HTMLElement = document.body;
let allDiv: NodeList = document.querySelectorAll('div');
document.addEventListener('click', function(e:MouseEvent) {

}, false)