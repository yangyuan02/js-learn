// 无限递归数组下去
var list = [
    {
        age: 12,
        son: [
            {
                age: 13,
                son: [{ age: 14 }],
            },
        ],
    },
];
// var result = []
function test(list) {
    if (Array.isArray(list) && list.length > 0) {
        list.forEach((item, i) => {
            item.name = "yangyuan";
            test(item.son);
        });
    }
}
test(list);
// console.log(result)
