var material = [
    {
        name: "第一层",
        age: 1,
        children: [
            {
                name: "第二层",
                age: 2,
                children: [
                    {
                        name: "第三层",
                        age: 4,
                        checked: true,
                    },
                    {
                        name: "第三层",
                        age: 5,
                        checked: false,
                    },
                ],
            },
            {
                name: "第二层",
                age: 3,
                children: [
                    {
                        name: "第三层",
                        age: 6,
                        checked: true,
                    },
                    {
                        name: "第三层",
                        age: 7,
                        checked: true,
                    },
                ],
            },
        ],
    },
];

function treeFilter (tree, func) {
    // 使用map复制一下节点，避免修改到原树
    return tree.map(node => ({ ...node })).filter(node => {
        const children = node.children && treeFilter(node.children, func)
        if (children) {
            node.children = children
        }
        return func(node) || (node.children && node.children.length)
    })
}

treeFilter(material, (node) => {
    return node && node.checked
})

// 菜单列表
const menuList = [
    {
        name: "系统管理",
        code: "system_manage",
        children: [
            {
                name: "用户管理",
                code: "user_manage",
                children: [
                    {
                        name: "添加用户",
                        code: "add_user",
                    },
                    {
                        name: "编辑用户",
                        code: "edit_user",
                    },
                    {
                        name: "删除用户",
                        code: "del_user",
                    },
                ],
            },
            {
                name: "角色管理",
                code: "role_manage",
                children: [
                    {
                        name: "添加角色",
                        code: "add_role",
                    },
                ],
            },
        ],
    },
    {
        name: "业务管理",
        code: "bus_manage",
        children: [
            {
                name: "流程管理",
                code: "process_manage",
            },
        ],
    },
    {
        name: "订单管理",
        code: "order_manage",
    },
];

// 权限列表
const myMenuCode = ["system_manage", "user_manage", "add_user", "order_manage"];

const filterMenu = (menuList, menuCode) => {
    return menuList
        .filter((item) => {
            return menuCode.indexOf(item.code) > -1;
        })
        .map((item) => {
            item = Object.assign({}, item);
            if (item.children) {
                item.children = filterMenu(item.children, menuCode);
            }
            return item;
        });
};

// 过滤后的菜单
const myMenu = filterMenu(menuList, myMenuCode);

console.log(myMenu);
