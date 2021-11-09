// https://zhuanlan.zhihu.com/p/59434318

// https://blog.csdn.net/wu_xianqiang/article/details/115425818

function getUser() {
    return { age: 1, name: 'yangyuan' }
}

type GetUserType = typeof getUser

type ReturnUser = ReturnType<GetUserType>
// 获取函数返回值
const csss: ReturnUser = {
    age: 1,
    name: 'sss'
}