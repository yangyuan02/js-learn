function uniq(arr){ //数组去重
    var result  = []
    for(var i = 0;i<arr.length;i++){
        if(result.indexOf(arr[i])==-1){
            result.push(arr[i])
        }
    }
    return result
}
arr = [1,2,3,2,1]
uniq(arr)



function uniq(arr){ //数组对象去重
    var result = []
    var number = []
    for(var i = 0;i<arr.length;i++){
        if(number.indexOf(arr[i].value)==-1){
            number.push(arr[i].value)
            result.push(arr[i])
        }
    }
    return result
}
arr = [{"value":1},{"value":2},{"value":3},{"value":1},{"value":2}]
uniq(arr)


function uniqStr(arr){ //字符串去重
    var str = ''
    for(var i = 0;i<arr.length;i++){
        if(str.indexOf(arr[i])==-1){
            str += arr[i]
        }
    }
    return str
}
var str = 'abcdefgaaaabbb'
uniqStr(str)


var number = [1,6,2,4,3,5]
function bollSort(arr){//冒泡排序
    var arr = arr
    for(var i = 0;i<arr.length;i++){
        for(var j = 0;j<arr.length-i;j++){
            if(arr[j]>arr[j+1]){
                var temp = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = temp
            }
        }
    }
    return arr
}
bollSort(number)

var str = 'abcdefgaaaabbb'
function totalLetter(arr){ //统计字符出现最多次数和那个字符出现最多
    var json = {}
    for(var i = 0;i<arr.length;i++){
        json[arr[i]] = (json[arr[i]]+1)||1
    }
    var max = 1
    var maxletter = arr[0]
    for(var key in json){
        if(json[key]>max){
            maxletter = key
            max = json[key]
        }
    }
    return {
        max,
        maxletter
    }
}
totalLetter(str)
