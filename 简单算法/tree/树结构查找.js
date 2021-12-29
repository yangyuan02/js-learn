// 树结构查找
// 查找节点其实就是一个遍历的过程，遍历到满足条件的节点则返回，遍历完成未找到则返回null。类似数组的find方法，传入一个函数用于判断节点是否符合条件，代码如下：
function treeFind(tree, func) {
    for (const data of tree) {
        if (func(data)) return data;
        if (data.children) {
            const res = treeFind(data.children, func);
            if (res) return res;
        }
    }
    return null;
}

function treeFind(tree, target, func, ele) {
    if (target === data) return data;
    let node = data.children;
    if (node) {
        let tmp = {};
        // 注意技巧 tem, ele
        const res = treeFind(node, target, func, tmp);
        if (res) {
            tmp["eletext"] = data;
            func(data);
            ele.Children = [];
            ele.Children.push(tmp);
            return res;
        }
    }
    return null;
}

treeFind(
    [document.documentElement],
    document.getElementById("su"),
    (item) => {},
    {}
);

// 遍历dom节点生成树形结构数据
