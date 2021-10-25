
var a = { // 通过
    name: "第一层",
    dChecked: true,
    Children: [{
        name: "第二层",
        dChecked: false,
        Children: [{
            name: "第三层",
            dChecked: true,
            Children: [{
                name: "第四层",
                dChecked: true,
            }]
        }]
    }]
}

function filterChecked (tree) {
    let temp = {}
    function deep (data) {
        data.Children && deep(data.Children[0])
        const { Children, ...outer } = data;
        const { dChecked } = outer;
        if (dChecked) {
            if (JSON.stringify(temp) === '{}') {
                temp = outer
            } else {
                outer['Children'] = [temp];
                temp = outer;
            }
        }
    }
    deep(tree)
    return temp
}

filterChecked(a)

var b = {  // 通过
    name: "第一层",
    dChecked: true,
    Children: [{
        name: "第二层",
        dChecked: false,
        Children: [{
            name: "第三层",
            dChecked: true,
            Children: [{
                name: "第四层",
                dChecked: false,
            }]
        }]
    }]
}

var c = { // 不通过
    name: "第一层",
    dChecked: true,
    Children: [{
        name: "第二层",
        dChecked: false,
        Children: [{
            name: "第三层",
            dChecked: true,
        }]
    }]
}

var d = { // 不通过
    name: "第一层",
    dChecked: true,
    Children: [{
        name: "第二层",
        dChecked: false,
        Children: [{
            name: "第三层",
            dChecked: false,
        }]
    }]
}

var e = {  // 通过
    name: "第一层",
    dChecked: true,
    Children: [{
        name: "第二层",
        dChecked: false,
        Children: [{
            name: "第三层",
            dChecked: false,
            Children: [{
                name: "第四层",
                dChecked: true,
            }]
        }]
    }]
}


// filterChecked(e)

function getTree (tree) {
    const treeList = []
    while (tree.Children) {
        const { Children, ...outer } = tree;
        if (outer.dChecked) {
            treeList.push(outer)
        }
        tree = Children[0]
    }
    if (tree.dChecked) {
        treeList.push(tree)
    }
    return treeList
}

function arrToTree (arr) {
    for (let i = 0; i <= arr.length; i++) {
        if (arr[i] && arr[i + 1]) {
            arr[i]['children'] = [arr[i + 1]]
        }
    }
    return arr[0] || {}
}

arrToTree(getTree(a))


