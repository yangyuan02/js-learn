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

function findLatter(arr){
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












