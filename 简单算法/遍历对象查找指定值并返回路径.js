let obj = {
    key1: "str1",
    key2: {
        key3: "str3",
    },
    key4: {
        key5: {
            key6: "str6",
            key7: "str7",
        },
        key8: "str8",
    },
    key9: "str9",
};

function search(object, value) {
    for (var key in object) {
        if (object[key] === value) return [key]; // 找到了
        if (typeof object[key] === "object") {
            // 没有找到并且是object类型
            // 是对象继续递归
            var temp = search(object[key], value);
            if (temp) return [key, temp].flat();
        }
    }
}
