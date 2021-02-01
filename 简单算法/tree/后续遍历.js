const tree = {
    children: [
        {
            children: [
                {
                    children: [
                        {
                            children: [
                                {
                                    children: [
                                        {
                                            children: [
                                                {
                                                    checked: true,
                                                    checkedinfo: ["Tag"],
                                                    Tag: "A",
                                                    Index: "1",
                                                },
                                            ],
                                            checked: true,
                                            checkedinfo: ["Tag", "Id"],
                                            Tag: "DIV",
                                            Id: "theme",
                                            Index: "1",
                                        },
                                    ],
                                    checked: true,
                                    checkedinfo: ["Tag", "ClassName"],
                                    Tag: "DIV",
                                    ClassName: "main-inner-wrap",
                                    Index: "1",
                                },
                            ],
                            checked: true,
                            checkedinfo: ["Tag", "Id"],
                            Tag: "DIV",
                            Id: "mainCnt",
                            ClassName: "main-inner",
                            Index: "1",
                        },
                    ],
                    checked: true,
                    checkedinfo: ["Tag", "Id"],
                    Tag: "DIV",
                    Id: "mainBg",
                    ClassName: "main",
                    Index: "1",
                },
            ],
            checked: true,
            checkedinfo: ["Tag"],
            Tag: "BODY",
            Index: "1",
        },
    ],
    checkedinfo: ["Tag", "Title", "App"],
    Tag: "HTML",
    checked: true,
    Title: "126网易免费邮--你的专业电子邮",
    App: "chrome.exe",
};
var postorder = function (root) {
    let result = [];
    let hasId = false;
    function postOrderTraversal(root) {
        if (!root) {
            return;
        }
        root.children &&
            root.children.forEach((child) => {
                postOrderTraversal(child);
            });
        if (root.Id) {
            root.checked = true;
            hasId = true;
        }
        result.push(root.Tag);
    }
    postOrderTraversal(root);
    return result;
};
postorder(tree);
