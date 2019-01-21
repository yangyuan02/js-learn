function cloneShallow(source) {
    var target = {};
    for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
            return target[key] = source[key]
        }
    }
}

var a = {
    name:'zhangsan',
    book: {
        title: 'you dont',
        price: '45'
    },
    a1: undefined,
    a2: null,
    a3: 123
};
var b = cloneShallow(a)
a.name = '高级前端'
a.book.price = '60'
console.log(b);

// 简单的深复制

function cloneDeep1(source) {  //存在问题没有对null 数组兼容
    var target = {};
    for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
            if (typeof source[key] === 'object') {
                target[key] = cloneDeep1(source[key])
            } else {
                target[key] = source[key]
            }
        }
    }
    return target;
}
var b = cloneDeep1(a);
console.log(b);

// 最终版
const isObject = value => {
	return Object.prototype.toString.call(value) === '[object Object]';
};

const isArray = value => {
	return Object.prototype.toString.call(value) === '[object Array]';
};

function assignDeep(target, source) {
	Object.keys(source).forEach(key => {
		if (isObject(source[key]) && isObject(target[key])) {
			assignDeep(target[key], source[key]);
		} else if (isArray(source[key]) && isArray(target[key])) {
			source[key].forEach((arr, index) => {
				isObject(arr) && isObject(target[key][index])
					? assignDeep(target[key][index], arr)
					: target[key][index] = arr;
			});
		} else if (isObject(source[key]) && !target[key]) {
			target[key] = {};
			assignDeep(target[key], source[key]);
		} else if (isArray(source[key]) && !target[key]) {
			target[key] = [];
			assignDeep(target[key], source[key]);
		} else {
			target[key] = source[key];
		}
	});
	return target;
}