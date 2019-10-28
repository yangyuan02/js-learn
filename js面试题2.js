/*
 * @Author: yangyuan
 * @Date: 2019-02-21 17:33:29
 * @Email: 1367511704@qq.com
 * @LastEditTime: 2019-10-28 11:42:30
 * @Description: 
 */
console.log(1 + "2" + "2");
console.log(1 + +"2" + "2");
console.log(1 + -"1" + "2");
console.log(+"1" + "1" + "2");
console.log( "A" - "B" + "2");
console.log( "A" - "B" + 2);



var length = 10;

var test = function(){
	
	this.length = 5;

	console.log(this.length)
}

var obj = {
   length:10,
   test:function(fn){

     fn();
     fn.call(obj);

     arguments[0]();

   }
 
 }

 obj.test(test)




 var name = 'leafront';
(function(){
	if(typeof name === 'undefined'){
        
   		var name = 'nihao';

   		console.log('Hello ' + name);
   		
   } else {

     console.log('Hello ' + name);
   }	
})()




function test(a){

    console.log(a);

     var a = 5;

    function a(){}

    console.log(a)


 }

 test(8)



 var name = 'leaf';
console.log("I'am is "+ (name === 'leaf') ? 'leaf' : 'not leaf');



‘var a = 0

for(var i=1; i<=5;i++) {
	
  (function(){
     setTimeout(function(){

     	a += i;

     	console.log(a)

     },i*1000)
  })

}

console.log(a)



var a = 0

for(var i=1; i<=5;i++) {
	
     setTimeout(function(){

     	a += i;

     	console.log(a)

     },i*1000)


}

console.log(a)


for(var i=0; i<5;i++) {
	
     setTimeout(function(){

     	console.log(new Date,i)

     },i)


}

console.log(new Date(),i)



for(var i=0; i<5;i++) {
	
     setTimeout(function(){

     	console.log(new Date,i)

     },1000)


}

console.log(new Date(),i)



var a = 7 && 0;


var b = 0 && 7;


var c = 7 && 9;


function A(r) {
  var q=w=e=r;
}
A(1)
console.log(q) //出错 函数作用域
console.log(w) //1 因为没有声明自动全局量Î
console.log(e) //1 因为没有声明自动全局量Î

// 如何让if(a == 1 && a == 2)条件成立？

const a = {
    i:1,
    toString:function() {
        return a.i++;
    }
}