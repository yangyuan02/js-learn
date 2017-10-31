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


