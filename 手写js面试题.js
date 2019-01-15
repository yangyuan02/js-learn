function uniqArr(arr){//数组去重
    var result = []
    for(var i = 0;i<arr.length;i++){
        if(result.indexOf(arr[i])==-1){
            result.push(arr[i])
        }
    }
    return result
}
var arr = [1,2,3,4,5,2,1]
uniqArr(arr)


function uniqArrObj(arr){//数组对象去重
    var result  = []
    var number = []
    for(var i = 0;i<arr.length;i++){
        if(number.indexOf(arr[i].value)==-1){
            number.push(arr[i].value)
            result.push(arr[i])
        }
    }
    return result
}
var arr = [{"value":1},{"value":2},{"value":3},{"value":1}]
uniqArrObj(arr)


function uniqStr(arr){//字符串去重
    var str = ''
    for(var i = 0;i<arr.length;i++){
        if(str.indexOf(arr[i])==-1){
            str += arr[i]
        }
    }
    return str
}
var str = 'abcdefaaa'
uniqStr(str)


function bollSort(arr){ //冒泡排序
    var arr = arr
    for(var i = 0;i<arr.length;i++){
        for(var j = 0;j<arr.length-1;j++){
            if(arr[j]>arr[j+1]){
                var temp = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = temp
            }
        }
    }
    return arr
}
var arr = [1,2,3,6,7,4,5]
bollSort(arr)

function findLatter(arr){//找出那个字母出现次数最多
    var json  = {}
    for(var i = 0;i<arr.length;i++){
        json[arr[i]] = (json[arr[i]]+1)||1
    }
    var max = 1
    var latter = arr[0]
    for(var key in json){
        if(json[key]>max){
            max = json[key]
            latter = key
        }
    }
    return {
        max,
        latter
    }
}
var str = 'aaabcededaaaeegg'
findLatter(str)

function toQfw(n){//数字千分位   小数bug
    var str_n = n.toString()
    var result = ''
    while(str_n.length>3){
        result = ','+str_n.slice(-3)+result
        str_n = str_n.slice(0,str_n.length-3)
    }
    return str_n+result
}
var number = '12345678'

toQfw(number)


var str="123598752"; //正则版
var re=/(?=(?!(\b))(\d{3})+$)/g;
str=str.replace(re,",");
console.log(str)


function toThousands (str) {  //小数位版

    var number = arguments[1] || 0;

    var str = str.toString();

    var decimal = '';

    var pos = str.indexOf('.');

    var result = '';

    var decimalPos = '0';

    if (pos > -1) {

        decimal =  str.slice(pos,pos + 1 + number);

        str = str.slice(0,pos);

    }

    while( str.length > 3) {

        result = ',' + str.slice(-3) + result;

        str = str.slice(0,str.length-3);

    }

    if (str) {

        result = str + result;

        if(decimal && number) {

            result += decimal

        } else {

            if (number){

                decimalPos = '.' + decimalPos.repeat(number)

                result += decimalPos

            }

        }

    }

    return result;

}

var number = '12345678.3434';

toThousands(number,2)



var arr = [1,1,33,22,44,3,4,5,4,22];


function unique(arr){  //不用for do-while while写数组去重


    var result = [];

    var len = arr.length;


    return (function(){

      len--;
     
      if (len >= 0) {


          if (result.indexOf(arr[len]) === -1) {

             result.push(arr[len])

          }


        arguments.callee()


      }

      return result;


    })()
    


}

unique(arr);

//类数组转为真的数组

Array.prototype.slice.call([类数组])

Array.from([类数组])

//数组降维度
function flatten(arr){
    let res = []
    for(var i = 0;i<arr.length;i++){
        if(Array.isArray(arr[i])){//递归降维度
            res = res.concat(flatten(arr[i]))
        }else{
            res.push(arr[i])
        }
    }
    return res;
}

function flatten(arr){//reduce
    return arr.reduce(function(prev,item){
        return prev.concat(Array.isArray(item)?flatten(item):item)
    },[])
}

function flatten(arr){//扩展运算符
    while(arr.some(item => Array.isArray(item))){
        arr = [].concat(...arr)
    }
    return arr
}
//两种定时器实现轮询
setInterval(function(){
    $.get("/path/to/server",function(data){
        console.log(data)
    })
})

function poll(){
    setTimeout(function(){
        $.get("path/to/server",function(data){
            poll()
        })
    })
}
poll()


function compare(a, b) {
    if (a < b) {
        return -1;
    } else if(a>b) {
        return 1;
    } else {
        return 0;
    }
}

function where (arr, num) {
    arr.push(num);
    arr.sort(compare);
    for (var i = 0, len =arr.length;i<len;i++) {
        if(arr[i] === num) {
            return i
        }
    }
}
// 把一个数插入数组中，并找出插入的位置
where([1,2,3,4], 1.5); // 1

const a = () => {a:1}

// 找出数组中最大的数字
Array.prototype.max = function() {
    var max = this[0];
    for (var i = 0; i<this.length;i++) {
        if (this[i] > max) {
            max = this[i]
        }
    }
    return max;
}
var arr = [1,45,23,3,6,2,7,234,56];
arr.max();

Array.prototype.max = function() {
    return this.reduce((prev,cure,index,array) => {
        return prev > cure ? prev:cure
    })
}

var arr = [1,2,3]
arr.max();

Array.max = function(array) {
    return Math.max.apply(Math, array);
}

// 随机排序数组 有bug
function randomSort(a, b) {
    return Math.random() > 0.5 ? -1 : 1;
}

var arr = [1,2,3,4,5,6,7,8];
arr.sort(randomSort);

function randomSort(arr, newArr) {
    if (arr.length == 1) {
        newArr.push(arr[0]);
        return newArr;
    }
    var random = Math.ceil(Math.random() * arr.length) -1;
    newArr.push(arr[random]);
    arr.splice(random, 1);
    return randomSort(arr, newArr);
}

for (var i = 0; i < 10; i++) {
    var arr = [1,2,3,4,5,6];
    var newArr = [];
    randomSort(arr, newArr);
    console.log(newArr);
}


// 数组去空值

Array.prototype.notempty = function () {
    var arr = [];
    this.map(function(val, index) {
        if (val !== '' && val != undefined) {
            arr.push(val)
        }
    })
    return arr;
}
var a = [1,2,undefined,4,'',5,null,7,0,9];
var b = a.notempty() // []1,2,3,5,7,0,9








