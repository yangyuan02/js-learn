const arr = [{ name: 'a' }, { name: 'b' }, { name: 'c' }]
// 借用引用关系
function arrToTree (arr) {
    for (let i = 0; i <= arr.length; i++) {
        if (arr[i] && arr[i + 1]) {
            arr[i]['children'] = [arr[i + 1]]
        }
    }
    return arr
}

arrToTree(arr)

function deep (tree) {
    if (!tree.children) {
        return
    }
    deep(tree)
}
// reduce实现--reduceRight
const arr = [{ name: 'a' }, { name: 'b' }, { name: 'c' }]
arr.reduce((prev, next) => {
    if (!prev.name) {
        prev = next
    } else {
        if (prev.children) {
            function deep (tree) {
                if (!tree.children) {
                    tree['children'] = [next]
                    return
                }
                deep(tree.children[0])
            }
            deep(prev)
        } else {
            prev['children'] = [next]
        }
    }
    return prev;
}, {})