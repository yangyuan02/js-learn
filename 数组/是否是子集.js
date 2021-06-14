var arr = [1, 2, 3, null, NaN, undefined, Infinity, '']
var brr = [0, 1, 2, 3, 4, null, NaN, undefined, Infinity, '']
if (!Array.prototype.subsetTo) {
    Array.prototype.subsetTo = function (arr) {
        return this.every(v => arr.includes(v))
    }
}
console.log(arr.subsetTo(brr))//ture