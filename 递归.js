// 无限递归数组下去
var list = [
    {
        age: 12,
        id: "0",
        son: [
            {
                age: 13,
                id: "2",
                son: [
                    { age: 14, id: "0" },
                    // {
                    //     age: 15,
                    //     id: "0",
                    //     son: [
                    //         {
                    //             age: 16,
                    //             id:'1'
                    //         },
                    //     ],
                    // },
                ],
            },
        ],
    },
];
// var result = []
function test(list) {
    const newList = list;
    if (Array.isArray(list) && list.length > 0) {
        list.forEach((item, i) => {
            if (item.id === "0" && !item.son) {
                list.splice(i, 1);
            } else if (item.id === "0" && item.son) {
                item.disabled = true;
            } else {
                item.disabled = false;
            }
            if (item.son && item.son.length === 0) {
                delete item["son"];
            }
            test(item.son);
        });
    }
    return newList;
}
test(list);
// console.log(result)
