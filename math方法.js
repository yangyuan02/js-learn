Math.random() // 返回[0,1)之间的数

// 快速生成一段随机文本,有可能生成数字

Math.random().toString().slice(2) //经典方法
// or
Math.random().toString(36).substring(7)
// or
(new Date() - 0).toString(36)
// 这样就随机生成的字母了
Math.random().toString(36).replace(/[^a-z]+/g,'')
//or
Math.random().toString(36).slice(2).replace(/\d/g,'')


Math.random() // 返回[0,1)之间的数

// 生成[n,m)

Math.random() * (m-n) + n

// 生成[n,m],(n,m),(n,m]

// [n,m]
function fullClose (n, m) {
    var result = Math.random() * (m + 1 -n) +n;
    while (result > m) {
        result = Math.random() * (m + 1-n) +n;
    }
}