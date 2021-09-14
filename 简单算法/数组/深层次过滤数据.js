const arr = [
    {
        name: "张三",
        children: [
            { age: 1 },
            { age: 2 },
        ]
    },
    {
        name: "李四",
        children: [
            { age: 1 },
            { age: 2 },
        ]
    }
]

function group (arr) {
    return arr.filter(item => {
        const children = item.children.filter(a => {
            return a.age === 1
        })
        item.children = children;
        return children.length >= 1
    })
}