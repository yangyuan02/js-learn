var lodash = {
    compact(array) {  // 去掉数组中为假的值 【1,2,3,undefined,null,'',0】 ===> [1,2,3]
        var index = -1,
        length = array ? array.length : 0,
        resIndex = 0,
        result = [];
        while (++index < length) {
            var value = array[index];
            if (value) {
                result[resIndex++] = value;
            }
        }
        return result
    }
}