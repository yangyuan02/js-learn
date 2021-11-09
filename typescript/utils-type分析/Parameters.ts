// Parameters<T>

// 返回类型为T的函数的参数类型所组成的数组


function getUser(a: string, b: number) {
    return { age: 1, name: 'yangyuan' }
}


type GetUserTypessss = typeof getUser

type ReturnUserssss = Parameters<GetUserTypessss>
// 获取函数返回值
const cssssss: ReturnUserssss = ['1', 2]