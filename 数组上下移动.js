var swapItems = function(arr, index1, index2){
    　　arr[index1] = arr.splice(index2,1,arr[index1])[0]
    　　return arr
    }
    var arr = [1,2,3]
    var newArr = []
    upData (arr, index) {
    　　if (this.arr.length > 1 && index !== 0) {
    　　　　newArr = swapItems(arr, index, index - 1)
    　　}
    }
    downData (arr, index) {
    　　if (this.arr.length > 1 && index !== (this.arr.length - 1)) {
    　　　　newArr = swapItems(this.arr, index, index + 1)
    　　}
    }